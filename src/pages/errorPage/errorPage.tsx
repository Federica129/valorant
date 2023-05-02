import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { theme } from "../../chakra";

const ErrorPage = (): JSX.Element => {
  return (
    <Box
      h="calc(100vh - 80px)"
      bg={theme.colors.blue}
      px={{ xs: "2rem", md: "10rem" }}
      backgroundImage="url(https://www.freestyle.abbott/za-en/errors/404/_jcr_content/root/container_1688562517/errorpage.coreimg.png/1627919005948/error-404.png)"
      bgSize="contain"
    >
      <Flex
        flexDirection="column"
        justify={{ xs: "center", md: "space-around" }}
        borderLeft="solid 0.15rem"
        h="calc(100vh - 120px)"
        color={theme.colors.white}
      >
        <Box>
          <Heading
            fontSize={{ xs: "1.8rem", md: "5rem" }}
            borderTop="solid 0.15rem"
          >
            Sorry
          </Heading>
          <Heading fontSize={{ xs: "1.8rem", md: "5rem" }}>
            Page Not Found
          </Heading>
        </Box>
        <Flex justify="end">
          <Flex justify="end" borderBottom="solid 0.15rem" py="4rem" w="70vw">
            <Flex
              justify="center"
              border="solid 0.15rem"
              p="0.3rem"
              w="14.2rem"
            >
              <Flex
                bg="red"
                _hover={{ bg: "white" }}
                justifyContent="center"
                transition="0.5s"
              >
                <Link to="/">
                  <Button
                    colorScheme="none"
                    color="white"
                    _hover={{ color: "black" }}
                    px="2rem"
                  >
                    GO TO HOMEPAGE
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ErrorPage;
