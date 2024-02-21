import { faFacebook, faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {
  return ( 
    <nav className="navbar">
      <div className='navglass'>
        <div>
          <header>felix udoh</header>
        </div>

        <ul className="links pages">
          <AnchorLink href="#home"><li>Home</li></AnchorLink>
          <AnchorLink href="#about"><li>About</li></AnchorLink>
          <AnchorLink href="#skills"><li>Skills</li></AnchorLink>
          {/* <AnchorLink href="#projects"><li>Projects</li></AnchorLink> */}
          <AnchorLink href="#contact"><li>Contact</li></AnchorLink>
        </ul>
    
        <ul className="links icons">
          <a href="mailto:uyuoukoh@gmail.com?subject=Let's%20Work&body=Hey%2C%20Good%20day%2C%20My%20name%20is..." target='blank'> <li><FontAwesomeIcon icon={faEnvelope} /></li></a>
          <a href="https://github.com/Felixx-jnr" target='blank'> <li><FontAwesomeIcon icon={faGithub} /></li></a>
          <a href="https://x.com/Felixx_jnr?t=ViRhuKymNfmS_2pyCgv_cw&s=09" target='blank'> <li><FontAwesomeIcon icon={faXTwitter} /></li></a>
          <a href="https://www.linkedin.com/in/uyuoukoh-udoh-305a782b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'> <li><FontAwesomeIcon icon={faLinkedinIn} /></li></a>
          <a href="https://www.facebook.com/profile.php?id=100073334363631&mibextid=ZbWKwL" target='blank'> <li><FontAwesomeIcon icon={faFacebook} /></li></a>

        </ul>
      </div>
    </nav> 
  );
}
 
export default Navbar;