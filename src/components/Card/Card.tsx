import { Link } from "react-router-dom";
import { Character } from "../../../types/characterVal";
import { Box, Image, Text } from "@chakra-ui/react";
import { theme } from "../../chakra";

type CardProps = {
  data: Character;
};

const Card: React.FC<CardProps> = ({ data }) => {
  const { displayIcon, displayName, uuid } = data;

  return (
    <Box>
      <Link to={`${uuid}`}>
        <Box
          bg="white"
          border={`solid 0.15rem ${theme.colors.black}`}
          transition="all"
          cursor="pointer"
          _hover={{ bg: `${theme.colors.red}` }}
        >
          <Image h="5rem" src={displayIcon} alt={displayName} />
        </Box>
      </Link>
      <Text as="p" align="center" color="black">
        {displayName}
      </Text>
    </Box>
  );
};

export default Card;
