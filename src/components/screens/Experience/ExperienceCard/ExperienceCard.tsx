import { motion } from "framer-motion";
import React, { FC } from "react";

const ExperienceCard: FC = () => (
  <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden ">
    {" "}
    <motion.img
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
      alt="google"
      className="w-32 h-32 xl:w-[125px] xl:h-[125px] rounded-full object-cover object-center"
    />
    <div className="px-0 md:px-10">
      <h4 className="text-4xl font-light">CEO</h4>
      <p className="font-bold text-2xl mt-1">PARFAM</p>
      <div className="flex space-x-2 my-2">
        <img
          className="h-10 w-10 rounded-full"
          src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
          alt="js"
        />{" "}
        <img
          className="h-10 w-10 rounded-full"
          src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
          alt="js"
        />{" "}
        <img
          className="h-10 w-10 rounded-full"
          src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
          alt="js"
        />{" "}
        <img
          className="h-10 w-10 rounded-full"
          src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
          alt="js"
        />{" "}
        <img
          className="h-10 w-10 rounded-full"
          src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
          alt="js"
        />
      </div>
      <p className="uppercase py-5 text-gray-300">Started work with</p>
      <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>Lorem ipsum dolor sit</li>
        <li>Lorem ipsum dolor sit</li>
        <li>Lorem ipsum dolor sit</li>
        <li>Lorem ipsum dolor sit</li>
        <li>Lorem ipsum dolor sit</li>
      </ul>
    </div>
  </article>
);

export default ExperienceCard;
