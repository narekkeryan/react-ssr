import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

const About = () => (
  <Fragment>
    <Helmet>
      <title>About</title>
    </Helmet>
    <div className="container-fluid">
      <h2 className="text-centered">about us</h2>
      <p className="text-centered">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In minima error mollitia labore architecto, laboriosam, excepturi et corrupti consequatur asperiores facilis vitae animi, itaque praesentium? Doloremque, molestiae! Velit, quo molestias?</p>
    </div>
  </Fragment>
);

export default About;