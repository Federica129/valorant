const Navbar = () => {
  const btns = ["home", " news", "about"];

  return (
    <div className="bg-black h-20 text-white flex px-6 justify-between items-center">
      <div>
        <h1>Val</h1>
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
