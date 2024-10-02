import React from 'react';

import SliderHome from '../components/sliderHome/SliderHome';
import HomeSvg from '../components/HomeSvg/HomeSvg';
import { PiTruckThin } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdCardGiftcard } from "react-icons/md";
import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'

const InterLight = localFont({
  src: "../../public/fonts/Inter/Inter_18pt-Light.ttf",
})

const InterBold = localFont({
  src: "../../public/fonts/Inter/Inter_18pt-Bold.ttf",
})

export default function page() {

  return (
    <>
      <SliderHome />
      <section className='xs:w-[93%] xs:m-auto w-full px-[10px] xs:px-0'>
        {/* icon down image */}
        <div className='w-full flex xs:flex-row flex-col items-center xs:items-center justify-center mt-5'>
          <div className='flex items-center xs:mb-0 mb-2'>
            <PiTruckThin className='text-[20px] mr-3' />
            <span className={`${InterLight.className} text-[13px]`}>Fast & Free Shipping Over $2500</span>
          </div>
          <div className='flex items-center xs:ml-12 ml-0 xs:mb-0 mb-2'>
            <TfiHeadphoneAlt className='text-[20px] mr-3' />
            <span className={`${InterLight.className} text-[13px]`}>Expert Customer Service</span>
          </div>
          <div className='flex items-center xs:ml-12 ml-0'>
            <MdCardGiftcard className='text-[20px] mr-3' />
            <span className={`${InterLight.className} text-[13px]`}>Free gift wrapping</span>
          </div>
        </div>
      </section>
      <div className='bg-gray-500 h-[0.5px] w-full opacity-30 mt-4'></div>
      {/* section two, two image*/}
      <section className='xs:w-[93%] xs:m-auto w-full px-[10px] xs:px-0'>
        <div className='flex xs:flex-row flex-col items-center w-full mt-10 overflow-hidden'>
          <div className='relative w-full xs:w-1/2 overflow-hidden mb-3 xs:mb-0'>
            <Image src={'/image/home/modern-1-banner-1.jpg'} width={500} height={500} alt='' className='w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110' />
            <span className='absolute xs:top-[220px] xs:left-[55px] top-[130px] left-[39px] xs:text-[60px] text-[20px] text-white'>Men</span>
            <Link href={'/Men'}>
              <button className='absolute xs:top-[320px] xs:left-[60px] top-[170px] left-[40px] text-[12px] text-black py-1 px-6 bg-white border hover:border-white hover:text-white hover:bg-inherit'>Shop now</button>
            </Link>
          </div>
          <div className='relative w-full xs:w-1/2 overflow-hidden xs:ml-5 ml-0'>
            <Image src={'/image/home/modern-1-banner-2.jpg'} width={500} height={500} alt='' className='w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110' />
            <span className='absolute xs:top-[220px] xs:left-[50px] top-[130px] left-[37px] xs:text-[60px] text-[20px] text-white'>Women</span>
            <Link href={'/Women'}>
              <button className='absolute xs:top-[320px] xs:left-[60px] top-[170px] left-[40px] text-[12px] text-black py-1 px-6 bg-white border hover:border-white hover:text-white hover:bg-inherit '>Shop now</button>
            </Link>
          </div>
        </div>
      </section>
      {/* Top categories */}
      <section className='xs:w-[93%] xs:m-auto w-full px-[10px] xs:px-0'>
        <div className='flex items-start mt-16 justify-between'>
          <div className='flex flex-col items-start justify-start'>
            <span className='text-3xl mb-5'>Top categories</span>
            <Link href={'/shop'}>
              <span className='hover:text-red-600 text-sm'>Shop all products</span>
            </Link>
          </div>
          <HomeSvg />
        </div>
      </section>
      <div className='bg-gray-500 h-[0.5px] w-full opacity-30 mt-20'></div>
    </>
  );
};

