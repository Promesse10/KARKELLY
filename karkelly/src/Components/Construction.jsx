import React from 'react';
import construction from '../assets/construction.png';
import logo from '../assets/logo.png';
import plot from '../assets/plot.jpg';
import icon from '../assets/icon.png';

const Construction = () => {
  return (
    <div className='bg-slate-300'>
      <div>
        <img src={construction} alt="Construction" className="w-full h-auto"/>
      </div>

      <div className='flex flex-col md:flex-row my-10 mx-4 md:mx-36 justify-between items-center'>
        <img className='w-24 h-20 mb-4 md:mb-0' src={logo} alt="" />
        <p className='text-white font-inter text-2xl md:text-2xl text-center md:text-left'>Civil engineering projects</p>
      </div>

      <div className='flex flex-col lg:flex-row ml-4 md:ml-10 lg:ml-40 mb-8 my-10 lg:items-stretch'>
        <div className='flex-shrink-0 w-full md:w-full lg:w-60 h-48 md:h-64 lg:h-auto mb-10 lg:mb-0'>
          <img src={plot} alt="" className='w-full h-full object-cover'/>
        </div>

        <div className='bg-slate-200 p-4 md:p-6 w-full lg:w-auto flex-grow'>
          <ul className='font-inter text-xl md:text-2xl lg:text-3xl'>
            {['Land scaping works', 'Expertise', 'Master plan of house', 'Re-join land', 'Topographic map', 'Beacon', 'Road construction'].map((item, index) => (
              <li key={index} className='flex flex-row gap-4 md:gap-4 lg:gap-6 mb-4 lg:mb-6'>
                <img className='w-8 h-8 md:w-8 lg:w-10 md:h-8 lg:h-10' src={icon} alt="" /> {item}
              </li>
            ))}
            <li className='font-extralight text-blue-500 flex flex-row gap-4 md:gap-4 lg:gap-6'>
              <img className='w-8 h-8 md:w-8 lg:w-10 md:h-8 lg:h-10' src={icon} alt="" /> Click for more...
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Construction;
