import { useEffect, useState } from 'react'
import './index.scss'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1> About Me
          </h1>
          <p>
          Hello! I'm Phoenix Smart, a passionate software engineer with a knack for transforming ideas into innovative and functional applications. My journey into the world of programming began during my studies in Electrical and Electronic Engineering at Queen Mary, University of London.
          </p>
          <p align="LEFT">
          Driven by a curiosity to explore the intersection of technology and problem-solving, I delved into full-stack web development. Through projects like my Kanji Learning Website and the Hiragana and Katana Learning Game, I honed my skills in Node.js, Express, JavaScript, MySQL, Python, Bootstrap, HTML, CSS, and Flask. These experiences not only showcased my proficiency in coding but also fueled my enthusiasm for creating user-friendly applications.
          </p>
          <p>
          My interest in programming extends beyond the technical aspects. I find joy in breaking down complex concepts into digestible forms, aiming to make the learning experience less daunting and more relatable for others. Alongside my technical endeavors, I've explored machine learning and the fascinating realm of language learning, particularly Japanese.
          </p>
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
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
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
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default About