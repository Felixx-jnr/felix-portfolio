import me from "../assets/pimage.png";

const Home = () => {
  return (
    <div
      className="home"
      id="home"
    >
      <div className="home__image">
        <img
          src={me}
          alt="Felix Udoh frontend developer react-engineer"
        />
      </div>

      <div className="home__description">
        <p>CREATIVE</p>
        <p>FRONTEND</p>
        <p>DEVELOPER</p>
      </div>
    </div>
  );
};

export default Home;
