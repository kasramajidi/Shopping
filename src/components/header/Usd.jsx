import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
    return (
        <div className="w-full h-auto fixed top-[3px] left-[83%]">
            <div className={'w-[93%] m-auto mt-10'}>
                <div className={'h-[98px] w-[150px] p-5 bg-white border border-black'}>
                    <p className={'text-[16px]'}>$ EUR</p>
                    <p className={'text-[16px]'}>$ GPT</p>
                </div>
            </div>
        </div>
    );
}
