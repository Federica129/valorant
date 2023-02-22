import { useState } from "react";
import { useQuery } from "react-query";
import Card from "../../components/Card/Card";
import axios from "axios";

const Home = () => {
  const [character, setCharacter] = useState([]);
  const { isLoading, error, data } = useQuery("repoData", () =>
    axios
      .get("https://valorant-api.com/v1/agents")
      .then((res) => setCharacter(res.data.data))
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-col justify-center gap-2 bg-red h-[calc(100vh-80px)] items-center">
      <div className="border-white border-b-2 border-solid w-4/5 text-right">
        <h1 className="text-white uppercase text-5xl font-bold">Agents</h1>
      </div>
      <div className="w-max grid grid-cols-7 gap-2 h-max bg-white p-2.5">
        {character
          .filter((character) => character.role != null)
          .map((character) => (
            <Card data={character} />
          ))}
      </div>
    </div>
  );
};

export default Home;
