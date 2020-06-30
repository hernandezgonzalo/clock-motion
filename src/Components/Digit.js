import React from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { motion } from "framer-motion";

const NumberWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 10vw;
`;

const Number = styled(motion.div)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14vw;
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
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { ease: "easeInOut" }
  }
};

const Digit = ({ value, visible }) => {
  return (
    <NumberWrap>
      <AnimatePresence>
        {visible && (
          <Number
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            {value}
          </Number>
        )}
      </AnimatePresence>
    </NumberWrap>
  );
};

Digit.defaultProps = {
  value: 0,
  visible: true
};

export default Digit;
