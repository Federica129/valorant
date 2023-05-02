import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const InfoChamp = (): JSX.Element => {
  const location = useLocation();
  const [character, setCharacter] = useState<any>([]);

  useEffect(() => {
    const PROVA = async () => {
      const res = await axios.get(
        `https://valorant-api.com/v1/agents${location.pathname}`
      );

      return res;
    };

    PROVA().then((res) => setCharacter(res.data.data));
  }, []);

  return (
    <Box bg="blue" p={{ xs: "2rem", md: "3rem" }}>
      <VStack bg="white" p={{ xs: "1rem", md: "2rem" }}>
        <Stack>
          <Stack direction={{ xs: "column", md: "row" }}>
            <Box borderTop="solid 0.5rem" color="blue">
              <Box borderLeft="solid 0.5rem" color="blue">
                <Heading color="red" variant="h2">
                  {character.displayName}
                </Heading>
              </Box>
              <Text
                as="p"
                borderRight="solid 0.5rem"
                fontSize={{ xs: "1rem", md: "1.3rem" }}
              >
                {character.description}
              </Text>
            </Box>
            <Box>
              <Image src={character.fullPortraitV2} />
            </Box>
          </Stack>

          <Box borderTop="solid 0.5rem" color="blue">
            <Heading
              color="red"
              variant="h3"
              borderRight="solid 0.5rem"
              borderColor="blue"
            >
              Abilities
            </Heading>
          </Box>
          <List display="flex" flexDirection="column" gap="1rem">
            {character.abilities?.map((ability) => (
              <ListItem display="flex" alignItems="center" gap="1rem">
                <Image
                  bg="blue"
                  w={{ xs: "3rem", md: "4.5rem" }}
                  src={ability.displayIcon}
                />
                <Box>
                  <Heading variant="h4" w="10rem">
                    {ability.displayName}
                  </Heading>
                  <Text as="p">{ability.description}</Text>
                </Box>
              </ListItem>
            ))}
          </List>
        </Stack>
      </VStack>
    </Box>
  );
};

export default InfoChamp;
