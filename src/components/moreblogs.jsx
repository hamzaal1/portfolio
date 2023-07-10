import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Moreblogs() {
    return (
        <div
            className='flex justify-center items-center bg-primary py-5 px-6 rounded-md border border-white text-white'>
            <Link href='/blogs' className='group'>
                <i className="fa-solid fa-arrow-right-from-bracket text-5xl"></i>
                <span
                    className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-[52%] 
                            -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto z-40">
                    Read More Blogs
                </span>
            </Link>
        </div>
    )
}

export default Moreblogs;