import React from 'react';
import '../../styles/Glow.css';
const Glow = () => {
  const iconStyles = {
    
    margin: '0',
    padding: '0',
    textDecoration: 'none', 
  };

  return (
    <div className="container2">
<a href="https://x.com/Prateek45571540?t=dddhKb_fWFP6EHIYBPXBEw&s=09" style={iconStyles}>
        <i className="fa fa-twitter" id="twitter"></i>
      </a>
      <a href="https://github.com/Prats222" style={iconStyles}>
        <i className="fa fa-github-square github" id="github"></i>
      </a>
      <a href="https://instagram.com/prats22_?igshid=NzZlODBkYWE4Ng==" style={iconStyles}>
        <i className="fa fa-instagram" id="instagram"></i>
      </a>

    </div>
  );
};

export default Glow;
