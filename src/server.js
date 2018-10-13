import express from 'express';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import App from './components/App';
import routes from './routes';
import store from './store';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  const context = {};
  const dataRequirements =
    routes
      .filter(route => matchPath(req.url, route))
      .map(route => route.component);

  Promise.all(dataRequirements)
    .then(() => {
      const reactDom = ReactDOMServer.renderToString(
        <Provider store={store}>
          <StaticRouter context={context} location={req.url}>
            <App />
          </StaticRouter>
        </Provider>
      );
      const helmetData = Helmet.renderStatic();

      const status = context.status ? context.status : 200;
      res.status(status).end(htmlTemplate(reactDom, helmetData));
    })
    .catch(e => {
      console.error(e);
      res.status(500).end('Something went wrong.');
    });
});

app.listen(port, console.log(`Running on port ${port}.`));

function htmlTemplate(reactDom, helmetData) {
  return `
    <!DOCTYPE html>
    <html ${helmetData.htmlAttributes.toString()}>
    <head>
      <meta charset="UTF-8" />
      <meta name="description" content="React Server-Side Rendering" />
      <meta name="keywords" content="react, server-side render, react-router, redux" />
      <meta name="author" content="Narek Keryan" />
      <meta name="contact" content="narek.keryan@gmail.com" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
      <title>React SSR</title>
      <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet" />
      <link href="/main.css" rel="stylesheet" />
      ${helmetData.title.toString()}
      ${helmetData.meta.toString()}
      ${helmetData.link.toString()}
    </head>
    <body ${helmetData.bodyAttributes.toString()}>
      <div id="root">${reactDom}</div>
      <script src="/app.bundle.js"></script>
    </body>
    </html>
  `;
}