import profilePic from '../assets/profile.jpg';
import "./Intro.css";

const Intro = () => {
    return (
      <section id="intro">
        <img src={profilePic} alt="Katarina Sjölin" />
        <p>Brief bio</p>
      </section>
    );
  };
  
  export default Intro;