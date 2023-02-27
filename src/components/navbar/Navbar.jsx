import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Navbar() {
  const openLink = (url) => {
    window.open(url);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div id="nav-menu" className="navbar">
      <div className="wrapper">
        <div className="wrapperLeft">
          <Link to="home" smooth={true} offset={-100} duration={500}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          </Link>
        </div>
        <div className="wrapperRight">
          <div>
            <Link
              to="home"
              smooth={true}
              offset={-100}
              duration={500}
              className="nav-link home"
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              to="about"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link about"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="skills"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link skills"
            >
              Skills
            </Link>
          </div>
          <div>
            <Link
              to="projects"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link projects"
            >
              Projects
            </Link>
          </div>
          <div>
            <Link
              to="contact"
              smooth={true}
              offset={-79}
              duration={500}
              className="nav-link contact"
            >
              Contact
            </Link>
          </div>
          <div>
            <a
              href="./image/Riya_Shrivastava_Resume.pdf"
              className="nav-link resume"
              id="resume-link-1"
              download="riya_shrivastava_resume.pdf"
            >
              <div
                onClick={() =>
                  openLink(
                    "https://drive.google.com/file/d/1MIPQ5rYKrYsFW3pCB0ki44LGqTLbMEQL/view?usp=share_link"
                  )
                }
                className="navbar-resume"
                id="resume-button-1"
              >
                Resume <HiDownload />
              </div>
            </a>
          </div>
        </div>
        <div className="responce">
          <RxHamburgerMenu onClick={onOpen} />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody marginTop={"30px"}>
                <div className="drawerbody">
                  <div>
                    <Link
                      to="home"
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={onClose}
                    >
                      Home
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="about"
                      smooth={true}
                      offset={-79}
                      duration={500}
                      onClick={onClose}
                    >
                      About
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="skills"
                      smooth={true}
                      offset={-79}
                      duration={500}
                      onClick={onClose}
                    >
                      Skills
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="projects"
                      smooth={true}
                      offset={-79}
                      duration={500}
                      onClick={onClose}
                    >
                      Projects
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="contact"
                      smooth={true}
                      offset={-79}
                      duration={500}
                      onClick={onClose}
                    >
                      Contact
                    </Link>
                  </div>
                  <div>
                    <a href="">
                      <div
                        className="navbar-resume"
                        onClick={() => {
                          onClose();
                          openLink("");
                        }}
                      >
                        Resume <HiDownload />
                      </div>
                    </a>
                  </div>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
