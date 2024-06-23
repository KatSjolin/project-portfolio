import profilePic from '../assets/profile.jpg';
import "./Intro.css";

const Intro = () => {
    return (
      <section id="intro">
        <img src={profilePic} alt="Katarina Sjölin" />
        <div className="text-container">
          <h1>Hi, I'm Katarina Sjölin</h1>
          <h2>Front end developer</h2>
          <p>I love programming and enjoy creating beautiful and functional web applications. I enjoy learning new skills and focus on user-friendliness.</p>
        </div>
        <div className="arrow">
          <img src="/arrow.svg"alt="Arrow pointing down." />
        </div>
      </section>
    );
};

export default Intro;


