import { faGithub, faXTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return ( 
    <div className='footer'>
      <div className='glass new'>
        <div><FontAwesomeIcon icon={faEnvelope}/><span>Uyuoukoh@gmail.com</span></div>
        <div><FontAwesomeIcon icon={faGithub}/><span>Felix_jnr</span></div>
        <div><FontAwesomeIcon icon={faXTwitter}/><span>Felix_jnr</span></div>
        <div><FontAwesomeIcon icon={faFacebook}/><span>Felix Udoh</span></div>
      </div>
    </div>
   );
}
 
export default Footer;