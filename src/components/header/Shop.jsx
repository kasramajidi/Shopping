import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
    return (
        <div className="w-full h-auto fixed top-[120px] left-[0] z-50 border-t border-b-gray-300">
            <div className={'w-[93%] m-auto mt-10'}>
                {/* section tittle */}
                <section className={'flex items-center justify-center'}>
                    <h4 className={'text-[18[x]'}>Top categories </h4>
                </section>
                {/* category */}
                <section className={'mt-4 flex items-center justify-between'}>
                    <div className={'flex flex-col items-center w-[179px] h-[140px]'}>
                        <Link href={''}><Image src={'/Image/linkShop/cat-cosmetics.jpg'} className={'w-[143px] h-[143px] rounded-full cursor-pointer'} width={1000} height={1000} alt='Logo' /></Link>
                        <Link href={'/'} className={'text-[16px] hover:text-red-700 transition-all mt-2'}>Cosmetics</Link>
                    </div>
                    <div className={'flex flex-col items-center w-[179px] h-[140px]'}>
                        <Link href={''}><Image src={'/Image/linkShop/cat-glasses.jpg'} className={'w-[143px] h-[143px] rounded-full cursor-pointer'} width={1000} height={1000} alt='Logo' /></Link>
                        <Link href={'/'} className={'text-[16px] hover:text-red-700 transition-all mt-2'}>Glasses</Link>
                    </div>
                    <div className={'flex flex-col items-center w-[179px] h-[140px]'}>
                        <Link href={''}><Image src={'/Image/linkShop/cat-handbags.jpg'} className={'w-[143px] h-[143px] rounded-full cursor-pointer'} width={1000} height={1000} alt='Logo' /></Link>
                        <Link href={'/'} className={'text-[16px] hover:text-red-700 transition-all mt-2'}>handbags</Link>
                    </div>
                    <div className={'flex flex-col items-center w-[179px] h-[140px]'}>
                        <Link href={''}><Image src={'/Image/linkShop/cat-jackets.jpg'} className={'w-[143px] h-[143px] rounded-full cursor-pointer'} width={1000} height={1000} alt='Logo' /></Link>
                        <Link href={'/'} className={'text-[16px] hover:text-red-700 transition-all mt-2'}>jackets</Link>
                    </div>
                    <div className={'flex flex-col items-center w-[179px] h-[140px]'}>
                        <Link href={''}><Image src={'/Image/linkShop/cat-jewelry.jpg'} className={'w-[143px] h-[143px] rounded-full cursor-pointer'} width={1000} height={1000} alt='Logo' /></Link>
                        <Link href={'/'} className={'text-[16px] hover:text-red-700 transition-all mt-2'}>jewelry</Link>
                    </div>
                    <div className={'flex flex-col items-center w-[179px] h-[140px]'}>
                        <Link href={''}><Image src={'/Image/linkShop/cat-perfumes.jpg'} className={'w-[143px] h-[143px] rounded-full cursor-pointer'} width={1000} height={1000} alt='Logo' /></Link>
                        <Link href={'/'} className={'text-[16px] hover:text-red-700 transition-all mt-2'}>perfumes</Link>
                    </div>
                    <div className={'flex flex-col items-center w-[179px] h-[140px]'}>
                        <Link href={''}><Image src={'/Image/linkShop/cat-shoes.jpg'} className={'w-[143px] h-[143px] rounded-full cursor-pointer'} width={1000} height={1000} alt='Logo' /></Link>
                        <Link href={'/'} className={'text-[16px] hover:text-red-700 transition-all mt-2'}>shoes</Link>
                    </div>
                    <div className={'flex flex-col items-center w-[179px] h-[140px]'}>
                        <Link href={''}><Image src={'/Image/linkShop/cat-sneakers.jpg'} className={'w-[143px] h-[143px] rounded-full cursor-pointer'} width={1000} height={1000} alt='Logo' /></Link>
                        <Link href={'/'} className={'text-[16px] hover:text-red-700 transition-all mt-2'}>sneakers.jpg</Link>
                    </div>
                    <div className={'flex flex-col items-center w-[179px] h-[140px]'}>
                        <Link href={''}><Image src={'/Image/linkShop/cat-watches.jpg'} className={'w-[143px] h-[143px] rounded-full cursor-pointer'} width={1000} height={1000} alt='Logo' /></Link>
                        <Link href={'/'} className={'text-[16px] hover:text-red-700 transition-all mt-2'}>watches</Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
