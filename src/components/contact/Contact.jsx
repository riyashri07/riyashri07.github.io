import "./contact.css";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

function Contact() {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="contact-main" id="contact">
      <div className="headingwrapper">
        <h1 className="contactheading">How to reach Me</h1>
        <div className="headingwrapperDiv">
          <div className="headingwrapperDivLeft">
            <img
              src="https://img.freepik.com/premium-vector/computer-monitor-flat-concept-design_229280-161.jpg"
              alt="contactme"
            />
          </div>
          <div className="headingwrapperDivRight">
            <div className="contact-gmail" id="contact-email">
              <SiGmail /> riyampct7@gmail.com
            </div>
            <div className="contact-number" id="contact-phone">
              <IoMdCall /> +919156913772
            </div>
            <div className="contact-location">
              <MdLocationOn /> Pune , Maharashtra
            </div>
            <div className="contact-socialLink">
              <img
                onClick={() => openLink("https://github.com/riyashri07")}
                src={process.env.PUBLIC_URL + "./Images/github.svg"}
                alt="About"
                id="contact-github"
              />
              <img
                onClick={() =>
                  openLink("https://www.linkedin.com/in/SutharShantanu")
                }
                src={process.env.PUBLIC_URL + "./Images/linkedin.svg"}
                alt="About"
                id="contact-linkedin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
