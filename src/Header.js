import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <a className="header" href='/'>
      <div className="marquee-container">
        <h1 className="marquee">1-800-SPARKLE 1-800-SPARKLE 1-800-SPARKLE 1-800-SPARKLE 1-800-SPARKLE 1-800-SPARKLE </h1>
      </div>
    </a>
  );
};

export default Header;