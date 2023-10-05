import './index.scss'
import { useState,useEffect } from 'react'
import HLogo from '../../assets/images/HLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const [mini, setMini]=useState(true)
  useEffect(()=>{
    if (!mini) {
      document.getElementById("sidebar").style.width = "250px";
      document.getElementById("mainpage").style.marginLeft = "250px";
      } else {
      document.getElementById("sidebar").style.width = "100px";
      document.getElementById("mainpage").style.marginLeft = "100px";
       }
  },[mini])


  function toggleSidebar() {
    setMini((prev)=>!prev)
  }

  return (
    <div className="nav-bar" id="sidebar" onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
      <Link 
        className="logo"
        to=""
        onClick={() => setShowNav(false)}>
        <img src={HLogo} alt="Logo" />
        <p className='centered-text'>Himank</p>
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to=""
          onClick={() => setShowNav(false)}>
          <div className='icon-container'>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            <p hidden={mini}>Home</p>
          </div>
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="about"
          onClick={() => setShowNav(false)}>
          <div className='icon-container'>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            <p hidden={mini}>About</p>
          </div>
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="portfolio"
          onClick={() => setShowNav(false)}
        >
          <div className='icon-container'>
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            <p hidden={mini}>Projects</p>
          </div>
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="contact"
          onClick={() => setShowNav(false)}
        >
           <div className='icon-container'> 
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            <p hidden={mini}>Contact</p>
          </div>
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/himankjn/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              size="2x"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/himankjn"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              size="2x"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
