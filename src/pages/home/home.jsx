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
    <div className="flex justify-center">
      <div className="w-max grid grid-cols-6 gap-2 ">
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
