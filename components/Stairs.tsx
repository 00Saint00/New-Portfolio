import React from "react";
import { motion } from "motion/react";

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-screen w-screen bg-white relative"
        ></motion.div>
      ))} */}

      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          // Using inline initial/animate/exit instead of variants
          initial={{ top: "0%" }}
          animate={{
            top: "100%",
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              delay: index * 0.1, // stagger enter
            },
          }}
          exit={{
            top: ["100%", "0%"],
            transition: {
              duration: 0.3,
              ease: "easeOut",
              delay: reverseIndex(index) * 0.1, // stagger exit
            },
          }}
          className="h-screen w-screen bg-white relative"
        ></motion.div>
      ))}
    </>
  );
};

export default Stairs;
