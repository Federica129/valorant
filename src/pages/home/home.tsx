import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { Character } from "../../../types/characterVal";
import axios from "axios";
import Card from "../../components/Card/Card";
import { State } from "../../App";

const Home = (): JSX.Element | string => {
  const [character, setCharacter] = useState<[]>([]);
  const [id, setUuid] = useState<string>("");

  const value = useContext<any>(State);

  console.log(value);

  const GET = async (uuid?: string) => {
    const res = await axios.get("https://valorant-api.com/v1/agents/");

    return setCharacter(res.data.data);
  };

  const { isLoading, error, data } = useQuery("uuid", GET);

  if (isLoading) return "Loading...";

  if (error as Record<string, unknown>)
    return "An error has occurred: " + toString(error.message);

  console.log(character);
  return (
    <div className="py-20 flex flex-col justify-center gap-2 bg-red h-max md:h-[calc(100vh-80px)] items-center">
      <div className="border-white border-b-2 border-solid w-4/5 text-right">
        <h1 className="text-white uppercase text-5xl font-bold">Agents</h1>
      </div>
      <div className="w-max grid grid-cols-3 md:grid-cols-7 gap-2 h-max bg-white p-2.5">
        {(character as Character[])
          .filter((character) => character.role != null)
          .map((character, index) => (
            <Card key={index} data={character} />
          ))}
      </div>
    </div>
  );
};

export default Home;
