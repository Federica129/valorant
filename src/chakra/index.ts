import { extendTheme } from "@chakra-ui/react";
import { colors } from "./theme/colors";
import { breakpoints } from "./theme/breakpoints";
import HeadingTheme from "./components/Heading";
import { Container } from "./components/container";
import { inputTheme } from "./components/input";

export const theme = extendTheme({
  colors,
  breakpoints,
  components: {
    Heading: HeadingTheme,
    Container,
    Input: inputTheme,
  },
  styles: {
    global: {
      ".object-fit-cover": {
        objectFit: "cover",
      },

      p: {
        fontSize: { md: "1.2rem" },
      },

      body: {
        fontFamily: `'Ubuntu', sans-serif`,
      },
    },
  },
});
