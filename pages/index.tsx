import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const LoginPage = (props) => {
  const { user } = props;
  console.log(user);
  if (user) useRouter().push("/home");
  return <Box>lol</Box>;
};

export default LoginPage;
