import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
    return (
        <div className="w-full h-auto fixed top-[60px] left-[65%]">
            <div className="w-[400px] h-[385px] mt-10 bg-white shadow border border-black p-8">
                <section>
                    <form action="">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                            Username or Email Address:
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                            PassWord:
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </form>
                    <Link href={''} className={'w-full h-[45px] bg-black hover:bg-red-700 text-white  mt-6 transition-all flex justify-center items-center text-center'}>Login</Link>
                    <div className={'flex items-center justify-between mt-4 border-b border-b-gray-300 pb-3'}>
                        <div className={'flex items-center '}>
                            <input type={'radio'} id={'radio'}/>
                            <label htmlFor="{'radio'}" className={'text-black text-[13px]'}>Remember Me</label>
                        </div>
                        <Link href={''} className={'inline-block text-black hover:text-red-700 border-mani text-[14px]'}>I forget the password</Link>
                    </div>
                    <div className={'flex items-center justify-center mt-6'}>
                        <p>I'm new client.<Link href={'/'} className={'inline-block text-red-700'}>Create an account</Link></p>

                    </div>
                </section>
            </div>
        </div>
    );
}
