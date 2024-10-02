"use client"
import React, { useState, useEffect } from 'react'

import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import Link from 'next/link'
const images = [
    "/image/home/premium_photo-1723874557442-91a97050927e.avif",
    "/image/home/photo-1617285395677-93d2f63f7988.avif",
    "/image/home/premium_photo-1661281312308-a2011d3d385b.avif",
]

export default function SliderHome() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    useEffect(() => {
        const InterVal = setInterval(() => {
            nextSlide()
        }, 4000)

        return () => clearInterval(InterVal)
    }, [])

    return (
        <div className='relative xs:w-[93%] xs:m-auto w-full px-[10px] xs:px-0'>
            <div className='flex items-start xs:items-center xs:flex-row flex-col'>
                <div className='relative xs:w-[1000px] w-[470px]  h-[96] xs:h-[500px] overflow-hidden xs:right-0 right-2'>
                    {images.map((image, index) => (
                        <img src={image}
                            alt={`Slide ${index}`}
                            key={index}
                            className={`w-full h-full object-center  ${index === currentIndex ? 'block' : "hidden"}`}
                        />
                    ))}
                </div>

                {/* next button */}

                <button className='hidden absolute top-0 left-0 z-30 xs:flex items-center justify-center h-full px-4' onClick={nextSlide}>
                    <GrFormPrevious className='text-[30px] hover:bg-white hover:rounded-2xl hover:text-center' />
                </button>

                {/* prev button */}

                <button className='hidden absolute top-0 left-[50.5%] z-30 xs:flex items-center justify-center h-full px-4' onClick={prevSlide}>
                    <MdNavigateNext className='text-[30px] hover:bg-white hover:rounded-2xl hover:text-center' />
                </button>

                <div className='hidden xs:flex flex-col ml-0 xs:ml-10 items-start w-[800px] '>
                    <span className='text-sm mb-2'>Always classy!</span>
                    <span className='text-[50px] ml-10 mb-2'>Men's</span>
                    <span className='text-[50px] ml-10 mb-2'>business</span>
                    <span className='text-[50px] ml-10 mb-2'>clothing</span>
                    <Link href={'/shopping'}>
                        <button className='bg-black text-white py-3 px-6 rounded-lg hover:bg-white hover:text-black transition-all hover:duration-500 border hover:border-black'>Shop now</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
