"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGit,
  FaWordpress,
  FaUmbraco,
} from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

interface AboutInfo {
  fieldName: string;
  fieldValue: string;
}

interface AboutData {
  title: string;
  description: string;
  image: string;
  info: AboutInfo[];
}

const aboutData = {
  title: "About Me",
  description:
    "My passion lies in creating user-friendly interfaces that are aesthetically pleasing and easy to use. I have experience working with HTML, CSS, and JavaScript, and I am familiar with frontend frameworks like React.",
  image: "/assets/photo.png",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Paul Otomewo",
    },
    {
      fieldName: "Email",
      fieldValue: "paulotomewo@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "+234 9086204095",
    },
    {
      fieldName: "Location",
      fieldValue: "Lagos, Nigeria",
    },

    {
      fieldName: "GitHub",
      fieldValue: "https://github.com/00Saint00",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "https://www.linkedin.com/in/paulotomewo",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.png",
  title: "My experience",
  desctipion:
    "i have been working as a frontend developer for the past 2 years",

  items: [
    {
      company: "Senior Internet Ltd",
      position: "Frontend Developer",
      duration: "2023 - present",
    },
    {
      company: "Bulb Africa",
      position: "Frontend Developer Intern",
      duration: "2022 - 2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "i have been working as a frontend developer for the past 2 years",
  skillslist: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaWordpress />,
      name: "Wordpress",
    },
    {
      icon: <FaUmbraco />,
      name: "Umbraco",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[280px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[80vh] w-full px-3">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                  {experience.desctipion}
                </p>

                <div className="h-[400px] px-3 lg:px-0">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-primary-default">
                            {item.duration}
                          </span>
                          <h3 className="text-[22px] leading-[40px] max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {" "}
                            {item.position}{" "}
                          </h3>

                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-primary-default"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[36px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                    {" "}
                    {skills.description}{" "}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills.skillslist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-primary-default transition-all duration-300 ">
                                {" "}
                                {skill.icon}{" "}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize"> {skill.name} </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-6 xl:gap-[30px]">
                {/* Title */}
                <h3 className="text-4xl font-bold">{aboutData.title}</h3>

                {/* Description */}
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {aboutData.description}
                </p>

                {/* Info list */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 max-w-[620px] mx-auto xl:mx-0">
                  {aboutData.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-start gap-4 items-baseline"
                    >
                      <span className="text-white/60 font-medium">
                        {item.fieldName}
                      </span>
                      <span className="text-white text-base text-wrap break-all text-left">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
