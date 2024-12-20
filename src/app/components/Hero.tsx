import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';

const Hero = () => {
  return (
    
       <div className='w-[1920px] h-[829px] bt-[92px] left-1 py-[140px] px-[220px] bg-[#043873] text-white flex'>
        <div className='w-[1480px] h-[547px] gap-[60px]'>
          <h2 className='w-[656px] h-[154px] font-inter font-bold text-[64px] leading-[77.45px] tracking-[-2%]'>
          Get More Done with whitepace
          </h2>
          <p className='w-[656px] h-[60px] font-inter font-normal text-[18px] leading-[30px] tracking-[-2%] mt-6'>
          Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
          </p>
          <button className='w-[219px] h-[63px] rounded-lg p-5 mt-8 gap-[10px] bg-[#4F9CF9] flex justify-center items-center text-white'>
          Try Whitepace free <FaArrowRightLong  className='w-3 h-3 justify-center items-center'/>
          </button>

        </div>
        <div className=' '>
          <img src='/Image-container.png' alt='pic' width={824} height={549} />
        </div>
                
       </div>
    
  );
} 

export default Hero;