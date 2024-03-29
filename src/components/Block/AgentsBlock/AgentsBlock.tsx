import { Grid, GridItem } from "@chakra-ui/react";
import { SkeletonSquare } from "../../SkeletonSquare/SkeletonSquare";
import Card from "../../Card/Card";
import { Section } from "../../molecules/Section/Section";
import { useQuery } from "react-query";
import { GET } from "../../../../utils/api";
import { Character } from "../../../../types/characterVal";
import { RootState } from "../../../../utils/store/store";
import { useSelector } from "react-redux";
import { FormBlockProps } from "../FormBlock/FormBlock.props";

export const AgentsBlock = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["character"],
    queryFn: async () => await GET("agents"),
  });

  const state = useSelector((state: RootState) => state.champ);

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
        {(state.champ ?? []).map((arrayField) =>
          ((arrayField as any) || []).map(
            (character: Character | FormBlockProps, i: number) => (
              <GridItem key={i}>
                {isFetching ? <SkeletonSquare /> : <Card data={character} />}
              </GridItem>
            )
          )
        )}
      </Grid>
    </Section>
  );
};
