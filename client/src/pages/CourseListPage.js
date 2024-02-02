// CourseListingPage.js
import React, { useState, useEffect } from "react";
// import { fetchCourses } from "../services/courseService";
import { Input, Center, Flex, Button, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData, searchCourses } from "../utils/api";
import CourseCard from "../components/CourseList";
const CourseListingPage = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const courses = useSelector((s) => s.data);
  useEffect((e) => {
    getData(dispatch);
  }, []);

  return (
    <>
      <Box width={"50%"} ml={"10%"} mt={"30px"}>
        <Input
          margin="auto"
          width={"60%"}
          variant="filled"
          placeholder="Search for courses"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button ml={"15Px"} onClick={() => searchCourses(search, dispatch)}>
          Search{" "}
        </Button>
        <Button ml={"15Px"} onClick={() => getData(dispatch)}>
          All Courses{" "}
        </Button>
      </Box>
      <Center>
        <Flex
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          {courses.map((course, index) => (
            <CourseCard key={course.id + index} course={course} />
          ))}
        </Flex>
      </Center>
    </>
  );
};

export default CourseListingPage;
