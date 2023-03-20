import "./about.css";

function About () {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className="about section" id="about">
      <div class="text-divider-about"></div>
      <h1 className="aboutH1">About me</h1>
      <div className="aboutWrapper">
        <div className="aboutWrapperDiv">
          <div className="aboutMe" id="user-detail-intro">
            <span id="user-detail-name">I am Riya Shrivastava</span> A
            self-motivated and aspiring Full Stack Web Developer specialising in
            MERN stack, NodeJS, Redux and MongoDb from Masai School. Having the ability
            to design web application pages using both frontend as well as
            backend coding tools. Looking for a challenging role in a technology
            based organization that showcases one's skills and enhances one's
            technical knowledge and career.
          </div>
          <div className="about-socialLink">
            <img
              onClick={() => openLink("https://github.com/riyashri07")}
              src={process.env.PUBLIC_URL + "./Images/github.png"}
              alt="About"
            />
            <img
              onClick={() => openLink("https://www.linkedin.com/in/")}
              src={process.env.PUBLIC_URL + "./Images/linkedin.png"}
              alt="About"
            />
          </div>
        </div>
        <div className="aboutWrapperImg">
          <img
            src={process.env.PUBLIC_URL + "./Images/Right_Side.gif"}
            alt="About"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
