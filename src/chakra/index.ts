import { extendTheme } from "@chakra-ui/react";
import { colors } from "./theme/colors";
import { breakpoints } from "./theme/breakpoints";
import HeadingTheme from "./components/Heading";
// import TextTheme from "./components/Text";

export const theme = extendTheme({
  colors,
  breakpoints,
  components: { Heading: HeadingTheme },
  styles: {
    global: {
      p: {
        fontSize: { xs: "0.9rem", md: "1.1rem" },
      },

      body: {
        fontFamily: `'Ubuntu', sans-serif`,
      },
    },
  },
});
