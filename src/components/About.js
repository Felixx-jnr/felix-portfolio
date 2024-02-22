const About = () => {
  return ( 
    <div className="about" id='about'>

      <h1 className='about__header'>ABOUT</h1>
      <h2 className='about__intro'>Welcome to Felix's Frontend Portfolio! </h2>
      <p className="about__intro--writeup">I am a versatile developer with a strong focus on frontend development and a solid understanding of backend technologies. Specializing in the MERN stack (MongoDB, Express.js, React, Node.js), I bring a unique blend of skills to the table, allowing me to create full-stack solutions that are both elegant and robust.</p>

      <div className='about__info'>

        <div className="about__info--body">
          <div className='about__info--glass'>
            <div className="about__info--glass__writeup">
              <h3>WHAT I DO?</h3>
              <p>I excel in crafting seamless user experiences on the frontend, while also possessing the expertise to architect scalable and efficient backend systems. From designing intuitive interfaces to building robust APIs, I thrive on the challenge of creating end-to-end solutions that empower users and drive results.</p>
            </div>
          </div>
        </div>

        <div className="about__info--body">
          <div className='about__info--glass'>
          <div className="about__info--glass__writeup">
            <h3>WHY WORK WITH ME?</h3>
              <p><span>FULL-STACK EXPERTISE: </span>With proficiency in both frontend and backend technologies, I offer a comprehensive skill set that enables me to tackle complex projects from start to finish</p>
              <p><span>AGILE MINDSET: </span> I am adaptable and thrive in fast-paced environments, where I can iterate quickly, gather feedback, and deliver high-quality solutions on time.</p>
              <p><span>PASSION FOR LEARNING: </span>I am deeply passionate about technology and continuously seek out opportunities to expand my knowledge and stay ahead of industry trends.</p>

                
            </div>
          </div>
        </div>
      </div>

      <div className="connect">
        <h2 className="connet">Let's Connect</h2>
        <p>Whether you're looking to revamp your web presence, streamline your workflows, or tackle a new challenge, I'm here to help. Let's collaborate and bring your ideas to life!</p>
      </div>
    
    </div>
  );
}
 
export default About;