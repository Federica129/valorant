import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const LoginPage = (props) => {
  const { user } = props;
  const router = useRouter();
  console.log(user);

  if (user) router.push("/home");
  return (
    <Box>
      <Text as="h1">Valorant</Text>
      <Box>
        <Text>Login:</Text>
        // bottone login google
      </Box>
    </Box>
  );
};

export default LoginPage;
