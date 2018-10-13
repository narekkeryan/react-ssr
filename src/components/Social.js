import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Social = () => (
  <div className="social">
    <a href="https://web.facebook.com/narek.keryan" target="_blank" className="link">
      <FontAwesomeIcon icon={faFacebookF} />
    </a>
    <a href="https://www.linkedin.com/in/narek-keryan-b79071112/" target="_blank" className="link">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
    <a href="https://github.com/narekkeryan" target="_blank" className="link">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a href="mailto:narek.keryan@gmail.com" target="_blank" className="link">
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
    <a href="tel:+37494940685" target="_blank" className="link">
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  </div>
);

export default Social;