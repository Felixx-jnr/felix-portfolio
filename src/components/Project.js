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
              I built a MERN stack movie app with authentication, admin routes,
              admin dashboard, JWT etc, covering both the backend and frontend.
              It is about a 10-page project, which I worked on alone and it took
              me about 2 to 3 weeks to complete the site. For this particular
              project I mostly focused on the logic and not the UI. I built this
              with the MERN stack and used tailwind for my styling.
            </p>
            <button>View Project</button>
          </div>
        </a>

        <a
          href="https://felixsocials.pages.dev/"
          target="blank"
          className="project__container--box"
        >
          <div className="project__container--media">
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
              I built a frontend social media engagement page with a light and
              dark mode toggle. This work was inspired by a design from frontend
              mentor, although I added a bit of my genuinity with the from card
              cover and the flip effect on hover. This is just a single page
              site, more like a landing page it took about a week, as I used
              this project the understand the SCSS technology which was used for
              the styling.
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
