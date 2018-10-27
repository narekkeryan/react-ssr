#!/usr/bin/env node
'use strict';

const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');
const packageJson = require('../package.json');

const files = ['.babelrc', 'index.js', 'webpack.config.js'];

const scripts = `"build": "webpack --mode production",
    "client": "webpack --mode development --watch",
    "server": "nodemon index.js",
    "start": "concurrently \\"npm run server\\" \\"npm run client\\""`;

const getDependencies = dependencies => (
  Object.entries(dependencies)
    .map(dependencie => `${dependencie[0]}@${dependencie[1]}`)
    .toString()
    .replace(/,/g, ' ')
    .replace(/\^/g, '')
    .replace(/fs-extra[^\s]+/g, '')
);

const projectDirectory = process.argv[2] || 'react-ssr';

console.log('Initializing project...');

exec(
  `mkdir ${projectDirectory} && cd ${projectDirectory} && npm init -y`,
  (err, stdout, stderr) => {
    if (err) {
      console.error('Something went wrong.', err);
      return;
    }

    console.log('Installing dependencies...');
    const dependencies = getDependencies(packageJson.dependencies);
    const devDependencies = getDependencies(packageJson.devDependencies);
    exec(
      `cd ${projectDirectory} && npm install --save ${dependencies} && npm install --save-dev ${devDependencies}`,
      (npmErr, npmStdout, npmStderr) => {
        if (npmErr) {
          console.error('Something went wrong.', npmErr);
          return;
        }

        console.log('Dependencies installed.');
        console.log('Fetching files...');

        const packageJSON = `${projectDirectory}/package.json`;
        fs.readFile(packageJSON)
          .then(file => (
            file
              .toString()
              .replace(/"test": "echo \\"Error: no test specified\\" && exit 1"/, scripts)
          ))
          .then(file => fs.writeFile(packageJSON, file))
          .catch(err => { throw err; });

        for (let file of files) {
          fs.createReadStream(path.join(__dirname, `../${file}`))
            .pipe(fs.createWriteStream(`${projectDirectory}/${file}`));
        }

        fs.copy(path.join(__dirname, '../src'), `${projectDirectory}/src`)
          .then(() => console.log(`All done!\nYour project successfully initialized into ${projectDirectory} directory.\nHappy hacking!`))
          .catch(err => { throw err; });
      },
    );
  },
);