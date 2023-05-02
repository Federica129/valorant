import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Abilities } from "../../../types/characterVal";
import { useQuery } from "react-query";
import { useState } from "react";

const InfoChamp = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const GET = async () => {
    const res = await axios.get(
      `https://valorant-api.com/v1/agents${location.pathname}`
    );
    const data = await res;
    setLoading(true);

    return data.data;
  };

  const { error, data, status } = useQuery({
    queryKey: ["characterInfo", location],
    queryFn: async () => await GET(),
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
          />
        </VStack>
      </Flex>
    );
  } else if (error) navigate("/404");

  const { displayName, description, fullPortraitV2, abilities } =
    data?.data || {};

  return (
    <>
      {loading && (
        <Box bg="blue" p={{ xs: "2rem", md: "3rem" }}>
          <VStack bg="white" p={{ xs: "1rem", md: "2rem" }}>
            <Stack>
              <Stack direction={{ xs: "column", md: "row" }}>
                <Box borderTop="solid 0.5rem" color="blue">
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
                <Box>
                  <Image src={fullPortraitV2} />
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
                  <ListItem
                    display="flex"
                    alignItems="center"
                    gap="1rem"
                    key={index}
                  >
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
      )}
    </>
  );
};

export default InfoChamp;
