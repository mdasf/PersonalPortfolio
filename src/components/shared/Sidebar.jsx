import { Link } from "react-router-dom";
function Sidebar({ showMenu, toggleMenu }) {
  return (
    <>
      <div
        className={`absolute top-20 right-0  w-full ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } h-[100%] bg-blue-50 z-10  py-10  transition-all ease-in-out duration-300`}
      >
        <ul
          onClick={toggleMenu}
          className="flex flex-col mx-auto md:flex-row gap-2 lg:gap-8 items-center"
        >
          <Link
            to="/projects"
            className=" text-primary-dark  hover:underline hover:underline-offset-4 transition-all duration-100  hover:text-pink-600 dark:hover:text-pink-600 "
            aria-label="Projects"
          >
            <li className="text-sm  font-semibold uppercase tracking-wider  cursor-pointer hover:bg-[#fff] px-4 py-2">
              Projects
            </li>
          </Link>

          <Link
            to="/about"
            className=" text-primary-dark  hover:underline hover:underline-offset-4 transition-all duration-100  hover:text-pink-600 dark:hover:text-pink-600 "
            aria-label="Projects"
          >
            <li className="text-sm font-semibold uppercase tracking-wider  cursor-pointer hover:bg-[#fff] px-4 py-2">
              About Me
            </li>
          </Link>

          <Link
            to="/contact"
            className=" text-primary-dark  hover:underline hover:underline-offset-4 transition-all duration-100  hover:text-pink-600 dark:hover:text-pink-600 "
            aria-label="Projects"
          >
            <li className="text-sm font-semibold uppercase tracking-wider  cursor-pointer hover:bg-[#fff] px-4 py-2 ">
              Contacts
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
