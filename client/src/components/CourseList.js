import React from "react";
import {
  Box,
  Heading,
  Text,
  Badge,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      width={"300px"}
      bg="rgb(31,42,55)"
      boxShadow={"revert-layer"}
      m={5}
      onClick={() => navigate(`/course/${course.id}`)}
    >
      <Heading
        fontSize="xl"
        mb={4}
        css={{
          background:
            "linear-gradient(97.2deg, rgb(235, 62, 62) 10.5%, rgb(101, 46, 229) 93.7%)",

          WebkitBackgroundClip: "text",
          color: "transparent",
          fontSize: "lg",
        }}
      >
        {course.name}
      </Heading>

      <VStack align="start" spacing={2}>
        <Image borderRadius="10" src={course.thumbnail} />
        <Text>
          <strong>Instructor:</strong> {course.instructor}
        </Text>
        <Text>{course.description}</Text>
      </VStack>
    </Box>
  );
};

export default CourseCard;
