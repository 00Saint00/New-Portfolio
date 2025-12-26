"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import CountUp from "react-countup";

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [showStairs, setShowStairs] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Wait for all resources to load
    const checkResources = () => {
      // Check if page is ready
      if (document.readyState === "complete") {
        // Wait for images to load
        const images = document.querySelectorAll("img");
        let loadedImages = 0;
        const totalImages = images.length;

        if (totalImages === 0) {
          // No images, start animation immediately
          startAnimation();
        } else {
          // Wait for all images
          images.forEach((img) => {
            if ((img as HTMLImageElement).complete) {
              loadedImages++;
            } else {
              img.addEventListener("load", () => {
                loadedImages++;
                if (loadedImages === totalImages) {
                  startAnimation();
                }
              });
              img.addEventListener("error", () => {
                loadedImages++;
                if (loadedImages === totalImages) {
                  startAnimation();
                }
              });
            }
          });

          // If all images are already loaded
          if (loadedImages === totalImages) {
            startAnimation();
          }
        }
      } else {
        window.addEventListener("load", checkResources);
      }
    };

    const startAnimation = () => {
      // Start countup from 0%
      setShouldAnimate(true);

      // After countup completes (2.5s), show "Welcome!" and hide loading content
      setTimeout(() => {
        setShowWelcome(true);

        // After showing "Welcome!" for a moment, start stairs animation
        setTimeout(() => {
          setIsLoading(false);
          setShowStairs(true);

          // Hide stairs after they finish animating (6 stairs * 0.1s delay + 0.5s duration = ~1.1s)
          setTimeout(() => {
            setShowStairs(false);
          }, 1200);
        }, 1000); // Show "Welcome!" for 1 second
      }, 2500); // Countup duration
    };

    // Small delay before checking resources
    const initTimer = setTimeout(() => {
      checkResources();
    }, 100);

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("load", checkResources);
    };
  }, []);

  // Manual control: Call window.setLoadingComplete() from anywhere to finish loading
  useEffect(() => {
    (window as any).setLoadingComplete = () => {
      setShouldAnimate(true);
      setTimeout(() => setIsLoading(false), 500);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading-screen"
            className="fixed inset-0 z-[9999] bg-bg-primary flex items-center justify-center"
          >
            {/* Content */}
            <div className="flex flex-col items-center gap-6 relative z-10">
              <AnimatePresence mode="wait">
                {!showWelcome ? (
                  <motion.div
                    key="loading-content"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-6"
                  >
                    {/* Logo/Brand Name */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <h1 className="text-5xl xl:text-6xl font-semibold text-white">
                        Paul<span className="text-primary-default">.</span>
                      </h1>
                    </motion.div>

                    {/* Loading Spinner */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="relative w-16 h-16"
                    >
                      <motion.div className="absolute inset-0 border-4 border-white/10 rounded-full" />
                      <motion.div
                        className="absolute inset-0 border-4 border-transparent border-t-primary-default rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </motion.div>

                    {/* Percentage CountUp */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="text-4xl xl:text-5xl font-bold text-primary-default min-w-[120px] text-center">
                        {shouldAnimate ? (
                          <CountUp
                            key="countup" // Force remount to ensure it starts from 0
                            start={0}
                            end={100}
                            duration={2.5}
                            decimals={0}
                            suffix="%"
                          />
                        ) : (
                          <span>0%</span>
                        )}
                      </div>
                      <p className="text-white/60 text-sm">Loading...</p>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="welcome"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <h1 className="text-5xl xl:text-6xl font-semibold text-white">
                      Welcome<span className="text-primary-default">!</span>
                    </h1>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stairs Animation on Exit */}
      <AnimatePresence>
        {showStairs && (
          <div
            key="stairs"
            className="fixed inset-0 z-[10000] pointer-events-none"
          >
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={`stair-${index}`}
                initial={{ top: "0%" }}
                animate={{
                  top: "100%",
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: index * 0.1, // Stagger - first stair goes first
                  },
                }}
                exit={{ opacity: 0 }}
                className="h-screen w-screen bg-bg-primary fixed top-0 left-0 right-0"
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LoadingScreen;
