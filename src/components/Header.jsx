'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Shop from '@/components/header/Shop';

export default function Header() {
    const [isShopOpen, setShopOpen] = useState(false);

    return (
        <div className="relative">
            <div className={'w-[93%] m-auto'}>
                {/* section one header */}
                <section className={'flex items-center justify-between py-3'}>
                    <div className={'flex items-center gap-x-6'}>
                        <FaInstagram className={'text-[18px] text-gray-700 hover:text-red-700 transition-all cursor-pointer'} />
                        <RiTiktokLine className={'text-[18px] text-gray-700 hover:text-red-700 transition-all cursor-pointer'} />
                        <AiOutlineYoutube className={'text-[18px] text-gray-700 hover:text-red-700 transition-all cursor-pointer'} />
                        <FiFacebook className={'text-[18px] text-gray-700 hover:text-red-700 transition-all cursor-pointer'} />
                    </div>
                    <div className={'flex items-center'}>
                        <div className={'flex items-center gap-x-5'}>
                            <Link href={'/'} className={'text-[13px] block text-gray-800 hover:text-red-700'}>About</Link>
                            <Link href={'/'} className={'text-[13px] block text-gray-800 hover:text-red-700'}>Blog</Link>
                            <Link href={'/'} className={'text-[13px] block text-gray-800 hover:text-red-700'}>Help</Link>
                            <Link href={'/'} className={'text-[13px] block text-gray-800 hover:text-red-700'}>Contact</Link>
                        </div>
                        <div className={'flex items-center gap-x-4 ml-14'}>
                            <div className={'flex items-center gap-x-2'}>
                                <Image src={'/Image/main/english.png'} className={'w-[18px] h-[12px]'} width={1000} height={1000} alt='Logo' />
                                <Link href={'/'} className={'text-[13px] block text-gray-800 hover:text-red-700'}>English</Link>
                                <IoChevronDown />
                            </div>
                            <div className={'flex items-center'}>
                                <Link href={'/'} className={'text-[13px] block text-gray-800 hover:text-red-700'}>$USD</Link>
                                <IoChevronDown />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* border */}
            <div className={'border-b border-b-gray-300'}></div>
            <div className={'w-[93%] m-auto'}>
                {/* section two header */}
                <section className={'mt-5 flex items-center justify-between'}>
                    <div className={'flex items-center gap-x-4'}>
                        {/* logo */}
                        <Image src={'/Image/main/logo.png'} className={'w-[172px] h-[37px] cursor-pointer'} width={1000} height={1000} alt='Logo' />
                        {/* links */}
                        <div className={'flex items-center gap-x-6'}>
                            <div className="relative">
                                <Link
                                    href="#"
                                    className="text-[18px] border-b-black transition-all border-mani cursor-pointer"
                                    onMouseEnter={() => setShopOpen(true)}
                                    onMouseLeave={() => setShopOpen(false)}
                                >
                                    Shop
                                </Link>
                                {/* نمایش کامپوننت Shop وقتی موس روی لینک Shop است */}
                                {isShopOpen && (
                                    <div className="absolute left-0 mt-2">
                                        <Shop setShopOpen={setShopOpen} />
                                    </div>
                                )}
                            </div>

                            <Link href={''} className={'text-[18px] border-b-black transition-all border-mani'}>Women</Link>
                            <Link href={''} className={'text-[18px] border-b-black transition-all border-mani'}>Men</Link>
                            <Link href={''} className={'text-[18px] border-b-black transition-all border-mani'}>Accessories</Link>
                            <Link href={''} className={'text-[18px] border-b-black transition-all border-mani'}>Shoes</Link>
                            <Link href={''} className={'text-[18px] border-b-black transition-all border-mani'}>Sale</Link>
                            <Link href={''} className={'text-[18px] border-b-black transition-all border-mani'}>Pages</Link>
                        </div>
                    </div>
                    <div className={'flex items-center gap-x-8'}>
                        <input type={'text'} placeholder={'   search for products   '} className={'bg-gray-100 w-[230px] h-[46px]'} />
                        <Link href={'/'}><IoPerson className={'text-[22px]'} /></Link>
                        <Link href={'/'}><FaRegHeart className={'text-[22px]'} /></Link>
                        <Link href={'/'}><MdOutlineShoppingCart className={'text-[22px]'} /></Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
