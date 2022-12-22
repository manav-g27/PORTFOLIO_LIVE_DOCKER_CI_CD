import React from 'react'
import { useEffect } from 'react'
import './index.css'
const Cursor = () => {

useEffect(()=>{
    const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })
},[])

  return (
    <div class="cursor"></div>
  )
}

export default Cursor