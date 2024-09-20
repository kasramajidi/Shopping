import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import localFont from 'next/font/local'

const InterLight = localFont({
    src: "../../public/fonts/Inter/Inter_18pt-Light.ttf",
})

const InterBold = localFont({
    src: "../../public/fonts/Inter/Inter_18pt-Bold.ttf",
})

import { SlSocialYoutube } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { RxTwitterLogo } from "react-icons/rx";
import { LiaTelegram } from "react-icons/lia";
import { PiTruckThin } from "react-icons/pi";
import { BsPercent } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdCardGiftcard } from "react-icons/md";


export default function Footer() {
    return (
        <div className='w-[93%] m-auto '>
            <div className='flex flex-col justify-center py-10'>
                <div className='flex items-center'>
                    <div className='flex flex-col justify-center w-1/4 h-[250px]'>
                        <Image width={180} height={180} alt='' src={'/img/footer/logo.png'} className='mb-8' />
                        <span className={`mb-5 ${InterLight.className}`}>Waliasr town, <br /> Tehran, Yaftabad, <br /> Iran</span>
                        <span className={`font-bold ${InterLight.className} mb-2 text-[20px]`}>(786) 425-1900</span>
                        <span className={`${InterLight.className} text-[14px]`}>kasramajidy81@gmail.com</span>
                    </div>
                    <div className='flex items-start w-2/4 h-[250px]'>
                        <div className='flex flex-col h-full'>
                            <span className={` ${InterBold.className} py-5 text-[17px]`}>Shop</span>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Shop</span>
                            </Link>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Women</span>
                            </Link>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Men</span>
                            </Link>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Shoes</span>
                            </Link>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Accessories</span>
                            </Link>
                            <Link href={'/'}>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Sale</span>
                            </Link>
                        </div>
                        <div className='flex flex-col h-full ml-32'>
                            <span className={` ${InterBold.className} py-5 text-[17px]`}>Infomations</span>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Track Order</span>
                            </Link>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Returns</span>
                            </Link>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Shipping Info</span>
                            </Link>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Help</span>
                            </Link>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Gift Cards</span>
                            </Link>
                            <Link href={'/'}>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Privacy Policy</span>
                            </Link>
                        </div>
                        <div className='flex flex-col h-full ml-32'>
                            <span className={` ${InterBold.className} py-5 text-[17px]`}>Account</span>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Cart</span>
                            </Link>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>My Account</span>
                            </Link>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>My Orders</span>
                            </Link>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Wishlist</span>
                            </Link>
                            <Link href={'/'} className='mb-2'>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>Affiliate Program</span>
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col w-1/4 h-[250px]'>
                        <span className={`${InterBold.className} py-5 text-[18px]`}>Join our newsletter and get $20 discount <br /> for your first order</span>
                        <div className='flex items-center mb-8'>
                            <input type="email" placeholder='Your Email Here... ' className='border border-black py-3 pl-4 pr-12 mr-2 text-[14px]' />
                            <button className='bg-black text-white py-3 px-8 hover:bg-red-700 transform hover:duration-500 focus:outline-none focus:border-none'>Subscribe</button>
                        </div>
                        <div className='flex items-center text-[24px]'>
                            <Link href={'/'}>
                                <CiInstagram className='mr-5' />
                            </Link>
                            <Link href={'/'}>
                                <LiaTelegram className='mr-5' />
                            </Link>
                            <Link href={'/'}>
                                <SlSocialFacebook className='mr-5' />
                            </Link>
                            <Link href={'/'}>
                                <SlSocialYoutube className='mr-5' />
                            </Link>
                            <Link href={'/'}>
                                <RxTwitterLogo />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className='mt-16' />
                <div className='flex items-center justify-around py-5'>
                    <div className='flex items-center px-5'>
                        <PiTruckThin className='text-[43px] hover:opacity-50' />
                        <div className='flex flex-col ml-5 '>
                            <span className={`${InterBold.className}`}>Free shipping for all orders over $200</span>
                            <span className={`${InterLight.className}`}>Only in this week</span>
                        </div>
                    </div>
                    <div className='bg-gray-500 h-12 w-[1px] opacity-20'></div>
                    <div className='flex items-center px-5'>
                        <BsPercent className='text-[43px] hover:opacity-50' />
                        <div className='flex flex-col ml-5 '>
                            <span className={`${InterBold.className}`}>Special discounts for regular customers</span>
                            <span className={`${InterLight.className}`}>Coupons up to $ 100</span>
                        </div>
                    </div>
                    <div className='bg-gray-500 h-12 w-[1px] opacity-20'></div>
                    <div className='flex items-center px-5'>
                        <MdCardGiftcard className='text-[43px] hover:opacity-50' />
                        <div className='flex flex-col ml-5 '>
                            <span className={`${InterBold.className}`}>Free gift wrapping</span>
                            <span className={`${InterLight.className}`}>With 100 letters custom note</span>
                        </div>
                    </div>
                    <div className='bg-gray-500 h-12 w-[1px] opacity-20'></div>
                    <div className='flex items-center ml-5'>
                        <TfiHeadphoneAlt className='text-[43px] hover:opacity-50 font-normal' />
                        <div className='flex flex-col ml-5 '>
                            <span className={`${InterBold.className}`}>Expert Customer Service</span>
                            <span className={`${InterLight.className}`}>8:00 - 20:00, 7 days/week</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex items-center pt-10'>
                    <div className='flex items-center w-1/2 justify-between self-start'>
                        <Link href={'/'}>
                            <span className={`${InterLight.className} text-sm`}>© Copyright Loobek eCommerce. All Rights Reserved</span>
                        </Link>
                        <Link href={'/'}>
                            <span className={`${InterLight.className} text-sm hover:text-red-600`}>Terms of Use</span>
                        </Link>
                        <Link href={'/'}>
                            <span className={`${InterLight.className} text-sm hover:text-red-600`}>Affiliate Program</span>
                        </Link>
                        <Link href={'/'}>
                            <span className={`${InterLight.className} text-sm hover:text-red-600`}>Accessibility</span>
                        </Link>
                    </div>
                    <div className='w-1/2 justify-items-end grid  mt-1'>
                        <Image width={300} height={300} alt='' src={'/img/footer/payment-icons (1).png'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
