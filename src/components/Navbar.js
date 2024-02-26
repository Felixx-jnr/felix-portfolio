import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {

  useEffect(() => {
    function handleClick(event) {
      if (event.target.tagName === 'A' && event.target.parentElement.tagName === 'LI') {
        event.preventDefault();
        setOpen(false);
        const targetId = event.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      }
    }

    document.querySelector('.links.pages').addEventListener('click', handleClick);

    return () => {
      document.querySelector('.links.pages').removeEventListener('click', handleClick);
    };
  }, []);
	

	const [open, setOpen] = useState(false);
  let navRef = useRef();

	return (
		<header>
      <h3>FELIX UDOH</h3>
			<nav ref={navRef} className={`nav ${open? 'responsive_nav': ''}`} onClick={()=>{setOpen(false)}}>
        
        <div >
          <ul className="links pages">
            <li><AnchorLink href="#home">Home</AnchorLink></li>
            <li><AnchorLink href="#about">About</AnchorLink></li>
            <li><AnchorLink href="#skills">Skills</AnchorLink></li>
            <li><AnchorLink href="">Projects</AnchorLink></li>
            <li><AnchorLink href="#contact">Contact</AnchorLink></li>
          </ul>
        </div>

        <div>
          <ul className="links icons">
            <a href="mailto:uyuoukoh@gmail.com?subject=Let's%20Work&body=Hey%2C%20Good%20day%2C%20My%20name%20is..." target='blank'> <li><FontAwesomeIcon icon={faEnvelope} /></li></a>
            <a href="https://github.com/Felixx-jnr" target='blank'> <li><FontAwesomeIcon icon={faGithub} /></li></a>
            <a href="https://x.com/Felixx_jnr?t=ViRhuKymNfmS_2pyCgv_cw&s=09" target='blank'> <li><FontAwesomeIcon icon={faXTwitter} /></li></a>
            <a href="https://www.linkedin.com/in/uyuoukoh-udoh-305a782b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'> <li><FontAwesomeIcon icon={faLinkedinIn} /></li></a>
          </ul>
       </div>

       <button className="nav-btn nav-close-btn times"onClick={()=>{setOpen(!open)}}>
          <FaTimes/>
        </button>
				
			</nav>

      <button className="nav-btn bars" onClick={()=>{setOpen(!open)}}>
        <FaBars/>
      </button>
			
		</header>
	);
}
 
export default Navbar;