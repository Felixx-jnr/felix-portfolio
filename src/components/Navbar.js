import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return ( 
    <nav className="navbar">

      <div>
        <header>felix udoh</header>
      </div>

      <ul className="links pages">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
  
      <ul className="links icons">
        <li><FontAwesomeIcon icon={faGithub} /></li>
        <li><FontAwesomeIcon icon={faXTwitter} /></li>
        <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
        <li><FontAwesomeIcon icon={faEnvelope} /></li>
      </ul>
    
    </nav> 
  );
}
 
export default Navbar;