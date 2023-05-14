import React, { useState } from 'react'
import {CaretRight,CaretLeft } from "@phosphor-icons/react";

export const ImageSlider  = () => {
        const Sliders = [
            {
                url: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80',
                title: 'Lobster',
              },
              {
                url: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
                title: 'Sushi',
              },
              {
                url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
                title: 'Pasta',
              },
              {
                url: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
                title: 'Salmon',
              },
        ] 


            const [Caret,setCaret] = useState(0);
            const prevSliders= () =>{
             
               const Index = Caret === 0 ;
               const CheckIndex = Index ? Sliders.length - 1 : Caret - 1
               setCaret(CheckIndex)
            }
            const NextSliders= () =>{
                const Index = Caret === Sliders.length - 1  ;
                const CheckIndex = Index ? 0: Caret + 1;
                setCaret(CheckIndex)
            }







  return (
    <div className='max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative '  id='Image' >
        <div  className='w-full h-full rounded-2xl bg-center bg-cover duration-500'  style={{backgroundImage : `url(${Sliders[Caret].url})`}} >
            
        </div>
        <div  className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 hover:bg-black/20 text-white cursor-pointer '>
        <CaretLeft size={32} onClick={NextSliders}  /> </div>
        <div  className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 hover:bg-black/20 text-white cursor-pointer '   >
        <CaretRight   onClick={prevSliders}  size={32} />
        </div>
      
       
    </div>
  )
}
