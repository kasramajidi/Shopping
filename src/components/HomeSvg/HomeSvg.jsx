import React from "react"

const Data = [
    {
        img: '/image/home/svg/cat-glasses.jpg',
        span: 'Glasses',
    },
    {
        img: '/image/home/svg/cat-handbags.jpg',
        span: 'Handbags',
    },
    {
        img: '/image/home/svg/cat-jewelry.jpg',
        span: 'Jewelry',
    },
    {
        img: '/image/home/svg/cat-perfumes.jpg',
        span: 'Perfumes',
    },
    {
        img: '/image/home/svg/cat-shoes.jpg',
        span: 'Shoes',
    },
    {
        img: '/image/home/svg/cat-cosmetics.jpg',
        span: 'Cosmetics',
    },
    {
        img: '/image/home/svg/cat-watches.jpg',
        span: 'Watches',
    },
]



export default function HomeSvg() {

    return (
        <div className="relative flex items-center">
            {Data.map((data, index) => (
                <div className='flex items-center flex-col ml-5' key={index}>
                    <div className="w-[150px] h-[150px] bg-gray-100 rounded-full flex  items-center justify-center overflow-hidden relative cursor-pointer">
                        <img
                            src={data.img}
                            alt="Glasses"
                            className={`object-cover w-full h-full`}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <svg
                                className="w-8 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                    </div>
                    <p className="mt-2 text-center text-black">{data.span}</p>
                </div>
            ))}
        </div>
    )
}
