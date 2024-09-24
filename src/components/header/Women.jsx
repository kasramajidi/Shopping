import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
    return (
        <div className="w-full h-auto fixed top-[120px] left-[0] z-50 border-t border-b-gray-300">
            <div className={'w-[93%] m-auto mt-10'}>
                {/* section main */}
                <section className={'flex items-center justify-between'}>
                    {/* links */}
                    <section className={'flex items-center gap-x-24'}>
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
                    {/* img */}
                    <section className={'flex items-center justify-between gap-x-8'}>
                        <div className={'backLink w-[267px] h-[214px] text-white p-8'}>
                            <h4 className={'text-[16px]'}>Huge Sale</h4>
                            <h4 className={'text-[25px] leading-7 mt-2'}>New <br/> Summer <br/> Collection</h4>
                            <Link href={''} className={'border-link text-white text-[14px] mt-[20px] inline-block'}>Shop now</Link>
                        </div>
                        <div className={'backLink w-[267px] h-[214px] text-white p-8'}>
                            <h4 className={'text-[16px]'}>Huge Golden </h4>
                            <h4 className={'text-[25px] leading-7 mt-2'}>Jewelry <br/> Collection <br/>max</h4>
                            <Link href={''} className={'border-link text-white text-[14px] mt-[20px] inline-block'}>Shop now</Link>
                        </div>
                    </section>
                </section>
            </div>
            <div className={'border-t border-b-gray-300 mt-10'}></div>
            <div className={'w-[93%] m-auto'}>
                {/* section image */}
                <section className={'flex items-center justify-between mt-24'}>
                    <Image src={'/Image/linkWomen/logo-1.png'} className={'w-[159px] h-[36px]'} width={1000}
                           height={1000} alt='Logo'/>
                    <Image src={'/Image/linkWomen/logo-2.png'} className={'w-[159px] h-[36px]'} width={1000}
                           height={1000} alt='Logo'/>
                    <Image src={'/Image/linkWomen/logo-3.png'} className={'w-[159px] h-[36px]'} width={1000}
                           height={1000} alt='Logo'/>
                    <Image src={'/Image/linkWomen/logo-4.png'} className={'w-[159px] h-[36px]'} width={1000}
                           height={1000} alt='Logo'/>
                    <Image src={'/Image/linkWomen/logo-5.png'} className={'w-[159px] h-[36px]'} width={1000}
                           height={1000} alt='Logo'/>
                    <Image src={'/Image/linkWomen/logo-6.png'} className={'w-[159px] h-[36px]'} width={1000}
                           height={1000} alt='Logo'/>
                    <Image src={'/Image/linkWomen/logo-7.png'} className={'w-[159px] h-[36px]'} width={1000}
                           height={1000} alt='Logo'/>
                    <Image src={'/Image/linkWomen/logo-8.png'} className={'w-[159px] h-[36px]'} width={1000}
                           height={1000} alt='Logo'/>
                </section>
            </div>
        </div>
    );
}
