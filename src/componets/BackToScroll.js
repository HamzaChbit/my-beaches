
import React from 'react'

import { ArrowCircleUp} from "@phosphor-icons/react";
import { useState ,useEffect} from 'react'

export const BackToScroll = () => {

const [BackToScroll,SetBackToScroll] = useState(false)

useEffect(() => {
window.addEventListener("scroll",()=> {
  if(window.scrollY > 100){
    SetBackToScroll(true)
  }else{
    SetBackToScroll(false)
  }
})

}, []);

const scrollUp = () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}


  return (
    <div>
      {BackToScroll && <button  style={{
        border : "none",
        fontWeight : '800',
        position : "fixed",
        bottom : "50px",
        right : "50px",
        height : "50px",
        width : "50px",
        fontSize : "50px" 
      }} onClick={scrollUp} ><ArrowCircleUp size={42} style={{color:"blue"}} /></button> }</div>
  )
}
