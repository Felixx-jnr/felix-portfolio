const About = () => {
  return (
    <div
      className="about"
      id="about"
    >
      <h1 className="about__header">ABOUT</h1>
      <h2 className="about__intro">Welcome to Felix's Frontend Portfolio! </h2>
      <p className="about__intro--writeup">
        I am a versatile MERN (MongoDB, Express.js, React, Node.js) stack
        developer, focusing on both frontend and backend developement, I bring a
        wealth of knowledge to any team with my familiarity with both frontend
        and backend work in any MERN appliction
      </p>

      <div className="about__info">
        <div className="about__info--body">
          <div className="about__info--glass">
            <div className="about__info--glass__writeup">
              <h3>WHAT I DO?</h3>
              <p>
                I create MERN applications, with the best possible frontend and
                backend computation, while paying attention to optimization, and
                the best user experiences and responsive web apps. From
                designing user interfaces, intergrating APIs, database
                management, debugging and creating of security and data
                protection etc I create end to end solutions that empowers both
                users and results.
              </p>
            </div>
          </div>
        </div>

        <div className="about__info--body">
          <div className="about__info--glass">
            <div className="about__info--glass__writeup">
              <h3>WHY WORK WITH ME?</h3>
              <p>
                <span>FULL-STACK EXPERTISE: </span>With expertise in both
                frontend and backend technologies, I am able to tackle both
                aspects of a MERN app and therby reducing the time needed in
                completing a project
              </p>
              <p>
                <span>AGILE: </span> I am adaptable, I can easily adjust to the
                working conditions of any environment with my agile mindset
              </p>
              <p>
                <span>PASSION FOR LEARNING: </span>I am passionate about
                learning and growing, not only with technologies that I am
                familiar with but also open to learning other technologies
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="connect">
        <h2 className="connect">Let's Connect</h2>
        <p>
          Building or editing your websites, I am the here for you. If you can
          think it, then it can be done. Let's Connect!!!
        </p>
      </div>
    </div>
  );
};

export default About;
