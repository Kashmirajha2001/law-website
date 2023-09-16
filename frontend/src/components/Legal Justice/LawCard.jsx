import React from 'react';

const LawCard = ({ imageSrc, title, description, link }) => {
  const redirectToUrl = () => {
    window.open(link);
  }  
  return (
        <div className="law-card">
          <img src={imageSrc} alt={title} className="law-card-image" />
          <h2 className="law-card-title">{title}</h2>
          <p className="law-card-description">{description}</p>
          <button onClick={redirectToUrl}>Read More ⮞</button>
        </div>
      );
}

export default LawCard