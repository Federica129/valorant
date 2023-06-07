import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { Abilities } from "../types/characterVal";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState, add, remove } from "../utils/store/store";
import Image from "next/image";
import { GET } from "../utils/api";

export async function getStaticPaths() {
  // Call an external API endpoint to get character
  const res = await fetch("https://valorant-api.com/v1/agents/");
  const character = await res.json();

  // (slower builds, but faster initial page load)
  const paths = character.data.map((character: any) => ({
    params: {
      uuidChamp: character.uuid.toString(),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
  const { uuidChamp } = context.params || {};

  const res = await fetch("https://valorant-api.com/v1/agents/" + uuidChamp);
  const data = await res.json();
  const agentData = data.data;

  return {
    props: { agentData }, // will be passed to the page component as props
  };
}

const InfoChamp = ({ agentData }: any): JSX.Element => {
  const { uuid } = agentData;
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.favourite.agents);

  const { error, data, status, isLoading } = useQuery({
    queryKey: ["characterInfo", agentData],
    queryFn: async () => await GET(uuid),
    initialData: agentData,
  });

  if (status === "loading") {
    return (
      <Flex
        bg="blue"
        p={{ xs: "2rem", md: "3rem" }}
        h="calc(100vh - 5rem)"
        justifyContent="center"
      >
        <VStack
          bg="white"
          p={{ xs: "1rem", md: "2rem" }}
          w="100%"
          justifyContent="center"
        >
          <Image
            src="https://www.wpfaster.org/wp-content/uploads/2013/06/circle-loading-gif.gif"
            alt="loader"
            width={100}
            height={100}
          />
        </VStack>
      </Flex>
    );
  } else if (error) router.push("/404");

  const {
    displayName,
    description,
    fullPortraitV2,
    abilities,
    killfeedPortrait,
  } = data.data || {};

  const agent = data.data || {};

  const CheckAgent = state.every((el) => el !== agent);

  const ButtonFavourite = (): void => {
    if (CheckAgent) {
      dispatch(add(agent));
    } else dispatch(remove(agent));
  };

  return (
    <Box>
      {!isLoading && (
        <Box bg="blue" p={{ xs: "2rem", md: "3rem" }}>
          <VStack bg="white" p={{ xs: "1rem", md: "2rem" }}>
            <Stack>
              <Stack direction={{ xs: "column", md: "row" }}>
                <VStack
                  justify="space-between"
                  borderTop="solid 0.5rem"
                  color="blue"
                >
                  <Box>
                    <Box borderLeft="solid 0.5rem" color="blue">
                      <Heading color="red" variant="h2">
                        {displayName}
                      </Heading>
                    </Box>
                    <Text
                      as="p"
                      borderRight="solid 0.5rem"
                      fontSize={{ xs: "1rem", md: "1.3rem" }}
                    >
                      {description}
                    </Text>
                  </Box>
                  <Flex
                    justify="center"
                    pb={{ base: "0", md: "1rem", lg: "2rem" }}
                  >
                    <Button
                      bg="red"
                      borderRadius="none"
                      color="white"
                      _hover={{ bg: "blue" }}
                      onClick={ButtonFavourite}
                    >
                      {CheckAgent
                        ? "Add to favourites"
                        : "Remove to favourites"}
                    </Button>
                  </Flex>
                </VStack>
                <Box
                  w={{ xs: "15rem", lg: "25rem" }}
                  h={{ xs: "15rem", lg: "25rem" }}
                  position="relative"
                  flex="0 0 auto"
                  alignSelf="center"
                >
                  <Image
                    src={fullPortraitV2}
                    alt={displayName}
                    fill
                    sizes="(max-width: 992px) 15rem, 25rem"
                    style={{ objectFit: "cover" }}
                    priority
                  />
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
                {abilities?.map((ability: Abilities, index: number) => (
                  <ListItem display="flex" gap="1rem" key={index}>
                    <Box
                      bg="blue"
                      w={{ xs: "3rem", md: "4.5rem" }}
                      h={{ xs: "3rem", md: "4.5rem" }}
                      position="relative"
                      flex="0 0 auto"
                      mt="0.45rem"
                    >
                      <Image
                        fill
                        sizes="(max-width: 768px) 3rem, 4.5rem"
                        src={ability.displayIcon ?? killfeedPortrait}
                        alt={"ability" + index}
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
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
      )}
    </Box>
  );
};

export default InfoChamp;
