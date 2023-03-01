import Head from "next/head";
import Link from "next/link";
import Projects from "@/components/screens/Projects/Projects";
import Skills from "@/components/screens/Skills/Skills";
import React from "react";
import About from "@/components/screens/About/About";
import Hero from "@/components/screens/Hero/Hero";
import Header from "@/components/layout/Header/Header";
import { PageInfo, Project, Skill, Social } from "@/types/typings";
import { GetStaticProps } from "next";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchPageInfo } from "@/utils/fetchPageInfo";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({ pageInfo, socials, projects, skills }: Props) {
  return (
    <div className="bg-bg-rgb text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scroll-smooth">
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center ">
            <img
              src="https://i.imgur.com/e2yvD6A.png"
              alt="go to top image"
              className="h-10 w-10 rounded-full grayscale hover:grayscale-0 cursor-pointer transition-all duration-300"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      socials,
      projects,
      skills,
    },
    revalidate: 10,
  };
};
