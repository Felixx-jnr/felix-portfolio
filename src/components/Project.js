import social from "../assets/1.mp4";
import movies from "../assets/2.mp4";

const Project = () => {
  return (
    <div
      className="project"
      id="project"
    >
      <h1 className="project__header">PROJECTS</h1>

      <div className="project__container">
        <a
          href="www.google.com"
          className="project__container--box"
        >
          <div className="project__container--image">
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
            >
              <source
                src={movies}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              excepturi repellendus ipsa dolores labore provident dolor at
              corporis quos tempore facere minima assumenda doloremque veniam
              in, est eligendi modi nesciunt sit adipisci ipsum error autem.
              Quis non eum doloremque architecto saepe voluptatibus eveniet
              iure. Consectetur ipsa iusto quibusdam perferendis libero?
            </p>
            <button>View Project</button>
          </div>
        </a>

        <a
          href="www.google.com"
          className="project__container--box"
        >
          <div className="project__container--image">
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
            >
              <source
                src={social}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              excepturi repellendus ipsa dolores labore provident dolor at
              corporis quos tempore facere minima assumenda doloremque veniam
              in, est eligendi modi nesciunt sit adipisci ipsum error autem.
              Quis non eum doloremque architecto saepe voluptatibus eveniet
              iure. Consectetur ipsa iusto quibusdam perferendis libero?
            </p>
            <button>View Project</button>
          </div>
        </a>
      </div>

      <div className="project__container"></div>
    </div>
  );
};

export default Project;
