import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MapCardProps } from "./MapCard.props";

export const MapCard = (props: MapCardProps) => {
  const { splash, displayName } = props;

  return (
    <Box position="relative" h="20rem" borderRadius=".4rem" overflow="hidden">
      <Box
        display="flex"
        alignItems="end"
        position="relative"
        h="full"
        zIndex={1}
        bgGradient="linear(14deg, rgba(2,0,36,0.8925945378151261) 4%, rgba(13,13,112,0.4051995798319328) 30%, rgba(255,255,255,0) 56%)"
      >
        <Text
          color="white"
          ml="1rem"
          mb="1rem"
          fontSize="1.5rem"
          _firstLetter={{ color: "red" }}
          textTransform="uppercase"
        >
          {displayName}
        </Text>
      </Box>
      <Image className="object-fit-cover" src={splash} alt={displayName} fill />
    </Box>
  );
};
