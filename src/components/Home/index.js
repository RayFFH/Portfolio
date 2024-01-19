import LogoTitle from '../../assets/images/logo-s2.png'
import { Link } from 'react-router-dom';
import './index.scss'
import Logo from './Logo'

const Home = () => {

    return (
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              Hi <br /> I'm Phoenix
              <br />
              Web Developer
            </h1>
            <h2>React/Javascript/C#, Azure</h2>
            <a
              href="https://www.linkedin.com/in/phoenixsmart/"
              target="_blank"
              rel="noopener noreferrer"
              className="flat-button"
            >
              CONTACT ME
            </a>
          </div>
          <Logo />
        </div>

    );
}

export default Home