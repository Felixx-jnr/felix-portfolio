import robo2 from '../assets/robo2.png'
import { faGithub, faXTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return ( 
    <div className="contact">

      <h1 className='contact__header'>CONTACT</h1>

      <div className='contact__info'>

        <div className="contact__info--image">
          <img src={robo2} alt="about felix udoh" />
        </div>

        <div className="contact__info--writeup">
          <h2>Contact Details ! ! !</h2>
          
          <div className='contact__info--logos'>
            <div><FontAwesomeIcon icon={faEnvelope}/><span>Uyuoukoh@gmail.com</span></div>
            <div><FontAwesomeIcon icon={faGithub}/><span>Felix_jnr</span></div>
            <div><FontAwesomeIcon icon={faXTwitter}/><span>Felix_jnr</span></div>
            <div><FontAwesomeIcon icon={faFacebook}/><span>Felix Udoh</span></div>
          </div>

        </div>
      
      </div>
    </div>


  );
}
 
export default Contact;