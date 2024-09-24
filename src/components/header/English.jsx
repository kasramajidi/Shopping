import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
    return (
        <div className="w-full h-auto fixed top-[3px] left-[83%]">
            <div className={'w-[93%] m-auto mt-10 gap-y-4'}>
                <div className={'h-[98px] w-[150px] p-5 bg-white border border-black'}>
                    <Link href={''} className={'inline-block'}><p className={'text-[16px] hover:text-red-700'}>Espanol</p></Link>
                    <Link href={''} className={'inline-block'}><p className={'text-[16px] hover:text-red-700'}>German</p></Link>
                </div>
            </div>
        </div>
    );
}
