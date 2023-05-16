import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";
import { useRouter } from "next/router";
import { theme } from "../../chakra";
import Image from "next/image";
import { useState } from "react";
import { BiLogOut, BiLogIn } from "react-icons/bi";

const Navbar = (props: any): JSX.Element => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const { signIn, user, signOut } = props;
  const { displayName, photoURL } = user || {};

  return (
    <HStack
      color="white"
      p={user ? "0 0 0 1.5rem" : "0 1.5rem"}
      justify="space-between"
      alignItems="center"
      bg="black"
      h="5.1rem"
    >
      <Box cursor="pointer" onClick={(): any => router.push("/")}>
        <Logo />
      </Box>
      {user ? (
        <Box h="100%" w="max-content">
          <Flex
            bg="black"
            position="relative"
            zIndex={2}
            px="1.5rem"
            justifyContent="end"
            alignItems="center"
            h="100%"
            gap="1rem"
            _hover={{ bg: "#242424", cursor: "pointer" }}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <Box borderRadius="10rem" overflow="hidden">
              <Image
                width="45"
                height="45"
                src={photoURL}
                alt="photo account"
              />
            </Box>
            <Text>Hi, {displayName.split(" ")[0]}</Text>
          </Flex>
          <Box
            position="relative"
            zIndex={1}
            top={isActive ? "-0.1rem" : "-5rem"}
            bg="black"
            w="100%"
            p="0.5rem"
            transition="0.5s"
          >
            <Button
              w="100%"
              justifyContent="start"
              bg="black"
              borderRadius="0"
              borderBottom={`0.1rem solid ${theme.colors.red}`}
              _hover={{
                bg: "none",
                borderBottom: `0.1rem solid ${theme.colors.white}`,
              }}
              pl="0"
              leftIcon={<BiLogOut />}
              onClick={() => {
                signOut(), setIsActive(false);
              }}
            >
              LogOut
            </Button>
          </Box>
        </Box>
      ) : (
        <Button
          leftIcon={<BiLogIn />}
          bg="black"
          pl="0"
          borderRadius="0"
          borderBottom={`0.1rem solid ${theme.colors.red}`}
          _hover={{
            bg: "none",
            borderBottom: `0.1rem solid ${theme.colors.white}`,
          }}
          onClick={() => signIn()}
        >
          Login
        </Button>
      )}
    </HStack>
  );
};

export default Navbar;
