import React from 'react';
import './DirectorDesk.css'; // Ensure this CSS file is properly linked
import directorPhoto from '../../../assets/33.jpg'; // Replace with your actual path

const DirectorDesk = () => {
  return (
    <div className="director-desk-container">
      <div className="director-photo">
        <img
          src={directorPhoto} // Use the imported image
          alt="Director"
          className="director-image"
        />
      </div>
      <div className="director-description">
        <h2 className="director-title">Message from the Director</h2>
        <p className="director-text">
        We believe PEB the future of Engineering Nest. We are a professionally 
managed organization in engineering and technology, led by experienced 
engineers across various industries. Our mission is to exceed client expectations 
by delivering high-quality services at competitive prices while fostering 
employee growth. We prioritize customer satisfaction, constantly improving our 
services and processes to adapt to the evolving business environment. Our 
commitment to quality and professionalism has earned us accolades from 
numerous organizations. We believe in providing a discrimination-free 
workplace and are dedicated to health, safety and environmental sustainability, 
with a goal of achieving zero accidents through an efficient safety team. We 
remain forward-looking, performance-oriented and committed to continuous 
improvement
        </p>
      </div>
    </div>
  );
}

export default DirectorDesk;
