import React, { useRef } from 'react'
import Glide from 'react-glidejs'
import RLogo from '../../../assets/images/R.png'
import CPPLogo from '../../../assets/images/cppLogo.png'
import PythonLogo from '../../../assets/images/pythonLogo.png'
import JavaLogo from '../../../assets/images/JavaLogo.png'
import JSLogo from '../../../assets/images/JSLogo.png'
import HTMLLogo from '../../../assets/images/HTMLLogo.png'
import MySQLLogo from '../../../assets/images/SQLLogo.png'


export default function LanguageGlider() {
  const gliderRef = useRef(null)

  return (
    <div className='glide-wrap'>
      <Glide
        ref={gliderRef}
        throttle={0}
        type="carousel"
        customSlideAnimation={{
          timeout: 500,
          classNames: 'fade',
        }}
        perView={4}
        startAt={1}
        slideClassName="slider__frame"
        focusAt="center"
        autoplay="1200"
        hoverPause="true"
        keyboard="true"
        dragThreshold="30"

      >

        
<img src={JavaLogo} width={125} alt="Java"></img>
      <img src={PythonLogo} width={125} alt="Python"></img>
      <img src={JSLogo} width={125} alt="JS"></img>
      <img src={RLogo} width={125} alt="R"></img>
      <img src={CPPLogo} width={125} alt="CPP"></img>
      <img src={MySQLLogo} width={125} alt="MySQL"></img>
      <img src={HTMLLogo} width={125} alt="HTML"></img>
      </Glide>  
    </div>
  )
}
