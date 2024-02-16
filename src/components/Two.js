import me from '../assets/e.png'

const Two = () => {
  return ( 
    <div className="two">
      <div className='two__image'>
        <img src={me} alt="Felix Udoh frontend developer react-engineer"/>
      </div>

      <div className='two__description'>
         <p>CREATIVE</p><p>FRONTEND</p><p>DEVELOPER</p>
      </div>
    </div>
   );
}
 
export default Two;