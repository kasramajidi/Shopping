import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
    return (
        <div className="w-full h-auto fixed top-[120px] left-[0] z-50 border-t border-b-gray-300">
            <div className={'w-[80%] m-auto mt-10'}>
                {/* section link */}
                <section className={'flex w-full items-center gap-x-56'}>
                    <div>
                        <h5 className={'text-[24px] '}>Women</h5>
                        <div className={'flex items-center gap-x-14'}>
                            <div className={'flex flex-col gap-y-2 mt-2'}>
                                <Link href={''} className={'text-[14px]'}><span>Women</span></Link>
                                <Link href={''} className={'text-[14px]'}>Coats</Link>
                                <Link href={''} className={'text-[14px]'}>Hoddies</Link>
                                <Link href={''} className={'text-[14px]'}>Lingerei</Link>
                            </div>
                            <div className={'flex flex-col gap-y-2 mt-2'}>
                                <Link href={''} className={'text-[14px]'}><span>Women</span></Link>
                                <Link href={''} className={'text-[14px]'}>Coats</Link>
                                <Link href={''} className={'text-[14px]'}>Hoddies</Link>
                                <Link href={''} className={'text-[14px]'}>Lingerei</Link>
                            </div>
                            <div className={'flex flex-col gap-y-2 mt-2'}>
                                <Link href={''} className={'text-[14px]'}>Coats</Link>
                                <Link href={''} className={'text-[14px]'}>Hoddies</Link>
                                <Link href={''} className={'text-[14px]'}>Lingerei</Link>
                                <Link href={''} className={'text-[14px]'}>Lingerei</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className={'text-[24px] '}>Women</h5>
                        <div className={'flex items-center gap-x-14'}>
                            <div className={'flex flex-col gap-y-2 mt-2'}>
                                <Link href={''} className={'text-[14px]'}><span>Women</span></Link>
                                <Link href={''} className={'text-[14px]'}>Coats</Link>
                                <Link href={''} className={'text-[14px]'}>Hoddies</Link>
                                <Link href={''} className={'text-[14px]'}>Lingerei</Link>
                            </div>
                            <div className={'flex flex-col gap-y-2 mt-2'}>
                                <Link href={''} className={'text-[14px]'}><span>Women</span></Link>
                                <Link href={''} className={'text-[14px]'}>Coats</Link>
                                <Link href={''} className={'text-[14px]'}>Hoddies</Link>
                                <Link href={''} className={'text-[14px]'}>Lingerei</Link>
                            </div>
                            <div className={'flex flex-col gap-y-2 mt-2'}>
                                <Link href={''} className={'text-[14px]'}>Coats</Link>
                                <Link href={''} className={'text-[14px]'}>Hoddies</Link>
                                <Link href={''} className={'text-[14px]'}>Lingerei</Link>
                                <Link href={''} className={'text-[14px]'}>Lingerei</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={'flex items-center justify-between gap-x-8 mt-14'}>
                    <div className={'backLink w-[30%] h-[279px] text-white p-12'}>
                        <h4 className={'text-[16px]'}>Huge Sale</h4>
                        <h4 className={'text-[25px] leading-7 mt-2'}>New <br/> Summer <br/> Collection</h4>
                        <Link href={''} className={'border-link text-black bg-white px-8 py-2 text-[14px] mt-[40px] inline-block'}>Shop now</Link>
                    </div>
                    <div className={'backLink w-[70%] h-[279px] text-white p-8'}>
                        <h4 className={'text-[16px]'}>New Arrival</h4>
                        <h4 className={'text-[25px] leading-7 mt-2'}>Jewelry <br/> Shoes for everyone <br/>in every size</h4>
                        <div className={'flex items-center gap-x-6'}>
                            <Link href={''} className={'text-white bg-black hover:bg-transparent border border-black px-8 py-2 text-[14px] mt-[40px] inline-block'}>Women</Link>
                            <Link href={''} className={'text-white bg-black hover:bg-transparent border border-black px-8 py-2 text-[14px] mt-[40px] inline-block'}>Men</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
