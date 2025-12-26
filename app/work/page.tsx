"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  BsArrowUpRight,
  BsGithub,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Wightmore School of Dance",
    description:
      "A content-managed site for the Wightmore School of Dance, presenting class offerings, schedules, and the school’s welcoming atmosphere for dancers of all ages.",
    stack: [{ name: "Umbraco" }],
    image: "/assets/work/wightmore.png",
    live: "https://www.wightmoreschoolofdance.co.uk/",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Mojito",
    description:
      "This website was built to practice my skills and learn about gsap animations",
    stack: [{ name: "Html" }, { name: "Tailwindcss" }, { name: "React" }],
    image: "/assets/work/mojito.jpg",
    live: "https://mojito-bice.vercel.app/",
    github: "https://github.com/00Saint00/mojito",
  },
  {
    num: "03",
    category: "FullStack",
    title: "Shopco",
    description:
      "A personal Project built with react, tailwindcss and shadcn/ui, Appwrite was used for the authentication and database.[Still in development]",
    stack: [
      { name: "React" },
      { name: "Tailwindcss" },
      { name: "Shadcn/ui" },
      { name: "Appwrite" },
    ],
    image: "/assets/work/shop-co.svg",
    live: "https://shopco-new.vercel.app/",
    github: "https://github.com/00Saint00/Shopco-New",
  },
  {
    num: "04",
    category: "Frontend",
    title: "APBC",
    "A professional website built for the Association of Pet Behaviour Counsellors (APBC), a UK‑based organisation dedicated to promoting high standards of animal behaviour practice and welfare. The site showcases APBC’s services, membership information, events, and resources for animal behaviour professionals and pet owners.",
    stack: [
      { name: "Umbraco" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/apbc-co.png",
    live: "https://www.apbc.org.uk/",
    github: "",
  },
  {
    num: "05",
    category: "Frontend",
    title: "IRC",
    description:
      "An Umbraco-powered website for the Independent Retailers Confederation, designed to communicate their mission, member organisations, and industry advocacy through a flexible CMS.",
    stack: [
      { name: "Umbraco" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/irc.jpg",
    live: "https://www.independentretailersconfederation.org/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      {" "}
      <div className="container mx-auto px-2 md:px-0">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {/* Slider */}
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white">
                {project.category} Project
              </h2>

              {/* project description */}
              <p> {project.description} </p>

              {/* project stack */}
              <ul className="flex gap-4">
                {project.stack.map((tech, index) => (
                  <li key={index} className="text-xl text-primary-default ">
                    {tech.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border border-white/20 "></div>

              {/* buttons */}
              <div className="flex gap-[30px] items-center">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-primary-default " />
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-primary-default" />
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <p>GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleChange}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[300px] sm:h-[400px] md:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="flex gap-2 absolute right-0 bottom-0  xl:bottom-0 z-10 w-full justify-between xl:w-max xl:justify-none">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                // className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-white/10 transition-colors"
                className="bg-primary-default hover:bg-primary-default text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                aria-label="Previous slide"
              >
                <BsChevronLeft className="" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                // className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-white/10 transition-colors"
                className="bg-primary-default hover:bg-primary-default text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                aria-label="Next slide"
              >
                <BsChevronRight className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
