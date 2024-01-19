import './index.scss'
import react from 'react'
import proj1 from "../../assets/images/proj1.png"
import proj2 from "../../assets/images/proj2.png"
import { NavLink } from "react-router-dom";

const workCard = () => {
  return (
    <div className ="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={proj1} alt="image"/>
          <h2 className="project-title">Project Title</h2>
          <div className="pro-details">
            <p>I showcased full-stack proficiency in developing the Kanji Learner web app, integrating Node.js, Express, and MySQL for a robust backend. Leveraging NHK News and Wanikani APIs enhanced the user experience, providing real-time data for a richer learning journey.</p>
            <div className="pro-btns">
              <NavLink to = "https://github.com/RayFFH/KanjiWebsite" className="btn">View
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={proj2} alt="image"/>
          <h2 className="project-title">Project Title</h2>
          <div className="pro-details">
            <p>In japanese Words that have the same pronouciation can in fact have a different meaning depedning on the pitch of word.

This game tests your hearing ability by letting you listen to audio files and guess their corresponding pitch. Developed with React and Tailwind

</p>
            <div className="pro-btns">
              <NavLink to = "https://github.com/RayFFH/Japanese-Pitch-Accent-App" className="btn">View
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default workCard;
