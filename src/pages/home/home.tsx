import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { Character } from "../../../types/characterVal";
import axios from "axios";
import Card from "../../components/Card/Card";
import { State } from "../../App";
import { Box, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { theme } from "../../chakra";

const Home = (): JSX.Element | string => {
  const [character, setCharacter] = useState<[]>([]);
  const [id, setUuid] = useState<string>("");

  const value = useContext<any>(State);

  console.log(value);

  const GET = async (uuid?: string) => {
    const res = await axios.get("https://valorant-api.com/v1/agents/");

    return setCharacter(res.data.data);
  };

  const { isLoading, error, data } = useQuery("uuid", GET);

  if (isLoading) return "Loading...";

  if (error as Record<string, unknown>)
    return "An error has occurred: " + toString(error.message);

  console.log(character);

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
        {(character as Character[])
          .filter((character) => character.role != null)
          .map((character, index) => (
            <GridItem>
              <Card key={index} data={character} />
            </GridItem>
          ))}
      </Grid>
    </VStack>
  );
};

export default Home;
