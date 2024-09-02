import checked from "../assets/svg/checked.svg";

const Experience = () => {
  return (
    <section id="skills">
      <p className="text_p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img src={checked} alt="checked icon" className="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checked} alt="checked icon" className="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checked} alt="checked icon" className="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checked} alt="checked icon" className="icon" />
                <div>
                  <h3>SASS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checked} alt="checked icon" className="icon" />
                <div>
                  <h3>React</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checked} alt="checked icon" className="icon" />
                <div>
                  <h3>JAVA</h3>
                  <p>Experienced</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img src={checked} alt="checked icon" className="icon" />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={checked} alt="checked icon" className="icon" />
                <div>
                  <h3>Node JS</h3>
                  <p>intermediate</p>
                </div>
              </article>
              <article>
                <img src={checked} alt="checked icon" className="icon" />
                <div>
                  <h3>Express JS</h3>
                  <p>intermediate</p>
                </div>
              </article>
              <article>
                <img src={checked} alt="checked icon" className="icon" />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
