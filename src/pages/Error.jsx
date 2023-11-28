import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="grid place-items-center dark:bg-[#232323] w-full h-screen">
      <h1 className=" text-lg max-w-[300px] text-center text-black dark:text-white">
        Error!! Goto{" "}
        <Link to="/" className="text-pink-600 underline underline-offset-4">
          Home Page
        </Link>
      </h1>
    </div>
  );
}

export default Error;
