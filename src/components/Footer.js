import { faGithub, faXTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return ( 
    <div className='footer'>
      <div className='footer__overlay footer__setup'>

        <h2 className="footer__name">FELIX UDOH</h2>

        <div className="footer__contact">
          <h2>LINKS</h2>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </div>

        <div className="footer__links">
          <h2>CONTACTS</h2>
          <div>
            <span>+234 705 771 8692</span>
            <span>uyuoukoh@gmail.com</span>
          </div>
          <div><FontAwesomeIcon icon={faEnvelope}/></div>
          <div><FontAwesomeIcon icon={faGithub}/></div>
          <div><FontAwesomeIcon icon={faXTwitter}/></div>
          <div><FontAwesomeIcon icon={faFacebook}/></div>
        </div>


       
      </div>
    </div>

   );
}
 
export default Footer;