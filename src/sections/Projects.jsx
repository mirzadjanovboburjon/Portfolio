import ProjectImg from "../assets/project1.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <p className="text_p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={ProjectImg}
                alt="Project image"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project One</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn">Github</button>

              <button className="btn btn-color-2 project-btn">Live Demo</button>
            </div>
          </div>

          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={ProjectImg}
                alt="Project image"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn">Github</button>

              <button className="btn btn-color-2 project-btn">Live Demo</button>
            </div>
          </div>

          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={ProjectImg}
                alt="Project image"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Project Three
            </h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn">Github</button>

              <button className="btn btn-color-2 project-btn">Live Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
