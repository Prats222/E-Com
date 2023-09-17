import React from 'react';
import '../../styles/Glow.css';
const Glow = () => {
  const iconStyles = {
    
    margin: '0',
    padding: '0',
    textDecoration: 'none', 
  };

  return (
    <div className="container">
<a href="https://twitter.com" style={iconStyles}>
        <i className="fa fa-twitter" id="twitter"></i>
      </a>
      <a href="https://github.com" style={iconStyles}>
        <i className="fa fa-github-square github" id="github"></i>
      </a>
      <a href="https://www.instagram.com" style={iconStyles}>
        <i className="fa fa-instagram" id="instagram"></i>
      </a>

    </div>
  );
};

export default Glow;
