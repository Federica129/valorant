import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const InfoChamp = (): JSX.Element => {
  const location = useLocation();
  const [character, setCharacter] = useState<any>([]);

  useEffect(() => {
    const PROVA = async () => {
      const res = await axios.get(
        `https://valorant-api.com/v1/agents${location.pathname}`
      );

      return res;
    };

    PROVA().then((res) => setCharacter(res.data.data));
  }, []);

  return (
    <div className="bg-blue p-16">
      <div className="bg-white flex p-5">
        <div>
          <div className="flex justify-center">
            <div>
              <h1>{character.displayName}</h1> <p>{character.description}</p>
            </div>
            <img className="h-1/4 w-1/2" src={character.fullPortrait} />
          </div>

          <h2>Abilities</h2>
          <ul>
            {character.abilities?.map((ability) => (
              <li className="flex">
                <img className="bg-blue w-20" src={ability.displayIcon} />
                <h3>{ability.displayName} -</h3> <p>{ability.description}</p>
              </li>
            ))}
          </ul>
        </div>{" "}
      </div>
    </div>
  );
};

export default InfoChamp;
