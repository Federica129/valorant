import { useQuery } from "react-query";
import { Character } from "../../../types/characterVal";
import axios from "axios";
import Card from "../../components/Card/Card";
import { Box, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { theme } from "../../chakra";
import { useNavigate } from "react-router-dom";
import { SkeletonSquare } from "../../components/SkeletonSquare/SkeletonSquare";

const Home = (): JSX.Element => {
  const navigate = useNavigate();

  const GET = async () => {
    const res = await axios.get("https://valorant-api.com/v1/agents/");
    const data = await res;
    return data.data;
  };

  const { error, data, isFetching } = useQuery({
    queryKey: ["character"],
    queryFn: async () => await GET(),
  });

  if (error) navigate("/404");

  return (
    <VStack
      py="4rem"
      bg={theme.colors.red}
      h="100%"
      minH="calc(100vh - 5rem)"
      justifyContent="center"
      spacing="1.5rem"
    >
      <Box
        textAlign="end"
        borderBottom="solid 0.15rem"
        color={theme.colors.white}
        width="90%"
      >
        <Heading variant="h1" as="h1">
          Agents
        </Heading>
      </Box>
      <Grid
        templateColumns={{
          xs: "repeat(2, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(7, 1fr)",
        }}
        gap="1rem"
        bg="white"
        p="1.5rem"
        borderRadius="0.2rem"
      >
        {(data?.data as Character[])
          ?.filter((character) => character.role != null)
          .map((character, index) => (
            <GridItem key={index}>
              {isFetching ? <SkeletonSquare /> : <Card data={character} />}
            </GridItem>
          ))}
      </Grid>
    </VStack>
  );
};

export default Home;
