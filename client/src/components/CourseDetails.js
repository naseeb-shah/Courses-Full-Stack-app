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

const CourseCardDetails = ({ course }) => {
  return (
    <Box
      p={4}
      borderRadius="lg"
      bg="rgb(31,42,55)"
      boxShadow={"revert-layer"}
      m={20}
    >
      <Heading fontSize="xl" mb={4}>
        {course.name}
      </Heading>

      <VStack align="start" spacing={2}>
        <Image borderRadius="10" src={course.thumbnail} />
        <Text>
          <strong>Instructor:</strong> {course.instructor}
        </Text>
        <Text>{course.description}</Text>
        <Badge colorScheme="green">{course.enrollmentStatus}</Badge>
        <Text>
          <strong>Duration:</strong> {course.duration}
        </Text>
        <Text>
          <strong>Schedule:</strong> {course.schedule}
        </Text>
        <Text>
          <strong>Location:</strong> {course.location}
        </Text>

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <strong>Pre-requisites</strong>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              {course.prerequisites?.map((prerequisite, index) => (
                <Text key={index}>{prerequisite}</Text>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <strong>Syllabus</strong>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              {course.syllabus?.map((week) => (
                <Box key={week.week} mb={2}>
                  <Text>
                    <strong>Week {week.week}:</strong> {week.topic}
                  </Text>
                  <Text>{week.content}</Text>
                </Box>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <VStack align="start" spacing={2}>
          <Text>
            <strong>Students:</strong>
          </Text>
          {course?.students?.map((student) => (
            <Text key={student.id}>
              {student.name} - {student.email}
            </Text>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default CourseCardDetails;
