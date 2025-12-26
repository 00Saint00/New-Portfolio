"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

type pageTransitionProps = {
  children: React.ReactNode;
};

const PageTransition = ({ children }: pageTransitionProps) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.5, ease: "easeInOut" },
          }}
          exit={{ opacity: 0 }}
          className="h-screen w-screen fixed bg-bg-primary top-0 pointer-events-none inset-0"
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
