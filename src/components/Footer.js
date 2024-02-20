import { faGithub, faXTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return ( 
    <div className='footer'>
      <div className="footer__overlay">
        <div className='footer__setup'>

          <h2 className="footer__name">FELIX UDOH</h2>

          <div className="footer__links">
            <h2>LINKS</h2>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
          </div>

          <div className="footer__contact">
            <h2>CONTACTS</h2>
            <div className='main'>
              <li>+234 705 771 8692</li>
              <li>UYUOUKOH@GMAIL.COM</li>
            </div>

            <div className='icon'>
              <div><FontAwesomeIcon icon={faGithub}/></div>
              <div><FontAwesomeIcon icon={faXTwitter}/></div>
              <div><FontAwesomeIcon icon={faFacebook}/></div>
            </div>

          </div>
        </div>
        <p>2024 &copy; copyright. All rights reserved</p>
      </div>
      
    </div>

   );
}
 
export default Footer;