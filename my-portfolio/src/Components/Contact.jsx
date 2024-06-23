import profilePic from '../assets/profile.jpg';
import './Contact.css';

const Contact = () => {
    return (
      <section id="contact">
        <h2>Let's talk</h2>
        <img src={profilePic} alt="Katarina Sjölin" />
        <p>Katarina Sjölin</p>
        <p>+46(0)703 80 99 06</p>
        <p>kat.sjolin@gmail.com</p>
      </section>
    );
};
  
export default Contact;