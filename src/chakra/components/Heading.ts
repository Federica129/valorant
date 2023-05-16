import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const HeadingTheme = defineStyleConfig({
  baseStyle: defineStyle({
    textTransform: "uppercase",
  }),
  variants: {
    h1: { fontSize: "3rem" },
    h2: { fontSize: "2.5rem" },
    h3: { fontSize: "1.7rem" },
    h4: { fontSize: "1.2rem" },
  },
});

export default HeadingTheme;
