import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
      <>
        <div className="footer bg-slate-700">
          <p className='text-white text-center'>MERN FinalprojectOne &copy; {year}</p>
        </div>
      </> 
    );
  };

export default Footer;