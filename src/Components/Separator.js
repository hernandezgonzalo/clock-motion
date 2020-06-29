import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Component = styled(motion.div)`
  color: rgba(255, 255, 255, 0.2);
  font-size: 9vw;
`;

const variants = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", ease: "easeInOut" }
  }
};

export const Separator = ({ children }) => {
  return (
    <Component initial="hidden" animate="visible" variants={variants}>
      {children}
    </Component>
  );
};
