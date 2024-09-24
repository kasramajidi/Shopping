import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
    return (
        <div className="w-full h-auto fixed top-[120px] left-[0] z-50 border-t border-b-gray-300">
            <div className={'w-[93%] m-auto mt-10'}>
                <section className={'w-[80%] m-auto'}>
                    {/* section linkks */}
                    <section className={'flex w-full items-center justify-between  '}>
                        <div>
                            <h5 className={'text-[24px] '}>Women</h5>
                            <div className={'flex items-center gap-x-14'}>
                                <div className={'flex flex-col gap-y-2 mt-2'}>
                                    <Link href={''} className={'text-[14px]'}><span>Women</span></Link>
                                    <Link href={''} className={'text-[14px]'}>Coats</Link>
                                    <Link href={''} className={'text-[14px]'}>Hoddies</Link>
                                    <Link href={''} className={'text-[14px]'}>Lingerei</Link>
                                    <Link href={''} className={'text-[14px]'}>Skirit</Link>
                                    <Link href={''} className={'text-[14px]'}>SwitShirt</Link>
                                </div>
                                <div className={'flex flex-col gap-y-2 mt-2'}>
                                    <Link href={''} className={'text-[14px]'}><span>Women</span></Link>
                                    <Link href={''} className={'text-[14px]'}>Coats</Link>
                                    <Link href={''} className={'text-[14px]'}>Hoddies</Link>
                                    <Link href={''} className={'text-[14px]'}>Lingerei</Link>
                                    <Link href={''} className={'text-[14px]'}>Skirit</Link>
                                    <Link href={''} className={'text-[14px]'}>SwitShirt</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className={'text-[24px] '}>Most popular tags</h5>
                            <div className={'flex items-center gap-x-14'}>
                                <div className={'flex flex-col gap-y-2 mt-2'}>
                                    <Link href={''} className={'text-[14px]'}><span>#Women</span></Link>
                                    <Link href={''} className={'text-[14px]'}>#Coats</Link>
                                    <Link href={''} className={'text-[14px]'}>#Hoddies</Link>
                                    <Link href={''} className={'text-[14px]'}>#Lingerei</Link>
                                    <Link href={''} className={'text-[14px]'}>#Skirit</Link>
                                    <Link href={''} className={'text-[14px]'}>#SwitShirt</Link>
                                </div>
                                <div className={'flex flex-col gap-y-2 mt-2'}>
                                    <Link href={''} className={'text-[14px]'}><span>Women</span></Link>
                                    <Link href={''} className={'text-[14px]'}>Coats</Link>
                                    <Link href={''} className={'text-[14px]'}>Hoddies</Link>
                                    <Link href={''} className={'text-[14px]'}>Lingerei</Link>
                                    <Link href={''} className={'text-[14px]'}>Skirit</Link>
                                    <Link href={''} className={'text-[14px]'}>SwitShirt</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className={'text-[24px] '}>Special</h5>
                            <div className={'flex items-center gap-x-14'}>
                                <div className={'flex flex-col gap-y-2 mt-2'}>
                                    <Link href={''} className={'text-[14px]'}><span>Women</span></Link>
                                    <Link href={''} className={'text-[14px]'}>belts</Link>
                                    <Link href={''} className={'text-[14px]'}>cosmetics</Link>
                                    <Link href={''} className={'text-[14px]'}>accessories</Link>
                                    <Link href={''} className={'text-[14px]'}>glasses</Link>
                                    <Link href={''} className={'text-[14px]'}>high-heels</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
            <div className={'w-full border-t border-t-gray-300 mt-12'}></div>
            <div className={'w-[93%] m-auto'}>
                <section className={'w-[80%] m-auto'}>
                    {/* section pic */}
                    <section className={'flex w-full items-center justify-between '}>
                        <div className={'flex items-center mt-14 gap-x-9'}>
                            <div>
                                <h4 className={'text-[25px]'}>Jackets</h4>
                                <h4 className={'text-[25px]'}>up to -30%</h4>
                                <Link href={''} className={'border-mani text-[14px] hover:text-red-700'}>Shop now</Link>
                            </div>
                            <div>
                                <Image src={'/Image/linkMen/51PcruQZPiL._AC_UY1000_.jpg'} className={'w-[140px] h-[194px] rounded-full cursor-pointer'} width={1000} height={1000} alt='Logo' />
                            </div>
                        </div>
                        <div className={'flex items-center mt-14 gap-x-9'}>
                            <div>
                                <h4 className={'text-[11px] bg-black text-white p-1 text-center'}>Jackets</h4>
                                <h4 className={'text-[25px]'}>Shoes</h4>
                                <Link href={''} className={'border-mani text-[14px] hover:text-red-700'}>Shop now</Link>
                            </div>
                            <div>
                                <Image src={'/Image/linkMen/16983311r_1.webp'} className={'w-[140px] h-[194px]'} width={1000} height={1000} alt='Logo' />
                            </div>
                        </div>
                        <div className={'flex items-center mt-14 gap-x-9'}>
                            <div>
                                <h4 className={'text-[25px]'}>Classy</h4>
                                <h4 className={'text-[25px]'}>Pullovers</h4>
                                <Link href={''} className={'border-mani text-[14px] hover:text-red-700'}>Shop now</Link>
                            </div>
                            <div>
                                <Image src={'/Image/linkMen/runningshoesforyou-2048px-2251.webp'} className={'w-[140px] h-[194px] cursor-pointer'} width={1000} height={1000} alt='Logo' />
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
}
