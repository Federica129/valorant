import { Grid, GridItem } from "@chakra-ui/react";
import { SkeletonSquare } from "../../SkeletonSquare/SkeletonSquare";
import Card from "../../Card/Card";
import { Section } from "../../molecules/Section/Section";
import { useQuery } from "react-query";
import { GET } from "../../../../utils/api";
import { Character } from "../../../../types/characterVal";
import { RootState } from "../../../../utils/store/store";
import { useSelector } from "react-redux";

export const AgentsBlock = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["character"],
    queryFn: async () => await GET("agents"),
  });

  const state = useSelector((state: RootState) => state.champ);
  console.log(state.champ);

  return (
    <Section title="agents" colorScheme="dark">
      <Grid
        templateColumns="repeat(auto-fill, 100px)"
        justifyContent="center"
        justifyItems="center"
        gap="1rem 0"
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
        {(state.champ ?? []).map((character, index) => (
          <GridItem key={index}>
            {isFetching ? <SkeletonSquare /> : <Card data={character} />}
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
};
