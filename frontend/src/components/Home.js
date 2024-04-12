import me from "../assets/bro felix 2 (3).png";

const Home = () => {
  return (
    <div
      className="home"
      id="home"
    >
      <img
        src={me}
        alt="Felix Udoh frontend developer react-engineer"
      />

      <div className="home__description">
        <p>CREATIVE</p>
        <p>FRONTEND</p>
        <p>DEVELOPER</p>
      </div>
    </div>
  );
};

export default Home;
