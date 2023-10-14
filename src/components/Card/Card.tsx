import { Character } from "../../../types/characterVal";
import { Box, Text } from "@chakra-ui/react";
import { theme } from "../../chakra";
import Link from "next/link";
import Image from "next/image";
import { FormBlockProps } from "../Block/FormBlock/FormBlock.props";

type CardProps = {
  data: Character | FormBlockProps;
};

const Card: React.FC<CardProps> = ({ data }) => {
  const { displayIcon, displayName, uuid = "1" } = data || {};

  return (
    <Box>
      <Link href={`${uuid}`}>
        <Box
          bg="white"
          border={`solid 0.15rem ${theme.colors.black}`}
          transition="all"
          cursor="pointer"
          _hover={{ bg: `${theme.colors.red}` }}
          w="5rem"
          h="5rem"
          position="relative"
          flex="0 0 auto"
        >
          <Image
            src={displayIcon}
            alt={displayName}
            fill
            sizes="5rem"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Link>
      <Text as="p" align="center" color="black">
        {displayName}
      </Text>
    </Box>
  );
};

export default Card;
