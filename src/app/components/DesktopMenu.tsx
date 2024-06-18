import React from 'react';
import { Link as ReactScrollLink } from "react-scroll";


const DesktopMenu = () => {
  return (
    <div className='justify-between items-center space-x-5 hidden lg:flex'>
      <ReactScrollLink to='selectedWorks' smooth={true} duration={500}>
        <p className='font-roboto text-white text-[24px] font-medium rounded-[32px] border border-white px-12 py-2 border-opacity-[.8] cursor-pointer uppercase'>
          work
        </p>
      </ReactScrollLink>
      <ReactScrollLink to='contactMe' smooth={true} duration={500}>
        <p className='font-roboto text-white text-[24px] font-medium rounded-[32px] border border-white px-12 py-2 border-opacity-[.8] cursor-pointer uppercase'>
          contact
        </p>
      </ReactScrollLink>
    </div>
  );
}

export default DesktopMenu