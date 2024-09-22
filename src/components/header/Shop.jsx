import React from 'react';

export default function Shop({ setShopOpen }) {
    return (
        <div
            className="absolute w-[1000px] h-[400px] top-full left-0 right-0"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
        >
            <div className="p-6 bg-red-500 text-white">
                <h2 className="text-3xl">Shop Page</h2>
                <p>Browse our amazing collection!</p>
            </div>
        </div>
    );
}
