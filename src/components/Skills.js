import { faCss3, faHtml5, faJs, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
  return ( 
    <div className="skills">

      <h1 className='skills__header'>SKILLS</h1>

      <div className="skills__icon">
        <div><li><FontAwesomeIcon icon={faHtml5} /></li></div>
        <li><FontAwesomeIcon icon={faCss3} /></li>
        <li><FontAwesomeIcon icon={faJs} /></li>
        <li><FontAwesomeIcon icon={faReact} /></li>
        <li><FontAwesomeIcon icon={faNodeJs} /></li>
        <li><FontAwesomeIcon icon={faSass} /></li>
      </div>
       
      <div className="blob"></div>
      <div className="fakeblob"></div>

    </div>
  );
}
 
export default Skills;