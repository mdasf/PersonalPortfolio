import { useState } from "react";
import ProjectSingle from "./ProjectSingle";
import { projectsData } from "../../assets/data/projects";

const ProjectsGrid = () => {
  // const { projects } = useContext(ProjectsContext);
  const [projects] = useState(projectsData);

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="uppercase font-bold text-blue-700 text-3xl tracking-widest ">
          Projects
        </p>
        <h3
          className="text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-md
                        mb-8
                        "
        >
          {/* Personal Projects */}
        </h3>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
          {projects.map((project) => {
            return (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                liveLink={project.liveLink}
                key={project.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
