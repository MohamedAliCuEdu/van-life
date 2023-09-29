// react component:
import { Link } from "react-router-dom";

// style files:
import '../style/pages/about.scss';

function About() {
  return (
    <main className="about-page full-ht">
      <div className="container">
        <div className="content">
          <img src={require("../assets/backgrounds/about.png")} alt="about" />
          <div className="content-txt">
            <h1>don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>
              our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p>
              our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
        </div>
        <div className="vans-link">
          <h2>
            your destination is waiting.
            <br />
            your van is ready.
          </h2>
          <Link to="vans">explore our vans</Link>
        </div>
      </div>
    </main>
  );
}

export default About;