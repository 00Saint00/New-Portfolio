"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GoDownload } from "react-icons/go";
// import { motion } from "motion/react";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/stats";
import TypingAnimation from "@/components/TypingAnimation";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-24 xl:pt-8 px-3">
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* <span className="text-xl">Frontend Developer</span> */}
            <h1 className="h1 mb-6">
              {" "}
              Hi I'm <br /> {/* <motion.span>Paul O </motion.span> */}
              <TypingAnimation
                text={["Paul Otomewo", "A Frontend Developer"]}
                className="text-primary-default block"
                speed={100}
                delay={2000}
              />
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and i am
              proficient in a couple of progamming languages and technologies{" "}
            </p>

            {/* socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/Otomewo Paul.pdf"
                download="Otomewo Paul CV.pdf"
                className="inline-block"
              >
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <GoDownload className="text-xl ml-2" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-primary-default rounded-full flex justify-center items-center text-primary-default text-base hover:bg-primary-hover hover:text-white transition"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
