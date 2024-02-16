import robo2 from '../assets/robo2.png'

const Contact = () => {
  return ( 
    <div className="contact">

      <h1 className='contact__header'>CONTACT ME</h1>

      <div className='contact__info'>

        <div className="contact__info--image">
          <img src={robo2} alt="about felix udoh" />
        </div>

        <div className="contact__info--writeup">
          <h2>Contact Felix ! ! !</h2>
        </div>
      
      </div>
    </div>


  );
}
 
export default Contact;