import React from "react";
import { Avatar, Heading, Img, VStack, Stack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import primg from "../images/primg.jpg";

const greeting = "Hello, I am Toghrul!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="xl" src={primg}></Avatar>
      <Stack spacing={5}>
        {" "}
        <Heading size={"xs"}>{greeting}</Heading>
      </Stack>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
