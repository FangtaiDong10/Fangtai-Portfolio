import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "",
  },
  {
    icon: faGithub,
    url: "https://github.com/FangtaiDong10",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/dong-fangtai-1392911a6/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Rendering each list item
  const listIconItems = socials.map(({ icon, url }) => {
    return (
      <a href={url} key={url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} size="2x" key={url} />
      </a>
    );
  });

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>{listIconItems}</HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {
                <a href="#projects" onClick={handleClick("projects")}>
                  Projects
                </a>
              }
              {
                <a href="#contact-me" onClick={handleClick("contactme")}>
                  Contact Me
                </a>
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
