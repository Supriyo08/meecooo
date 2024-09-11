import React from 'react';
import image5 from '../.././../assets/cerr.png';

function Certifications() {
  return (
    <div className="px-[130px] w-screen h-screen overflow-y-auto bg-violet-300 py-[102px] flex justify-center items-center">
      <img 
        src={image5}
        alt="Certificate" 
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}

export default Certifications;
