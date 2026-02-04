import React from 'react';
import './GlassesInfo.css';
import headerImg1 from '../../assets/headerImg1.png'; // Update path if needed

const GlassesInfo = () => {
  return (
    <div className="glasses-container">
      <img src={headerImg1} alt="headerImg1" className="glasses-image" />

      <div className="label front">
        <strong>Front</strong><br />
        Tortoiseshell<br />acetate (plastic)
      </div>

      <div className="label nose-pads">
        <strong>Nose Pads</strong><br />
        Adjustable, clear<br />silicone nose pads
      </div>

      <div className="label lens-details">
        <strong>Lens Details</strong><br />
        Lightweight,<br />anti-glare,<br />UV-protected
      </div>

      <div className="label temples">
        <strong>Temples (Arms)</strong><br />
        dual-color transition<br />(blue-grey to brown tip)
      </div>
    </div>
  );
};

export default GlassesInfo;