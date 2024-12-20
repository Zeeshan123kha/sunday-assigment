import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='w-[1920px] h-[461px] mt-20 left-1 py-[140px] px-[220px] gap-[200px] bg-[#043873] flex justify-evenly'>
        <div>
        <Image src='/Logo.png' alt='sponser' width={191} height={34} />
        <p className='font-inter font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#F7F7EE] mt-3'>
        whitepace was created for the new ways we live and work. We make a better workspace around the world
        </p>
        </div>
        <div>
            <h2 className='font-inter font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]'>
            Product
            </h2>
            <p className='font-inter font-normal text-[16px] leading-[20px] tracking-[-2%] text-[#FFE492] mt-2'>Overview</p>
            <p className='font-inter font-normal text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF] mt-2'>Pricing</p>
            <p className='font-inter font-normal text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF] mt-2'>Customer stories</p>
        </div>
        <div>
            <h2 className='font-inter font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]'>
            Resources
            </h2>
            <p className='font-inter font-normal text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF] mt-2'>Blog</p>
            <p className='font-inter font-normal text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF] mt-2'>Guides & tutorials</p>
            <p className='font-inter font-normal text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF] mt-2'>Help center</p>
        </div>
        <div>
            <h2 className='font-inter font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF]'>
            Company
            </h2>
            <p className='font-inter font-normal text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF] mt-2'>About us</p>
            <p className='font-inter font-normal text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF] mt-2'>Careers</p>
            <p className='font-inter font-normal text-[16px] leading-[20px] tracking-[-2%] text-[#FFFFFF] mt-2'>Media kit</p>
            
        </div> 
        <div>
        <div className="text-white space-y-2 ">
         <p>©2021 Whitepace LLC.</p>
         <p>Privacy Policy | Terms of Service</p>
         </div>
        </div>
        
      
    </div>
  );
}

export default Footer;
