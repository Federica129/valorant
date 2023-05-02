import { Box, HStack, List, ListItem } from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";
import { useNavigate } from "react-router-dom";

const Navbar = (): JSX.Element => {
  const btns = ["home", " news", "about"];
  const navigate = useNavigate();

  return (
    <HStack
      color="white"
      px="1.5rem"
      justify="space-between"
      alignItems="center"
      bg="black"
      h="5rem"
    >
      <Box cursor="pointer" onClick={(): any => navigate("/")}>
        <Logo />
      </Box>
      <List display="flex" gap="1rem">
        {btns.map((string, index) => (
          <ListItem
            key={index}
            cursor="pointer"
            fontWeight="bold"
            textTransform="uppercase"
            onClick={() => alert(`This button has no function`)}
          >
            {string}
          </ListItem>
        ))}
      </List>
    </HStack>
  );
};

export default Navbar;
