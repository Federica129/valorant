const Navbar = () => {
  const btns = ["home", " news", "about"];

  return (
    <div className="bg-black h-20 text-white flex px-6 justify-between items-center">
      <div
        className="cursor-pointer"
        onClick={(): any => window.location.reload}
      >
        <svg
          id="logo-72"
          width="52"
          height="44"
          viewBox="0 0 53 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z"
            fill="#ffffff"
            stop-color="#ffffff"
          ></path>{" "}
        </svg>
      </div>
      <div>
        <ul className="flex gap-4">
          {btns.map((string) => (
            <li
              className="cursor-pointer uppercase font-bold"
              onClick={() => alert(`This button has no function`)}
            >
              {string}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
