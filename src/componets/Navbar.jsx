import React from 'react'
import { useState } from 'react';
import { List} from "@phosphor-icons/react";
import {  Link } from "react-router-dom";
export const Navbar = () => {

const [nav,setNav] =  useState(false);
const HandelNav = ()=>{
  setNav(!nav)

}  
  return (
    <div    className='absolute w-full flex justify-between p-4 items-center'  >
      <h1  className=' text-white font-bold text-2xl z-20  '  >Experiences</h1>
      <List size={32} onClick={ HandelNav} className='z-20 text-white cursor-pointer  hover:text-blue-600 '/>
      <div   className={ nav ? 'fixed text-gray-300  left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 first-letter:flex-col z-10' 
    :'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'    }  onClick={ HandelNav}  >

        <ul className='flex flex-col fixed w-full h-full items-center justify-center  '  >    
      <li className='font-bold text-3xl p-8 hover:text-blue-600 '    ><a href="#Home">Home</a></li>
       <li className='font-bold text-3xl p-8  hover:text-blue-600 '><a href="#Destinations">Destinations</a></li>
       <li className='font-bold text-3xl p-8   hover:text-blue-600 '><a href="#Destinations">Reservations</a> </li>
       <li className='font-bold text-3xl p-8   hover:text-blue-600 '>   <a href="#Image">Amenities</a>  </li>
               <li className='font-bold text-3xl p-8   hover:text-blue-600 '> <a href="#Rooms"> Rooms</a>   </li>
       </ul>
  
      </div>
    </div>
  )
}
