'use client';
import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FaInstagram} from "react-icons/fa";
import {RiTiktokLine} from "react-icons/ri";
import {AiOutlineYoutube} from "react-icons/ai";
import {FiFacebook} from "react-icons/fi";
import {IoChevronDown} from "react-icons/io5";
import {IoPerson} from "react-icons/io5";
import {FaRegHeart} from "react-icons/fa";
import {MdOutlineShoppingCart} from "react-icons/md";
import Shop from '@/components/header/Shop';
import Women from '@/components/header/Women';
import Men from '@/components/header/Men';
import Acces from '@/components/header/Acces';
import Shoes from '@/components/header/Shoes';
import Usd from '@/components/header/Usd';
import English from '@/components/header/English';
import Form from '@/components/header/Form';

export default function Header() {
    const [openLink, setOpenLink] = useState(null);

    const handleMouseEnter = (link) => {
        setOpenLink(link);
    };

    const handleMouseLeave = () => {
        setOpenLink(null);
    };

    return (
        <div className="relative">
            <div className=' w-[100%]'>
                <div className={'w-[93%] m-auto'}>
                    {/* section one header */}
                    <section className={'flex items-center justify-between py-3'}>
                        <div className={'flex items-center gap-x-6'}>
                            <FaInstagram
                                className={'text-[18px] text-gray-700 hover:text-red-700 transition-all cursor-pointer'}/>
                            <RiTiktokLine
                                className={'text-[18px]  text-gray-700 hover:text-red-700 transition-all cursor-pointer'}/>
                            <AiOutlineYoutube
                                className={'text-[18px] text-gray-700 hover:text-red-700 transition-all cursor-pointer'}/>
                            <FiFacebook
                                className={'text-[18px] text-gray-700 hover:text-red-700 transition-all cursor-pointer'}/>
                        </div>
                        <div className={'flex items-center'}>
                            <div className={'flex items-center gap-x-5'}>
                                <Link href={'/'}
                                      className={'text-[13px] block text-gray-800 hover:text-red-700'}>About</Link>
                                <Link href={'/'}
                                      className={'text-[13px] block text-gray-800 hover:text-red-700'}>Blog</Link>
                                <Link href={'/'}
                                      className={'text-[13px] block text-gray-800 hover:text-red-700'}>Help</Link>
                                <Link href={'/'}
                                      className={'text-[13px] block text-gray-800 hover:text-red-700'}>Contact</Link>
                            </div>
                            <div className={'flex items-center gap-x-4 ml-14'}>
                                    <div onMouseEnter={() => handleMouseEnter('english')} onMouseLeave={handleMouseLeave} className="relative flex items-center gap-x-2">
                                        <Image src={'/Image/main/english.png'} className={'w-[18px] h-[12px]'} width={1000}
                                               height={1000} alt='Logo'/>
                                        <Link href={''}
                                              className={'text-[13px] block text-gray-800 hover:text-red-700'}>English</Link>
                                        {openLink === 'english' && (
                                            <div className="absolute top-full left-0 mt-2 z-10">
                                                <English/>
                                            </div>
                                        )}
                                    </div>
                                <div onMouseEnter={() => handleMouseEnter('usd')} onMouseLeave={handleMouseLeave} className="relative">
                                    <Link href={''}
                                          className={'text-[13px] block text-gray-800 hover:text-red-700'}>$ USD</Link>
                                    {openLink === 'usd' && (
                                        <div className="absolute top-full left-0 mt-2 z-10">
                                            <Usd/>
                                        </div>
                                    )}
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
                            <Image src={'/Image/main/logo.png'} className={'w-[172px] h-[37px] cursor-pointer'}
                                   width={1000} height={1000} alt='Logo'/>
                            {/* links */}
                            <div className={'flex items-center gap-x-6'}>
                                {/* لینک Shop با رویداد هاور */}
                                <div onMouseEnter={() => handleMouseEnter('shop')} onMouseLeave={handleMouseLeave} className="relative">
                                    <Link href={''}
                                          className={'text-[18px] border-b-black transition-all border-mani'}>Shop</Link>
                                    {openLink === 'shop' && (
                                        <div className="absolute top-full left-0 mt-2 z-10">
                                            <Shop/>
                                        </div>
                                    )}
                                </div>
                                <div onMouseEnter={() => handleMouseEnter('women')} onMouseLeave={handleMouseLeave} className="relative">
                                    <Link href={''}
                                          className={'text-[18px] border-b-black transition-all border-mani'}>Women</Link>
                                    {openLink === 'women' && (
                                        <div className="absolute top-full left-0 mt-2 z-10">
                                            <Women/>
                                        </div>
                                    )}
                                </div>
                                <div onMouseEnter={() => handleMouseEnter('men')} onMouseLeave={handleMouseLeave} className="relative">
                                    <Link href={''}
                                          className={'text-[18px] border-b-black transition-all border-mani'}>Men</Link>
                                    {openLink === 'men' && (
                                        <div className="absolute top-full left-0 mt-2 z-10">
                                            <Men/>
                                        </div>
                                    )}
                                </div>
                                <div onMouseEnter={() => handleMouseEnter('acces')} onMouseLeave={handleMouseLeave} className="relative">
                                    <Link href={''}
                                          className={'text-[18px] border-b-black transition-all border-mani'}>Accessories</Link>
                                    {openLink === 'acces' && (
                                        <div className="absolute top-full left-0 mt-2 z-10">
                                            <Acces/>
                                        </div>
                                    )}
                                </div>
                                <div onMouseEnter={() => handleMouseEnter('shoes')} onMouseLeave={handleMouseLeave} className="relative">
                                    <Link href={''}
                                          className={'text-[18px] border-b-black transition-all border-mani'}>Shoes</Link>
                                    {openLink === 'shoes' && (
                                        <div className="absolute top-full left-0 mt-2 z-10">
                                            <Shoes/>
                                        </div>
                                    )}
                                </div>
                                <Link href={''}
                                      className={'text-[18px] border-b-black transition-all border-mani'}>Sale</Link>
                                <Link href={''}
                                      className={'text-[18px] border-b-black transition-all border-mani'}>Pages</Link>
                            </div>
                        </div>
                        <div className={'flex items-center gap-x-8'}>
                            <input type={'text'} placeholder={'   search for products   '}
                                   className={'bg-gray-100 w-[230px] h-[46px]'}/>
                            <div onMouseEnter={() => handleMouseEnter('form')} onMouseLeave={handleMouseLeave} className="relative">
                                <Link href={'/'}><IoPerson className={'text-[22px] '}/></Link>
                                {openLink === 'form' && (
                                    <div className="absolute top-full left-0 mt-2 z-10">
                                        <Form/>
                                    </div>
                                )}
                            </div>
                            <Link href={'/'}><FaRegHeart className={'text-[22px]'}/></Link>
                            <Link href={'/'}><MdOutlineShoppingCart className={'text-[22px]'}/></Link>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
