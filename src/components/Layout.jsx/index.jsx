import React, { useRef, useEffect } from 'react'
import './index.css'
import gsap from 'gsap'
const Layout = () => {
    const boxRef = useRef();

    useEffect(() => {
        gsap.to(boxRef.current, { rotation: "+=360" });
      });
  return (
    <div className='layout'>
    <div ref={boxRef} className="box">Hello</div>
    </div>
  )
}

export default Layout