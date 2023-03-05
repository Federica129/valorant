import axios from "axios";

const GET = async (uuid) => {
  const res = await axios.get("https://valorant-api.com/v1/agents", {
    params: { uuid: uuid },
  });

  return res;
};

export { GET };
