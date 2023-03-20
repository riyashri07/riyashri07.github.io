import "./home.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";


function Home () {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="home-main" id="home">
      <div className="homeWrapper">
        <div className="homeLeft">
          <div id="user-detail-name">Hello, I'm Riya Shrivastava</div>
          <div>
            A skilled
            <strong id="user-detail-intro"> Full Stack Web Developer 💻</strong>
          </div>
          <a
            href="https://drive.google.com/uc?id=1MIPQ5rYKrYsFW3pCB0ki44LGqTLbMEQL&export=download"
            id="resume-link-2"
          >
            <div
              onClick={() =>
                openLink(
                  "https://drive.google.com/file/d/1MIPQ5rYKrYsFW3pCB0ki44LGqTLbMEQL/view?usp=share_link"
                )
              }
              className="home-resume"
              id="resume-button-2"
            >
              Resume <HiDownload />
            </div>
          </a>
        </div>

        <div className="homeright">
          <img className="home-img" src="./profile2.jpg" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Home;
