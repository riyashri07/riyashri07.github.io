import "./contact.css";

import {
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  AiOutlineInstagram,
  AiOutlineCodepen,
  AiFillLinkedin,
} from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsPerson } from "react-icons/bs";
// import AOS from "aos";
// import "aos/dist/aos.css"; // You can also use <link> for styles
// // ..
// AOS.init();

function Contact() {
  const openLink = (url) => {
    window.open(url);
  };
  return (
    <div className="contact-main" id="contact">
      <div className="text-divider-contact"></div>
      <div className="headingwrapper">
        <h1 className="contactheading">Contact</h1>
        {/* <div className="headingwrapperDiv">
          <div className="headingwrapperDivLeft">
            <img
              src="https://www.genscript.com/gsimages/support/image-contactus.png"
              alt="contactme"
            />
          </div>
          <div className="headingwrapperDivRight">
            <div className="contact-gmail" id="contact-email">
              <SiGmail /> Shantanusut2000@gmail.com
            </div>
            <div className="contact-number" id="contact-phone">
              <IoMdCall /> +917732962110
            </div>
            <div className="contact-location">
              <MdLocationOn /> Hanumangarh, Rajasthan
            </div>
            <div className="contact-socialLink">
              <img
                onClick={() => openLink("https://github.com/SutharShantanu")}
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
        </div> */}

        <Box
          bg="rgba(2,15,44,1)"
          color="white"
          id="contact_all"
          border={"1px solid rgba(255, 255, 255, 0.125)"}
          borderRadius="15px"
          m={{ sm: 2, md: 12, lg: 8 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box
            // display={"flex"}
            // justifyContent={"space-between"}
            // flexDirection={"row"}
            className="contact_main"
            // spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
          >
            <Box
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-mirror="true"
              id="contact_details"
            >
              <Box>
                <Heading>Details</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                  Fill up the form below to contact
                </Text>
                <Box
                  py={{
                    base: 5,
                    sm: 5,
                    md: 8,
                    lg: 10,
                  }}
                >
                  <VStack
                    pl={0}
                    // spacing={3}
                    // alignItems="flex-start"
                    textAlign="left"
                  >
                    <Button
                      // display={"block"}
                      border={"2px solid transparent"}
                      size="md"
                      height="48px"
                      width="80%"
                      variant="ghost"
                      color="#DCE2FF"
                      textAlign="left"
                      id="contact-phone"
                      _hover={{
                        border: "2px solid rgba(255, 255, 255, 0.125)",
                      }}
                      onClick={() => openLink("tel:9156913772")}
                      leftIcon={<MdPhone color="#355f4d" size="20px" />}
                    >
                      +919156913772
                    </Button>
                    <Button
                      // display={"block"}
                      border={"2px solid transparent"}
                      size="md"
                      height="48px"
                      width="80%"
                      variant="ghost"
                      color="#DCE2FF"
                      id="contact-email"
                      textAlign="left"
                      _hover={{
                        border: "2px solid rgba(255, 255, 255, 0.125)",
                      }}
                      onClick={() => openLink("mailto:riyampct7@gmail.com")}
                      leftIcon={<MdEmail color="#355f4d" size="20px" />}
                    >
                      riyampct7@gmail.com
                    </Button>
                    <Button
                      // display={"block"}
                      border={"2px solid transparent"}
                      size="md"
                      height="48px"
                      width="80%"
                      variant="ghost"
                      color="#DCE2FF"
                      textAlign="left"
                      onClick={() =>
                        openLink("")
                      }
                      _hover={{
                        border: "2px solid rgba(255, 255, 255, 0.125)",
                      }}
                      leftIcon={<MdLocationOn color="#355f4d" size="20px" />}
                    >
                      Pune, India
                    </Button>
                  </VStack>
                </Box>
                <Box
                  mt={{ lg: 10, md: 10 }}
                  spacing={5}
                  px={5}
                  alignItems="flex-start"
                >
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    onClick={() =>
                      openLink(
                        "https://www.facebook.com/riya.shrivastava.581730"
                      )
                    }
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.125)",
                    }}
                    icon={<MdFacebook size="28px" />}
                  />
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    id="contact-github"
                    onClick={() => openLink("https://github.com/riyashri07")}
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.125)",
                    }}
                    icon={<BsGithub size="28px" />}
                  />
                  <IconButton
                    aria-label="codepen"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    onClick={() => openLink("https://codepen.io/riyashri07")}
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.125)",
                    }}
                    icon={<AiOutlineCodepen size="28px" />}
                  />
                  <IconButton
                    aria-label="linkedin"
                    id="contact-linkedin"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    onClick={() =>
                      openLink("https://www.linkedin.com/in/riyashrivastava07")
                    }
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.125)",
                    }}
                    icon={<AiFillLinkedin size="28px" />}
                  />
                  <IconButton
                    aria-label="instagram"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.125)",
                    }}
                    onClick={() =>
                      openLink("https://www.instagram.com/ria_shrivastav")
                    }
                    icon={<AiOutlineInstagram size="28px" />}
                  />
                </Box>
              </Box>
            </Box>

            <Box
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-mirror="true"
              bg="rgba(255, 255, 255, 0.125)"
              borderRadius="lg"
              id="contact_fill"
              border={"1px solid rgba(255, 255, 255, 0.125)"}
            >
              <Box m={8} color="white">
                <VStack spacing={5}>
                  <FormControl id="name">
                    <FormLabel>Your Name</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsPerson color="gray.800" />}
                      />
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Mail</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlineEmail color="gray.800" />}
                      />
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      borderColor="gray.300"
                      _hover={{
                        borderRadius: "gray.300",
                      }}
                      placeholder="message"
                    />
                  </FormControl>
                  <FormControl id="name" float="right">
                    <Button
                      variant="solid"
                      border={"2px solid transparent"}
                      bg="  #355f4d "
                      transition={"all .2s ease-in-out"}
                      color="white"
                      _hover={{
                        bgColor: "transparent",
                        border: "2px solid #355f4d ",
                        boxShadow: "rgba(255, 255, 255, 0.125) 0px 3px 8px",
                      }}
                    >
                      Send Message <span>&nbsp;</span> <FiSend />
                    </Button>
                  </FormControl>
                </VStack>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Contact;
