"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function ScrollReveal({
  children,
  className,
  variants,
  threshold = 1,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={
        variants || {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.4 },
          },
        }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
