import { useEffect, useState } from 'react'
import {
  faAngular,
  faJava,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import LanguageGlider from './Gliders/LanguageGlider'
import ToolsGlider from './Gliders/ToolsGlider'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterclassName={letterClass}
            strArray={[...'About Me']}
            idx={15}
          />
        </h1>
        <p>
          I'm a software developer with an year of experience building scalable
          web applications for companies like Amazon and PayU.
        </p>
        <p>
          I'm currently a part of Payment Gateway team at Wibmo (A PayU
          Company).
        </p>
        <p align="LEFT">
          I'm quiet ambitious and eager to learn new technologies. I pick up new
          tools often and add them to my skill set.
        </p>
        <p>
          I have worked with numerous tools, languages and librarires throughout
          my career.
        </p>

        <div className="about-glider-zone">
          <ToolsGlider />
          <LanguageGlider/>
        </div>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faJava} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>

      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default About
