import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaHackerrank } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: "https://github.com/mdasf",
  },
  {
    id: 2,
    icon: <FaHackerrank />,
    url: "https://www.hackerearth.com/@asifmohd1146",
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/mohd-asif-b0b447293/",
  },
];

const AppFooter = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-10  pb-8  border-t-2 mt-10 border-primary-light dark:border-secondary-dark">
        <div className=" flex flex-col justify-center items-center mb-12 sm:mb-28">
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 border-t-2 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-2 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
        <div className="text-sm text-center text-ternary-dark dark:text-ternary-light">
          <a
            href="https://github.com/mdasf"
            target="__blank"
            className="hover:underline  dark:hover:text-indigo-300 duration-500"
          >
            &copy; {new Date().getFullYear()} Portfolio by{" "}
            <span className="font-bold text-pink-600">MOHD ASIF</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
