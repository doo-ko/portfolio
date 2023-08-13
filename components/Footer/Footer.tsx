import React from 'react';

import './footer.css';

type User = {
  name: string;
};

interface FooterProps {
  user?: User;
}

export const Footer = () => (
  <footer className="footer">
    <ul className="footerList">
      <li><a href="#" className="link">Git</a></li>
      <li><a href="#" className="link">Instagram</a></li>
    </ul>
    <p className="copyright">@ 2023 KOKORO ENDO All rights reserved.</p>
  </footer>
);
