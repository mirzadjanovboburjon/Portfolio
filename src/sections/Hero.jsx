import backImg from "../assets/me.jpg";
import CV from "../assets/보부르존 이력서.pdf";
import github from "../assets/svg/github.svg";
import instagram from "../assets/svg/instagram.svg";

const Hero = () => {
  return (
    <section id="profile">
      <div className="img-container">
        <img src={backImg} alt="profile image" className="profile-img" />
      </div>
      <div className="section_text">
        <p className="text_p1">Hello, I'm</p>
        <h1 className="title">Boburjon</h1>
        <p className="text_p2">Frontend Developer</p>
        <div className="btn-container">
          <a href={CV}>
            <button className="btn btn-color-2">Download CV</button>
          </a>
          <a href="#contact">
            <button className="btn btn-color-1">Contact Me</button>
          </a>
        </div>
        <div className="socials-container">
          <a href="https://github.com/mirzadjanovboburjon">
            <img src={github} alt="My github profile" className="icon" />
          </a>
          <a href="https://instagram.com/">
            <img src={instagram} alt="My instagram profile" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
