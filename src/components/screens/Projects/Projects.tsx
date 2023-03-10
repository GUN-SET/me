import { motion } from "framer-motion";
import React from "react";

import { urlFor } from "../../../../sanity";

import Title from "../../ui/Title/Title";
import { Project } from "@/types/typings";

interface IProjects {
  projects: Project[];
}

const Projects = ({ projects }: IProjects) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <Title text="PROJECTS" />
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, index) => {
          return (
            <div
              key={project?.linkToBuild}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1.2, y: 0 }}
                viewport={{ once: false }}
                src={urlFor(project?.image).url()}
                alt="project"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {index + 1} of {projects?.length}:
                  </span>{" "}
                  {project?.title}
                </h4>
                <div className="flex flex-center space-x-2 justify-center">
                  {" "}
                  {project?.technologies.map((technology) => (
                    <img
                      className="h-10 w-10"
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt=""
                    />
                  ))}
                </div>

                <p className="text-lg text-center md:text-left">
                  {project?.summary}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[25%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
