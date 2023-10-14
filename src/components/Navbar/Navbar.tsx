import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";
import { useRouter } from "next/router";
import { theme } from "../../chakra";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState, login } from "../../../utils/store/store";
import { SignOut, auth } from "../../../firebase";

const Navbar = (): JSX.Element => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const user = state.user.user;
  const { displayName, photoURL }: Record<string, any> = user || {};

  const variants = {
    close: { y: -100, transition: { duration: 0.5 } },
    open: { y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (!user) {
      router.push("/");
    }

    auth.onAuthStateChanged(async (user) => {
      dispatch(login(user));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <HStack
      color="white"
      p={user ? "0 0 0 1.5rem" : "0 1.5rem"}
      justify="space-between"
      alignItems="center"
      bg="black"
      h="5rem"
    >
      <Box
        cursor="pointer"
        onClick={() => (user ? router.push("/home") : router.push("/"))}
      >
        <Logo />
      </Box>
      {user && (
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
              {photoURL && (
                <Image
                  width="45"
                  height="45"
                  src={photoURL}
                  alt="photo account"
                />
              )}
            </Box>
            <Text>Hi, {displayName?.split(" ")[0]}</Text>
          </Flex>
          <Box
            as={motion.div}
            position="relative"
            zIndex={1}
            bg="black"
            w="100%"
            p="0.5rem"
            variants={variants}
            initial="close"
            animate={isActive ? "open" : "close"}
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
                SignOut();
                setIsActive(false);
              }}
            >
              LogOut
            </Button>
          </Box>
        </Box>
      )}
    </HStack>
  );
};

export default Navbar;
