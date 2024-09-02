import pic from "../assets/about-pic.png";
import experience from "../assets/svg/experience.svg";
import academic from "../assets/svg/academic.svg";

const About = () => {
  return (
    <section id="about">
      <p className="text_p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="img-container">
          <img src={pic} alt="Profile Picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experience} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>
                2+ years <br /> Frontend Development
              </p>
            </div>
            <div className="details-container">
              <img src={academic} alt="Experience icon" className="icon" />
              <h3>Education</h3>
              <p>B.C.Sc Bachelors Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              voluptatibus harum inventore? Cum dolorem neque, commodi numquam
              velit laudantium impedit quibusdam? Necessitatibus ea, provident
              cum sunt nisi quaerat ab maiores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
