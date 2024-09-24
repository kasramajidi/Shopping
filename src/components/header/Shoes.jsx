import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
    return (
        <div className="w-full h-auto fixed top-[120px] left-[0] z-50 border-t border-b-gray-300">
            <div className={'w-[93%] m-auto mt-10'}>
                <section className={'flex items-center justify-center gap-x-32'}>
                    <div className={'flex flex-col gap-y-2'}>
                        <Link href={''} className={'text-[14px] hover:text-red-700 inline-block'}>Boots</Link>
                        <Link href={''} className={'text-[14px] hover:text-red-700 inline-block'}>Clogs</Link>
                        <Link href={''} className={'text-[14px] hover:text-red-700 inline-block'}>Heels</Link>
                        <Link href={''} className={'text-[14px] hover:text-red-700 inline-block'}>Leather shoes</Link>
                        <Link href={''} className={'text-[14px] hover:text-red-700 inline-block'}>Pumps</Link>
                        <Link href={''} className={'text-[14px] hover:text-red-700 inline-block'}>Sandals</Link>
                        <Link href={''} className={'text-[14px] hover:text-red-700 inline-block'}>Slippers</Link>
                        <Link href={''} className={'text-[14px] hover:text-red-700 inline-block'}>Sneakers</Link>
                        <Link href={''} className={'text-[14px] hover:text-red-700 inline-block'}>Sport</Link>
                    </div>
                        <div className={'flex flex-col items-center justify-center backLink w-[300px] h-[279px] text-white p-12'}>
                            <h4 className={'text-[16px]'}>Huge Sale</h4>
                            <h4 className={'text-[25px] leading-7 mt-2'}>New <br/> Summer <br/> Collection</h4>
                            <Link href={''} className={'border-link text-black bg-white px-8 py-2 text-[14px] mt-[40px] inline-block'}>Shop now</Link>
                        </div>
                </section>
            </div>
        </div>
    );
}
