import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <hr className='my-2 border-secondary w-[90%] m-auto'/>
      <div className="py-2 px-3 flex items-center justify-center">
      <p>&copy; {year} CL Blogs. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;