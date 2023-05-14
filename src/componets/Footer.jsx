import React from 'react'
import {FacebookLogo ,InstagramLogo,TwitterLogo,PinterestLogo } from "@phosphor-icons/react";

export const Footer = () => {
  return (

    
    <div   className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2' id='Footer'>
        <div   className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>


           
            <div>
                <h6 className='font-bold uppercare pt-2' >Solutions</h6>
                <ul>
                <li  className='py-1' >Trave</li>
                <li className='py-1'>Booking</li>
                <li className='py-1'>Flights</li>
                <li className='py-1'>Cruises</li>
                <li className='py-1'>Ground</li>
                </ul>
            </div>
            <div>
                <h6  className='font-bold uppercare pt-2'  >Support</h6>
                <ul>
                <li className='py-1'>Pricing</li>
                <li className='py-1'>Documentation</li>
                <li className='py-1'>Flights</li>
                <li className='py-1'>Cruises</li>
                <li className='py-1'>Ground</li>
                </ul>
            </div>
            <div>
                <h6  className='font-bold uppercare pt-2'  >Company</h6>
                <ul>
                <li className='py-1' >About</li>
                <li className='py-1'>Blog</li>
                <li className='py-1' >Jobs</li>
                <li className='py-1'>Press</li>
                <li className='py-1' >Partners</li>
                </ul>
            </div>
            <div>
                <h6   className='font-bold uppercare pt-2' >Legal</h6>
                <ul>
                <li className='py-1'>Claims</li>
                <li className='py-1'>Privacy</li>
                <li className='py-1'>Terms</li>
                <li className='py-1'>Policies</li>
                <li className='py-1'>Conditions</li>
                </ul>
            </div>
            
          
        </div>
        <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'> CopyRight By Hamza Chbit</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
      <a href="https://www.facebook.com/hamzachbit"><FacebookLogo size={32}    className='cursor-pointer' /></a>  
       <a href="https://www.instagram.com/hamza__chbit/"><InstagramLogo size={32} /></a> 
        <TwitterLogo size={32} />
        <PinterestLogo size={32} />
        </div>
      </div>
    </div>
   
  )
}
