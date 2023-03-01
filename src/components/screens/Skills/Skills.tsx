import { motion } from "framer-motion";

import { Skill as SkillType } from "../../../types/typings";

import Skill from "./Skill/Skill";
import styles from "./Skills.module.scss";
import Title from "@/components/ui/Title/Title";
import SubTitle from "@/components/ui/SubTitle/SubTitle";

interface ISkills {
  skills: SkillType[];
}

const Skills = ({ skills }: ISkills) => (
  <motion.div
    className={styles.skills}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    <Title text="SKILLS" />
    <SubTitle>Hover over a skill for current proficiency</SubTitle>
    <div className="grid grid-cols-4 gap-5">
      {skills?.slice(0, skills.length / 2).map((skill) => (
        <Skill key={skill?._id} skill={skill} />
      ))}
      {skills?.slice(skills.length / 2, skills.length).map((skill) => (
        <Skill key={skill?._id} skill={skill} directionLeft />
      ))}
    </div>
  </motion.div>
);

export default Skills;
