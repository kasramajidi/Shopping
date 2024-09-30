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
        <div className="xs:w-[93%] xs:m-auto w-full px-[10px] xs:px-0">
            <div className="flex flex-col justify-center py-10">
                <hr className='my-[10px] block xs:hidden' />
                {/* part one */}
                <div className="flex flex-col xs:flex-row items-start xs:items-center">
                    <div className="flex flex-col justify-center items-center xs:items-start w-full xs:w-1/4 h-auto xs:h-[250px] mb-10 xs:mb-0 order-2 xs:order-none">
                        <Image
                            width={180}
                            height={180}
                            alt=""
                            src={"/img/footer/logo.png"}
                            className="xs:mb-8 mb-4 xs:w-[180px] w-[100px]"
                        />
                        <span className={`xs:mb-5 mb-2  ${InterLight.className} `}>
                            Waliasr town, <br className='xs:block hidden' />
                            Tehran, Yaftabad, <br className='xs:block hidden' /> Iran
                        </span>
                        <span
                            className={`font-bold ${InterLight.className} xs:mb-2 mb-1 xs:text-[20px] text-[16px]`}
                        >
                            (786) 425-1900
                        </span>
                        <span className={`${InterLight.className} text-[14px] xs:mb-0 mb-3`}>
                            kasramajidy81@gmail.com
                        </span>
                        <div className='block xs:hidden'>
                            <div className="flex items-center text-[24px]">
                                <Link href={"/"}>
                                    <CiInstagram className="xs:mr-5 mr-3" />
                                </Link>
                                <Link href={"/"}>
                                    <LiaTelegram className="xs:mr-5 mr-3" />
                                </Link>
                                <Link href={"/"}>
                                    <SlSocialFacebook className="xs:mr-5 mr-3" />
                                </Link>
                                <Link href={"/"}>
                                    <SlSocialYoutube className="xs:mr-5 mr-3" />
                                </Link>
                                <Link href={"/"}>
                                    <RxTwitterLogo />
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-row justify-between w-full xs:w-2/4 h-auto xs:h-[250px] mb-10 xs:mb-0 order-3 xs:order-none">
                        <div className="flex flex-col mb-10 xs:mb-0 text-[14px]  xs:text-[16px]">
                            <span className={` ${InterBold.className} py-5 text-[17px]`}>
                                Shop
                            </span>
                            <Link href={"/"} className="mb-2">
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Shop
                                </span>
                            </Link>
                            <Link href={"/"} className="mb-2">
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Women
                                </span>
                            </Link>
                            <Link href={"/"} className="mb-2">
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Men
                                </span>
                            </Link>
                            <Link href={"/"} className="mb-2">
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Shoes
                                </span>
                            </Link>
                            <Link href={"/"} className="mb-2">
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Accessories
                                </span>
                            </Link>
                            <Link href={"/"}>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Sale
                                </span>
                            </Link>
                        </div>

                        <div className="flex flex-col ml-0 xs:ml-10 text-[14px]  xs:text-[16px]">
                            <span className={` ${InterBold.className} py-5 text-[17px]`}>
                                Infomations
                            </span>
                            <Link href={"/"} className="mb-2">
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Track Order
                                </span>
                            </Link>
                            <Link href={"/"} className="mb-2">
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Returns
                                </span>
                            </Link>
                            <Link href={"/"} className="mb-2">
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Shipping Info
                                </span>
                            </Link>
                            <Link href={"/"} className="mb-2">
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Help
                                </span>
                            </Link>
                            <Link href={"/"} className="mb-2">
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Gift Cards
                                </span>
                            </Link>
                            <Link href={"/"}>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Privacy Policy
                                </span>
                            </Link>
                        </div>

                        <div className="flex flex-col ml-0 xs:ml-10 text-[14px]  xs:text-[16px]">
                            <span className={` ${InterBold.className} py-5`}>
                                Account
                            </span>
                            <Link href={"/"} className="mb-2">
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Cart
                                </span>
                            </Link>
                            <Link href={"/"} className="mb-2">
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    My Account
                                </span>
                            </Link>
                            <Link href={"/"} className="mb-2">
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    My Orders
                                </span>
                            </Link>
                            <Link href={"/"} className="mb-2">
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Wishlist
                                </span>
                            </Link>
                            <Link href={"/"}>
                                <span className={`hover:text-red-500 ${InterLight.className}`}>
                                    Affiliate Program
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start ml-0 xs:ml-10 w-full xs:w-1/4 h-auto xs:h-[250px] order-1 xs:order-none">
                        <span className={`${InterBold.className} py-5 text-[18px]`}>
                            Join our newsletter and get $20 discount for your first order
                        </span>
                        <div className="flex items-center mb-8">
                            <input
                                type="email"
                                placeholder="Your Email Here... "
                                className="border border-black py-3 pl-4 pr-12 mr-2 text-[14px] w-full xs:w-auto"
                            />
                            <button className="bg-black text-white py-3 px-8 hover:bg-red-700 transform hover:duration-500 focus:outline-none focus:border-none">
                                Subscribe
                            </button>
                        </div>
                        <hr className='pt-[15px] pb-[30px] block xs:hidden' />
                        <div className='hidden xs:block'>
                            <div className="flex items-center text-[24px]">
                                <Link href={"/"}>
                                    <CiInstagram className="mr-5" />
                                </Link>
                                <Link href={"/"}>
                                    <LiaTelegram className="mr-5" />
                                </Link>
                                <Link href={"/"}>
                                    <SlSocialFacebook className="mr-5" />
                                </Link>
                                <Link href={"/"}>
                                    <SlSocialYoutube className="mr-5" />
                                </Link>
                                <Link href={"/"}>
                                    <RxTwitterLogo />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="xs:mt-16 py-1" />
                {/* part two */}
                <div className="flex flex-col xs:flex-row xs:items-center justify-around py-5">
                    <div className='block xs:hidden'>
                        <div className='flex items-center mb-8'>
                            <div className="flex flex-col justify-center items-center px-5">
                                <PiTruckThin className="text-[40px] hover:opacity-50 mb-3" />
                                <div className="w-full flex flex-col ml-5">
                                    <span className={`${InterBold.className} text-[12px] w-full mb-2 ml-5`}>
                                        Free shipping for all orders over $200
                                    </span>
                                    <span className={`${InterLight.className} text-[12px] ml-4`}>Only in this week</span>
                                </div>
                            </div>
                            <div className=" bg-gray-500 h-[100px] w-[3.5px] opacity-20"></div>
                            <div className="flex flex-col justify-center items-center px-5 mr-1">
                                <BsPercent className="text-[40px] mb-3 hover:opacity-50" />
                                <div className="w-full flex flex-col ml-5">
                                    <span className={`${InterBold.className} text-[12px] w-full mb-2 ml-5`}>
                                        Special discounts for regular customers
                                    </span>
                                    <span className={`${InterLight.className} text-[12px] ml-4`}>Coupons up to $ 100</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden xs:block'>
                        <div className='flex items-center'>
                            <div className="flex items-center px-5">
                                <PiTruckThin className="text-[43px] hover:opacity-50" />
                                <div className="flex flex-col ml-5">
                                    <span className={`${InterBold.className}`}>
                                        Free shipping for all orders over $200
                                    </span>
                                    <span className={`${InterLight.className}`}>Only in this week</span>
                                </div>
                            </div>
                            <div className="bg-gray-500 h-12 w-[1px] opacity-20"></div>
                            <div className="flex items-center px-5">
                                <BsPercent className="text-[43px] hover:opacity-50" />
                                <div className="flex flex-col ml-5">
                                    <span className={`${InterBold.className}`}>
                                        Special discounts for regular customers
                                    </span>
                                    <span className={`${InterLight.className}`}>Coupons up to $ 100</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden xs:block bg-gray-500 h-12 w-[1px] opacity-20"></div>
                    <div className='block xs:hidden'>
                        <div className='flex items-center'>
                            <div className="flex flex-col items-center px-5 mr-6">
                                <MdCardGiftcard className="text-[40px] mb-3 hover:opacity-50 ml-8" />
                                <div className="flex flex-col ml-5 items-center justify-center">
                                    <span className={`${InterBold.className} text-[12px] w-full mb-2`}>Free gift wrapping</span>
                                    <span className={`${InterLight.className} text-[12px]`}>
                                        With 100 letters <br /> custom note
                                    </span>
                                </div>
                            </div>
                            <div className=" bg-gray-500 h-[100px] w-[2px]  opacity-20"></div>
                            <div className="flex flex-col justify-center items-center mr-2">
                                <TfiHeadphoneAlt className="text-[40px] mb-3 hover:opacity-50 font-normal ml-8" />
                                <div className="flex flex-col  items-center justify-center ml-8">
                                    <span className={`${InterBold.className} text-[12px] w-full mb-2`}>
                                        Expert Customer Service
                                    </span>
                                    <span className={`${InterLight.className} text-[12px]`}>
                                        8:00 - 20:00, 7 days/week
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden xs:block'>
                        <div className='flex items-center'>
                            <div className="flex items-center px-5">
                                <MdCardGiftcard className="text-[43px] hover:opacity-50" />
                                <div className="flex flex-col ml-5">
                                    <span className={`${InterBold.className}`}>Free gift wrapping</span>
                                    <span className={`${InterLight.className}`}>
                                        With 100 letters custom note
                                    </span>
                                </div>
                            </div>
                            <div className="hidden xs:block bg-gray-500 h-12 w-[1px] opacity-20"></div>
                            <div className="flex items-center ml-5">
                                <TfiHeadphoneAlt className="text-[43px] hover:opacity-50 font-normal" />
                                <div className="flex flex-col ml-5">
                                    <span className={`${InterBold.className}`}>
                                        Expert Customer Service
                                    </span>
                                    <span className={`${InterLight.className}`}>
                                        8:00 - 20:00, 7 days/week
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {/* part three */}
                <div className="flex flex-col xs:flex-row items-center pt-10">
                    <div className="flex flex-col xs:flex-row items-center w-full xs:w-1/2 justify-between mb-5 xs:mb-0">
                        <Link href={"/"}>
                            <span className={`${InterLight.className} text-sm`}>
                                © Copyright Loobek eCommerce. All Rights Reserved
                            </span>
                        </Link>
                        <div className='block xs:hidden'>
                            <div className='flex items-center mt-3'>
                                <Link href={"/"}>
                                    <span className={`${InterLight.className} text-sm hover:text-red-600 mr-6`}>
                                        Terms of Use
                                    </span>
                                </Link>
                                <Link href={"/"}>
                                    <span className={`${InterLight.className} text-sm hover:text-red-600 mr-6`}>
                                        Affiliate Program
                                    </span>
                                </Link>
                                <Link href={"/"}>
                                    <span className={`${InterLight.className} text-sm hover:text-red-600`}>
                                        Accessibility
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <Link href={"/"} className='hidden xs:block'>
                            <span className={`${InterLight.className} text-sm hover:text-red-600`}>
                                Terms of Use
                            </span>
                        </Link>
                        <Link href={"/"} className='hidden xs:block'>
                            <span className={`${InterLight.className} text-sm hover:text-red-600`}>
                                Affiliate Program
                            </span>
                        </Link>
                        <Link href={"/"} className='hidden xs:block'>
                            <span className={`${InterLight.className} text-sm hover:text-red-600`}>
                                Accessibility
                            </span>
                        </Link>
                    </div>
                    <div className="w-full xs:w-1/2 xs:justify-items-end justify-items-center grid mt-1">
                        <Image
                            width={300}
                            height={300}
                            alt=""
                            src={"/img/footer/payment-icons (1).png"}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}
