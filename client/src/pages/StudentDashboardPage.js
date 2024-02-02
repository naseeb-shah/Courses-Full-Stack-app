// StudentDashboardPage.js
import React, { useEffect, useState } from "react";
import { getStudentData } from "../utils/api";
import {
  Center,
  Image,
  HStack,
  Spacer,
  Text,
  VStack,
  Flex,
  Progress,
} from "@chakra-ui/react";
import { wrap } from "framer-motion";
const StudentDashboardPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function sai() {
      let res = await getStudentData();
      setData(res);
    }
    sai();
  }, []);

  return (
    <div style={{ width: "90%", marginLeft: "5%", padding: "5%" }}>
      {data?.name && (
        <>
          {" "}
          <HStack ml={"5%"}>
            <Text>Name</Text>

            <Text>{data.name}</Text>
          </HStack>
          <HStack ml={"5%"}>
            <Text>Email</Text>

            <Text>{data.email}</Text>
          </HStack>
          <Text ml={"5%"}>{"Enrolled courses"}</Text>
          <Flex flexWrap={"wrap"}>
            {data.courses.map((e) => (
              <VStack w={"300px"} p={"25px"}>
                <Progress colorScheme="green" value={80} bg={"white"} />
                <Image w="250px" h="250px" src={e.thumbnail}></Image>
                <Progress colorScheme="red" value={80} />
                <Text textAlign={"center"}>{e.instructor}</Text>
                <Text textAlign={"center"}>{e.description}</Text>
              </VStack>
            ))}
          </Flex>
        </>
      )}
      {/* <p>{JSON.stringify(data?.courses[0])}</p> */}
      {/* Display enrolled courses, progress, etc. */}
    </div>
  );
};

export default StudentDashboardPage;
