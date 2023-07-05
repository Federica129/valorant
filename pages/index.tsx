import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useTime,
  useTransform,
} from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { Icon, SocialListLogin } from "../utils/socialListLogin";
import { MdOutlineGames } from "react-icons/md";

const LoginPage = (props: any) => {
  const { user, signIn } = props;
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const time = useTime();
  const rotate = useTransform(time, [0, 30000], [0, 360], { clamp: false });
  const shouldReduceMotion = useReducedMotion();

  if (user) router.push("/home");

  const marqueeVariants = {
    animate: {
      x: [-2000, +2000],
      opacity: 0.5,

      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          direction: "alternate",
          playState: "running",
          duration: 5,
          ease: "linear",
          delay: 0,
        },
      },
    },
  };
  const titleVariants = {
    animate: {
      y: [+10, 0],
      opacity: [0, 1],

      transition: {
        y: { duration: 0.5 },
      },
    },
  };

  const boxLogin = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      "margin-top": "15rem",
      transition: {
        when: "beforeChildren",
      },
    },
  };

  const childVariant = {
    visible: {
      opacity: 1,
      color: ["#1a202c", "#ff4655", "#1a202c"],
      transition: {
        duration: 0.7,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const item = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0, y: +10 },
  };

  return (
    <Flex
      bg="blue"
      h="calc(100vh - 80px)"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
      overflow="hidden"
      position="relative"
    >
      <Box
        as={motion.div}
        variants={marqueeVariants}
        animate={shouldReduceMotion ? { x: "0", opacity: "0.5" } : "animate"}
        color="red"
        textTransform="uppercase"
        display="flex"
        alignContent="end"
        zIndex="1"
      >
        <Text as="h1" fontSize="100vh">
          Val
        </Text>
      </Box>
      <Box
        as={motion.div}
        color="white"
        position="absolute"
        fontSize="200vh"
        opacity="0.05"
        zIndex="0"
        style={shouldReduceMotion ? (null as any) : { rotate }}
      >
        <MdOutlineGames />
      </Box>
      <VStack
        position="absolute"
        h="calc(100vh - 80px)"
        w="100%"
        backdropFilter="blur(2rem)"
        bgColor="#ffffff00"
        justifyContent="center"
        zIndex="2"
      >
        <Heading
          as={motion.h1}
          variants={titleVariants}
          animate="animate"
          variant="h1"
          color="white"
          _firstLetter={{ color: "red" }}
        >
          Valorant
        </Heading>
        <Box p="1rem" bg="white" w="30vw">
          <Text
            onClick={() => setIsVisible(!isVisible)}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="black"
            cursor="pointer"
          >
            Login{" "}
            <Text
              as={motion.span}
              animate={isVisible ? { rotate: -180 } : { rotate: 0 }}
              color="red"
              fontSize="1.5rem"
            >
              <RiArrowDownSFill />
            </Text>
          </Text>
        </Box>
        <AnimatePresence>
          {isVisible && (
            <Flex
              bg="white"
              w="30vw"
              as={motion.div}
              variants={boxLogin}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              flexDir="column"
              align="center"
              p="1rem"
              position="absolute"
            >
              <Text as={motion.p} variants={childVariant}>
                Only works with google
              </Text>
              <List display="flex" gap="0.5rem">
                {SocialListLogin.map((social, index) => (
                  <ListItem
                    key={index}
                    as={motion.li}
                    variants={item}
                    custom={index}
                    whileHover={{ scale: 1.1, cursor: "pointer" }}
                    onClick={() => social.google && signIn()}
                  >
                    <Icon {...social} />
                  </ListItem>
                ))}
              </List>
            </Flex>
          )}
        </AnimatePresence>
      </VStack>
    </Flex>
  );
};

export default LoginPage;
