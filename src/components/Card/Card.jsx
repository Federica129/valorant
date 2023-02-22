const Card = ({ data }) => {
  const { displayIcon, displayName } = data;

  return (
    <div>
      <div className="border-solid border-black border-2 w-max">
        <img className="w-24" src={displayIcon} />
      </div>
      <p className="text-center">{displayName}</p>
    </div>
  );
};

export default Card;
