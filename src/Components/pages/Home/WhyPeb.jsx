import React from 'react';

const WhyPEB = () => {
  const containerStyle = {
    fontFamily: 'sans-serif',
    padding: '20px',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '20px',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  };

  const column = (bgColor, text) => ({
    flex: 1,
    backgroundColor: bgColor,
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    color: '#fff',
  });

  const vsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    margin: '0 20px',
  };

  const vsStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    display: 'flex',
  };

  const vStyle = {
    color: '#ffbe03', // Yellow
  };

  const sStyle = {
    color: '#fc238c', // Pink
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Why PEB?</h1>
      <div style={columnStyle}>
        <div style={column('#ffbe03', 'PEB in React JS')}>
          <h2>Design and Quality</h2>
          <p>
            <p>Core Strength: Design and delivery are our strong suits; we deliver on time, every time.</p>
            <p>High-Quality Materials: We use leading-edge technology and quality materials for manufacturing.</p>
            <p>Customization Options: Our buildings offer options for flamboyant or sober looks, with roofs designed in various heights.</p>
            <p>Variety and Expansion: We provide options for different appearances and can expand as per customer needs.</p>
          </p>
        </div>
        <div style={column('#fc238c', 'PEB in Other Technologies')}>
          <h2>Efficiency and Support</h2>
          <p>
            <p>Competent Workforce: Our sophisticated and expeditious manpower ensures quality and low-maintenance results.</p>
            <p>Nominal Costs: We offer nominal maintenance and repair costs.</p>
            <p>After-Sales Support: We provide efficient after-sales support, ensuring continuous customer satisfaction.</p>
            <p>Erection and Maintenance: We handle the erection process efficiently, with provision for easy maintenance and repairs.</p>
          </p>
        </div>
      </div>

      <h2 style={{ ...headingStyle, marginTop: '40px' }}>PEB vs RCC</h2>
      <div style={columnStyle}>
        <div style={column('#007bff', 'PEB')}>
          <h2>PEB (Pre-Engineered Buildings)</h2>
          <p>
            <p>Faster Construction: PEB structures are prefabricated, leading to quicker on-site assembly.</p>
            <p>Lightweight: PEB structures use lighter materials, reducing foundation costs.</p>
            <p>Flexibility: PEB offers greater flexibility in design and can be easily modified or expanded.</p>
            <p>Cost-Effective: PEB often has lower overall costs due to reduced material waste and labor time.</p>
          </p>
        </div>


        <div style={column('#ffbe03', 'RCC')}>
          <h2>RCC (Reinforced Cement Concrete)</h2>
          <p>
            <p>Longer Construction Time: RCC construction is typically slower due to on-site casting and curing.</p>
            <p>Heavier Structure: RCC buildings are heavier, requiring stronger foundations.</p>
            <p>Less Flexibility: Modifying or expanding an RCC structure is more challenging and costly.</p>
            <p>Higher Costs: RCC can have higher costs due to material usage and extended construction periods.</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyPEB;
