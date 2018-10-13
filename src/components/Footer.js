import React from 'react';
import Social from '../components/Social';

const Footer = () => (
  <footer className="footer">
    <div className="container-fluid">
      <Social />
      <div className="nkg">
        <a href="http://nkgdev.com" target="_blank" className="link">Made with &hearts; by Narek Keryan</a>
      </div>
    </div>
  </footer>
);

export default Footer;