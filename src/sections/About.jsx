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
              <p>
                Kangwon national university <br /> B.C.Sc Bachelors Degree
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              프론트엔드 웹 개발자로서{" "}
              <strong>JavaScript, React, HTML, CSS, Tailwind</strong> 및
              <strong>Firebase</strong>와 같은 최신 웹 기술에 능숙하며, 사용자
              경험을 향상시키는 데 중점을 두고 있습니다. 컴퓨터공학 전공 및
              다양한 프로젝트 경험을 통해 문제 해결 능력과 창의적인 설계 능력을
              길러왔습니다. 또한 팀워크와 커뮤니케이션에 강하며, 한국어와 영어에
              모두 능통한 글로벌 인재입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
