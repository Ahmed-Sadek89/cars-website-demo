import Image from 'next/image'
import React from 'react'

const FirstSection = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <h2 className='font-bold text-2xl'>Thank You For Your Purchase</h2>
            <Image src={'/payment/thank.png'} alt='thank' width={400} height={400} className='object-contain w-[400px] h-[400px]' />
            <button className='w-3/4 rounded py-3 border border-custom-black text-sm lg:text-base flex items-center justify-center gap-1'>
                <span className='text-custom-black'>Order  Number :</span>
                <span className='text-custom-blue'>#123RGR231567Y Confirmed</span>
            </button>
            <button className='w-3/4 flex items-center justify-center rounded py-3 text-white bg-custom-green'>Track order</button>
        </div>
    )
}

export default FirstSection
