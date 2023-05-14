import React from 'react'

export const Hero = () => {
  return (
    < div className='w-full h-screen'   id='Home' >
        <img  className='top-0 left-0 w-full h-screen object-cover'  src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"  />

        <div  className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
        <div  className='absolute top-0 w-full h-full flex flex-col justify-center text-white' >
            <div  className='md:left-[10%] max-w-[1100px] m-auto absolute p-4' >
                <p className='font-medium' >All Inclusive</p>
                <h1  className='font-bold text-5xl md:text-7xl drop-shadow-2xl' >Private Beaches & Getaways</h1>
                <p  className='max-w-[600px] drop-shadow-2xl py-6 text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam dolorum minus laudantium at ipsam quam animi minima ducimus.
                </p>
                <button>Reserve Now</button>
            </div>
        </div>


    </div>
  )
}
