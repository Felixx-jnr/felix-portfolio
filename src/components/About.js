import robo from '../assets/robo.png'

const About = () => {
  return ( 
    <div className="about" id='about'>

      <h1 className='about__header'>ABOUT</h1>

      <div className='about__info'>

        <div className="about__info--writeup">
          <h2>About Felix ! ! !</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quisquam quos nobis odio, reiciendis exercitationem explicabo corporis ducimus sint omnis atque iure deleniti sunt id deserunt. Dolore provident fugit blanditiis ipsam maxime odit, mollitia, distinctio delectus quos quibusdam id alias?</p>
        </div>

        <div className="about__info--image">
          <img src={robo} alt="about felix udoh" />
        </div>


      </div>
    
    </div>
   );
}
 
export default About;