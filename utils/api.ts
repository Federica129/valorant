import axios from "axios";

// const GET = async (input: string, uuid?: string | number) => {
//   const res = await fetch(`https://valorant-api.com/v1/${input}/${uuid}`);
//   const data = res.json();

//   return data;
// };

const GET = async (input: string, uuid?: string | number) => {
  const res = await axios.get(
    `https://valorant-api.com/v1/${input}/` + `${uuid ?? ""}`
  );
  const data = await res;
  return data.data;
};

export { GET };
