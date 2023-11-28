import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ title, category, image, liveLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link to={`${liveLink}`} target="_blank" aria-label="Single Project">
        <div className="mx-auto rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <img
              src={image}
              className="rounded-t-xl border-none  w-full h-[300px] object-cover"
              alt="Single Project"
            />
          </div>
          <div className="flex-col justify-between items-center p-4">
            <p className="font-semibold text-md md:text-lg text-ternary-dark dark:text-ternary-light ">
              {title}
            </p>
            <span className="text-sm break-words text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
