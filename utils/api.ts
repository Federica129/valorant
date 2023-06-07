const GET = async (uuid?: string | number) => {
  const res = await fetch(`https://valorant-api.com/v1/agents/${uuid}`);
  const data = res.json();

  return data;
};

export { GET };
