import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';

const Hero2 = () => {
  return (
    <div className='w-[1920px] h-[1588px] bt-[921px] left-1 py-[140px] px-[220px] gap-[100px]'>
      <div className='flex'>
        <div className='w-[1480px] h-[547px] gap-[60px]'>
        <div className='w-[672px] h-[411px] gap-[60px]'>
            <h2 className='w-[672px] h-[174px] font-inter font-bold text-[72px] leading-[87.14px] tracking-[-2%]'>Project Management</h2>
            <p className='w-[672px] h-[90px] font-inter font-normal text-[18px] leading-[18px] tracking-[-2%] mt-6'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app.
             Take photos with the mobile app and save them to a note.</p>
            <button className='w-[201px] h-[63px] rounded-md py-[20px] px-[40px] bg-[#4F9CF9] flex justify-center items-center gap-3 text-[#FAFAFA]'>
                Get started <FaArrowRightLong  className='w-3 h-3 justify-center items-center'/>
            </button>
        </div>

     </div>
    
       <div className=''>
        <Image src='/Image-container.png' alt='pic' width={748} height={547} />
        </div>

      </div>
       
       <div className='w-[1480px] h-[661px] gap-[100px] mt-9 flex'>  
        <div>
          <Image src='/Work Together Image.png' alt='pic' width={710} height={661} />
          
        </div> 
         <div className='w-[670px] h-[294px] gap-[60px]'>
          <h2 className='w-[670px] h-[87px] font-inter font-bold text-[72px] leading-[87.14px] tracking-[-2%] mt-28'>
          Work together
          </h2>
          <p className='w-[670px] h-[60px] font-inter font-normal text-[18px] leading-[30px] tracking-[-2%] mt-6'>
          With whitepace, share your notes with your colleagues and collaborate on them.
          You can also publish a note to the internet and share the URL with others.
         </p>
         <button className='w-[186px] h-[63px] rounded-md py-[20px] px-[40px] bg-[#4F9CF9] flex justify-center items-center gap-3 mt-14 text-[#FAFAFA]'>
         Try it now <FaArrowRightLong  className='w-3 h-3 justify-center items-center'/>
            </button>

         </div>
        </div>
       
    </div>
  );
}

export default Hero2;

export const Hero3=() => {
  return (
    <div className='w-[1921px] h-[574px] mt-[20px] py-[140px] px-[220px] bg-[#043873] text-white text-center items-center justify-center'>
        
         <div className='h-[294px] w-[1481px] justify-center items-center'>
          <h2 className='font-inter text-center font-bold text-[72px] leading-[87.14px] tracking-[-2%]'>
           Your work, everywhere you are

          </h2>
          <p className='font-inter text-center font-normal text-[18px] leading-[30px] tracking-[-2%] mt-[100px] items-center'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive.
           The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
          <button className='rounded-lg py-[20px] px-[40px] text-center bg-[#4F9CF9] mt-20'>
          Try Taskey -{'>'}  
          </button>
         </div>

    
    </div> 
  )
}
export const Hero4= () => {
  return (
    <div className='w-[1922px] h-[538px] mt-0 py-[140px] px-[220px] gap-[100px]'>
      <h2 className='text-center font-inter font-bold text-[72px] leading-[87.14px] tracking-[-2%]'>
      Our sponsors
      </h2>
      <div className='mt-20'>
        <Image src='/sponsors.png' alt='' width={1482} height={71}/>
      </div>
      
    </div>
  )
}