import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons"
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faSuitcase,
    faBars,
    faClose,
  } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => (
    <div className= 'nav-bar'>
        <Link className='logo' to='/'>
            <img src = {LogoS} alt = "logo"/>
            {/* <img className ="sub-logo" src= {LogoSubtitle} alt = "logosub"/> */}
        </Link>
        <nav>

                  <NavLink exact={true} activeClassName="active" to="/">
                    Home
                  </NavLink>
                  <NavLink exact={true} activeClassName="active" to="/about">
                    About
                  </NavLink>
                  <NavLink exact={true} activeClassName="active" to="/Projects">
                    Projects
                  </NavLink>
            
        </nav>
        <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/phoenixsmart/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/RayFFH"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>

    </ul>
        
    </div>
)

export default Sidebar

