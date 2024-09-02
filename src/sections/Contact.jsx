import Email from "../assets/svg/email.svg";
import Github from "../assets/svg/github.svg";

const Contact = () => {
  return (
    <section id="contact">
      <p className="text_p1">Get In Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src={Email} alt="Email icon" className="icon contact-icon" />

          <p>
            <a href="https://www.gmail.com">Email</a>
          </p>
        </div>

        <div className="contact-info-container">
          <img src={Github} alt="Github icon" className="icon contact-icon" />

          <p>
            <a href="https://www.github.com">Github</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
