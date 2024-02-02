import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="rgb(31,42,55)"
      color="text"
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        css={{
          background: "linear-gradient(45deg, #3498db, #2ecc71)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontSize: "lg",
        }}
      >
        SHAH EDUCATION
      </Text>
      <Flex align="center" fontWeight="bold">
        <Text mr={"8"}>Welcome</Text>
        <Text as={Link} to="/" mr="4">
          Home
        </Text>
        <Text mr="4" as={Link} to="/dashboard">
          Dashboard
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
