const Card = ({ data }) => {
  const { displayIcon, displayName } = data;

  return (
    <div>
      <div className="bg-white border-solid border-gray border-2 w-max cursor-pointer hover:bg-red">
        <img className="w-20" src={displayIcon} />
      </div>
      <p className="text-center">{displayName}</p>
    </div>
  );
};

export default Card;
