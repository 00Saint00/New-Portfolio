"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
// import { SelectGroup, SelectLabel } from "@radix-ui/react-select";

const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    value: "+234 9086204095",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "paulotomewo@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Lagos, Nigeria",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
      }}
      className="py-6 px-3"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}

          <div className="xl:flex-[2] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-primary-default">
                Lets Work together
              </h3>
              <p className="text-white/60">Say Hi</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lasname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>

                    <SelectItem value="web"> Web Development</SelectItem>
                    <SelectItem value="ui"> Ui/Ux Design</SelectItem>
                    <SelectItem value="logo"> Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Type Your Message"
                className="min-h-[150px]"
              />

              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex xl:flex-1 items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((items, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-primary-default rounded-md flex items-center justify-center text-[28px]">
                      {items.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{items.title}</p>
                      <p className="text-xl">{items.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
