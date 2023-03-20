import "./projects.css";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";


function Projects () {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="projects-projects" id="projects">
      <div class="text-divider-project"></div>
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-container">
        {/* {data.projects.map((elm) => {
          return <ProjectSet key={elm.id} {...elm} />;
        })} */}
        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img
                src={process.env.PUBLIC_URL + "./Images/camlens.png"}
                alt=""
              />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">CamLens</h1>
              <p className="project-description">
                CamLens is an online retail website for photography products.
                Its provide a variety of photo, videoand audio equipment,
                computers, home entertainment products, and much more.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">HTML</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">CSS</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JavaScript</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">React Js</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JSON</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://img.icons8.com/color/256/chakra-ui.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">Chakra UI</p>
                </div>
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() =>
                    openLink(`https://github.com/riyashri07/makeshift-top-3565`)
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() =>
                    openLink(`https://myprojectrct101-camlens.netlify.app/`)
                  }
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img
                src={process.env.PUBLIC_URL + "./Images/surveymonkey.png"}
                alt=""
              />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">SurveyHomes</h1>
              <p className="project-description">
                SurveyMonkey is a website that provides a platform for
                conducting online surveys. It allows individuals,businesses, and
                organizations to create custom surveys to gather feedback,
                opinions, and data from a targeted audience
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">HTML</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">CSS</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JavaScript</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JSON</p>
                </div>
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() =>
                    openLink(
                      `https://github.com/riyashri07/simple-tank-2275/tree/main`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() =>
                    openLink(`https://steady-choux-5544ac.netlify.app/`)
                  }
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img src={process.env.PUBLIC_URL + "./Images/zeefive.png"} alt="" />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">Flix TV</h1>
              <p className="project-description">
                ZEE5 is a video streaming platform and mobile application that
                offers a variety of Indian content, including TV shows, movies,
                live TV, and original content.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">HTML</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">CSS</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JavaScript</p>
                </div>
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() =>
                    openLink(
                      `https://github.com/riyashri07/-unsightly-turn-4751`
                    )
                  }
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() =>
                    openLink(`https://gentle-hamster-94145a.netlify.app/`)
                  }
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-container">
            <div className="project-img">
              <img src={process.env.PUBLIC_URL + "./Images/nykka.png"} alt="" />
            </div>
            <div className="project-card-text">
              <h1 className="project-title">Todo App</h1>
              <p className="project-description">
                Todo App is a retailer of technology products, services and
                solutions. We work every day to bring you the best technology
                possible with the goal of making life simpler, easier and better
                for everyone who uses technology.
              </p>
              <div className="project-tech-stack">
                <div
                  key={Date.now() + Math.random()}
                  className="project-skills-card"
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">HTML</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">CSS</p>
                </div>
                <div
                  className="project-skills-card"
                  key={Date.now() + Math.random()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="project-skills-card-img"
                  />
                  <p className="project-skills-card-name">JavaScript</p>
                </div>
              </div>
              <div className="project-card-btn">
                <div
                  onClick={() => openLink(``)}
                  className="project-github-link"
                >
                  GitHub <FaGithub />
                </div>
                <div
                  onClick={() =>
                    openLink(`https://masai-todo-app.netlify.app/`)
                  }
                  className="project-deployed-link"
                >
                  Deploy <HiExternalLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
