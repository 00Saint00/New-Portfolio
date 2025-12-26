"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

type TypingAnimationProps = {
  text: string | string[];
  className?: string;
  speed?: number;
  showCursor?: boolean;
  delay?: number;
  onComplete?: () => void;
};

const TypingAnimation = ({
  text,
  className = "",
  speed = 100,
  showCursor = true,
  delay = 0,
  onComplete,
}: TypingAnimationProps) => {
  // STATE VARIABLES - What we're tracking:
  // displayedText: The text currently shown on screen (starts empty, grows letter by letter)
  // currentIndex: Which letter we're currently typing (0 = first letter, 1 = second, etc.)
  // isStarted: Whether we've waited for the delay and can start typing
  // currentTextIndex: Which text in the array we're currently typing (0 = first text, 1 = second, etc.)

  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // STEP 1: Convert text to array format
  // If user passes "Hello" → becomes ["Hello"]
  // If user passes ["Hello", "World"] → stays ["Hello", "World"]
  const texts = Array.isArray(text) ? text : [text];
  const currentText = texts[currentTextIndex]; // Get the text we're currently typing

  // STEP 2: Wait for the delay before starting
  // This useEffect runs once when component mounts
  // After 'delay' milliseconds, it sets isStarted to true
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true); // Now we can start typing!
    }, delay);

    return () => clearTimeout(startTimeout); // Cleanup if component unmounts
  }, [delay]);

  // STEP 3: The main typing logic
  // This useEffect runs every time currentIndex, currentTextIndex, or isStarted changes
  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentTextIndex < texts.length - 1) {
      const pauseTimeout = setTimeout(() => {
        setCurrentTextIndex((prev) => prev + 1);
        setCurrentIndex(0);
        setDisplayedText("");
      }, 1000);

      return () => clearTimeout(pauseTimeout);
    } else if (
      currentTextIndex === texts.length - 1 &&
      currentIndex === currentText.length
    ) {
      // LOOP: go back to first text
      const loopTimeout = setTimeout(() => {
        setCurrentTextIndex(0);
        setCurrentIndex(0);
        setDisplayedText("");
        onComplete?.();
      }, 1000);

      return () => clearTimeout(loopTimeout);
    }
  }, [
    currentIndex,
    currentText,
    speed,
    isStarted,
    currentTextIndex,
    texts.length,
    onComplete,
  ]);

  // STEP 4: Render what we've typed so far + blinking cursor
  return (
    <span className={className}>
      {displayedText}
      {showCursor && isStarted && (
        <motion.span
          animate={{ opacity: [1, 0] }} // Fade in and out
          transition={{
            duration: 2,
            repeat: Infinity, // Repeat forever
            repeatType: "reverse", // Fade out then fade in
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

export default TypingAnimation;
