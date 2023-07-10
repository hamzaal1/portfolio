import Image from 'next/image';
import React from 'react'

function Blog() {
    return (
        <div className='bg-background py-5 px-6 rounded-md border border-secondary'>
            <Image className='rounded-md mx-auto' src={"/blogs/swr.png"} width={270} height={80} alt='' />
            <p className='text-white mt-4 font-medium'>How to make GUI in Java with example example</p>
            <div className='text-gray-400 mt-2'>
                <h4>Hamza Demnani</h4>
                <p>Jan 10, 2022 ∙<span className='mx-4'>3 min read</span></p>
            </div>

            <div className='flex justify-between items-center text-gray-400 mt-10'>
                <button className='bg-transparent flex items-center gap-1'>
                    <i className="fa-regular fa-heart text-xl"></i>
                    <p>Like</p>
                </button>
                <button className='bg-transparent flex items-center gap-1'>
                    <i className="fa-regular fa-comments text-xl"></i>
                    <p>Comment</p>
                </button>
                <button className='bg-transparent flex items-center gap-1'>
                    <i className="fa-solid fa-share text-xl"></i>
                    <p>Share</p>
                </button>
            </div>
        </div>
    )
}

export default Blog;