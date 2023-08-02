import { useQuery } from "react-query";
import { Box, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { theme } from "../src/chakra";
import { SkeletonSquare } from "../src/components/SkeletonSquare/SkeletonSquare";
import Card from "../src/components/Card/Card";
import { Character } from "../types/characterVal";
import { useRouter } from "next/router";
import { MapCarousel } from "../src/components/Block/MapCarousel/MapCarousel";
import { GET } from "../utils/api";

const Home = (): JSX.Element => {
  const router = useRouter();

  const { error, data, isFetching } = useQuery({
    queryKey: ["character"],
    queryFn: async () => await GET("agents"),
  });

  if (error) router.push("/404");

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
          ?.filter((character) => character.isPlayableCharacter == true)
          .map((character, index) => (
            <GridItem key={index}>
              {isFetching ? <SkeletonSquare /> : <Card data={character} />}
            </GridItem>
          ))}
      </Grid>
      <MapCarousel />
    </VStack>
  );
};

export default Home;
