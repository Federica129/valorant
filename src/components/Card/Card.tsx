import { Link } from "react-router-dom";
import { Character } from "../../../types/characterVal";

type CardProps = {
  data: Character;
};

const Card: React.FC<CardProps> = ({ data }) => {
  const { displayIcon, displayName, uuid } = data;

  return (
    <div>
      <Link to={`${uuid}`}>
        <div className="bg-white border-solid border-gray border-2 w-max cursor-pointer hover:bg-red transition-all">
          <img className="w-20" src={displayIcon} />
        </div>
      </Link>
      <p className="text-center">{displayName}</p>
    </div>
  );
};

export default Card;
