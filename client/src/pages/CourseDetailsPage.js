// CourseDetailsPage.js
import React, { useEffect, useState } from "react";
import CourseCardDetails from "../components/CourseDetails";
import { getCourseById } from "../utils/api";
import { useParams } from "react-router-dom";
import { Center } from "@chakra-ui/react";
const CourseDetailsPage = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  console.log(id, "id");
  useEffect(() => {
    async function sai() {
      let c = await getCourseById(id);
      setCourse(c);
    }
    sai();
  }, []);

  //   const courseId = match.params.id; // Access the course ID from the URL params

  // Fetch course details using the courseId

  return (
    <div>
      <Center>
        <CourseCardDetails course={course} />
      </Center>
      {/* Display course details here */}
    </div>
  );
};

export default CourseDetailsPage;
