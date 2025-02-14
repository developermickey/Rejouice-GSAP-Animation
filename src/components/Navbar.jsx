import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='w-[100%] bg-black  sm:px-10 px-5 py-5'>
        <div className='grid md:grid-cols-10 sm:grid-cols-10 grid-cols-2 items-center text-[#fff] mt-5'>
            {/* Left */}
            <div className='sm:col-span-2 md:col-span-3 xl:col-span-5 grid-cols-1 cursor-pointer'>
                The Growth Accelerator
            </div>

            {/* Middle */}
            <div className='sm:col-span-6 md:col-span-5 xl:col-span-3 sm:grid sm:grid-cols-5 md:grid-cols-5 hidden'>
                <div className='colspan-1 cursor-pointer text-center'>
                    <Button text={"Home"}/>
                </div>
                <div className='colspan-1 cursor-pointer text-center'>
                    <Button text={"Work"}/>
                </div>
                <div className='colspan-1 cursor-pointer text-center'>
                    <Button text={"About"}/>
                </div>
                <div className='colspan-1 cursor-pointer text-center'>
                    <Button text={"Services"}/>
                </div>
                <div className='colspan-1 cursor-pointer text-center'>
                    <Button text={"Contact"}/>
                </div>
            </div>

            {/* Right */}
            <div className='sm:col-span-2 md:col-span-2 grid text-end grid-cols-1'>
                <Button text={"Let's talk"}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar