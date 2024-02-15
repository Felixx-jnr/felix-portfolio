import me from '../assets/edit me.png'

const About = () => {
  return ( 
    <div className="about">
      <div className='about__description'>
        <h1 className='about__description--header'>Frontend developer</h1>
        <p className='about__description--writeup'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam illum consectetur aliquam dolores, nesciunt laudantium tempore quisquam quas molestias, sed labore nulla quae accusantium. Sed tempore iusto magni cupiditate.</p>
      </div>

      <div className='about__image'>
        <img src={me} alt="" />
      </div>
    </div>
   );
}
 
export default About;