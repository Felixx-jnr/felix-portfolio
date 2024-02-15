import me from '../assets/e.png'

const Home = () => {
  return ( 
    <div className="home">

      <div className='home__description'>
        Hi <br/> My name is <br/>Felix Udoh 😎<br/> I build things for the web
      </div>

      <div className='home__image'>
        <img src={me} alt="Felix Udoh frontend developer react-engineer"/>
      </div>

    </div>
   );
}
 
export default Home;