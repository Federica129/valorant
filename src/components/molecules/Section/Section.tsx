import { Box, BoxProps, Container, Heading } from "@chakra-ui/react";

import { ReactNode, useMemo } from "react";

export const Section = ({
  children,
  title,
  colorScheme = "light",
  containerProps,
}: {
  children: ReactNode | ReactNode[];
  title: string;
  colorScheme?: "light" | "dark" | "yellow";
  containerProps?: BoxProps;
}) => {
  const getColor = useMemo(() => {
    if (colorScheme === "light") return { bg: "white", color: "blue" };
    if (colorScheme === "dark") return { bg: "red", color: "white" };
    if (colorScheme === "yellow") return { bg: "yellow", color: "blue" };
  }, [colorScheme]);
  return (
    <Box w="full" {...getColor} pb={{ base: "40px", md: "60px" }}>
      <Box
        textAlign="end"
        py={{ base: "40px", md: "60px" }}
        px={{ base: "40px", md: "40px" }}
      >
        <Heading variant="h1" as="h1" borderBottom="solid 0.15rem">
          {title}
        </Heading>
      </Box>
      <Container {...containerProps}>{children}</Container>
    </Box>
  );
};
