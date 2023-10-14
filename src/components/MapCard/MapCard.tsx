import { Box, BoxProps, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MapCardProps } from "./MapCard.props";

export const MapCard = (props: MapCardProps) => {
  const { splash, displayName, variant = "inView" } = props;

  const sizeCard: Record<string, BoxProps> = {
    inView: { opacity: 1, transform: `scale(1)` },
    notInView: { opacity: 0.75, transform: `scale(0.95)` },
  };

  return (
    <Box
      position="relative"
      h="20rem"
      borderRadius=".4rem"
      overflow="hidden"
      transition="0.7s all"
      {...sizeCard[variant]}
    >
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
      <Image
        className="object-fit-cover"
        src={splash}
        alt={displayName}
        fill
        sizes="100%"
        priority
      />
    </Box>
  );
};
