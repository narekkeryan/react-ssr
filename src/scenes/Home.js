import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

const Home = () => (
  <Fragment>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <div className="container-fluid">
      <p>Hi, I am React Server-Side Rendering Boilerplate. To edit me open <code>./src/scenes/Home.js</code></p>
    </div>
  </Fragment>
);

export default Home;