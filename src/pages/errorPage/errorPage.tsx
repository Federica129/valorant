import { Link } from "react-router-dom";

const ErrorPage = (): JSX.Element => {
  return (
    <div className="bg-error bg-contain pt-10  px-10 md:px-20 bg-blue h-[calc(100vh-80px)]">
      <div className="flex flex-col justify-around border-l-2  text-white border-solid h-[calc(100vh-120px)]">
        <h2 className="text-3xl md:text-7xl	pt-20 font-bold text-white border-t-2 border-solid ">
          SORRY <br />
          PAGE NOT FOUND
        </h2>
        <div className="flex justify-end">
          <div className="flex justify-end w-3/4 border-b-2 border-solid py-16">
            <div className="flex justify-center border-2 p-2 border-solid md:w-1/2 max-w-xs">
              <Link
                to="/"
                className="flex justify-center bg-white hover:bg-red text-black hover:text-white px-2 h-10 md:h-14 grow transition-all font-bold"
              >
                <button>GO TO HOMEPAGE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
