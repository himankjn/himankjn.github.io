import React, {useRef } from 'react'
import Glide from 'react-glidejs'
import Spring from '../../../assets/images/spring.png'
import JWTLogo from '../../../assets/images/JWTLogo.png'
import AWSLogo from '../../../assets/images/AWSLogo.png'
import MavenLogo from '../../../assets/images/MavenLogo.png'
import APILogo from '../../../assets/images/APILogo.png'
import HibernateLogo from '../../../assets/images/HibernateLogo.png'
import PostmanLogo from '../../../assets/images/PostmanLogo.png'
import JenkinsLogo from '../../../assets/images/JenkinsLogo.png'
import DockerLogo from '../../../assets/images/DockerLogo.png'
import AnsibleLogo from '../../../assets/images/AnsibleLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faHtml5,
  faReact,
  faGithub,
  faCss3,
  faGlideG,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons'


export default function ToolsGlider() {
  const gliderRef = useRef(null)

  return (
    <div className='glide-wrap'>
      <Glide
        ref={gliderRef}
        throttle={0}
        type="slider"
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
        perTouch="3"
      >

        
        <FontAwesomeIcon icon={faHtml5} size="10x" color='#e34c26' />
        <FontAwesomeIcon icon={faAngular} size="10x" color='red'/>
        <FontAwesomeIcon icon={faReact} color='#61DBFB' size="10x"/>
        <FontAwesomeIcon icon={faCss3} size="10x" color="#264de4" />
        <FontAwesomeIcon icon={faGlideG} size="10x" color="black" />
        <FontAwesomeIcon icon={faGitAlt} size="10x" color="Red" />
        <FontAwesomeIcon icon={faGithub} size="10x" color="black" />
        <img src={Spring} width={125} alt="SpringBoot"></img>
        <img src={JWTLogo} width={125} alt="JWT"></img>
        <img src={AWSLogo} width={125} alt="AWS"></img>
        <img src={MavenLogo} width={125} alt="Maven"></img>
        <img src={APILogo} width={125} alt="API"></img>
        <img src={HibernateLogo} width={125} alt="Hibernate"></img>
        <img src={PostmanLogo} width={125} alt="Postman"></img>
        <img src={JenkinsLogo} width={125} alt="Jenkins"></img>
        <img src={DockerLogo} width={125} alt="Docker"></img>
        <img src={AnsibleLogo} width={125} alt="Ansible"></img>
      </Glide>  
    </div>
  )
}
