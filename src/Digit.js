import React from "react";
import { AnimatePresence } from "framer-motion";
import { NumberWrap, Number } from "./styled";

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

function Digit({ value = 0, visible = true }) {
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
}

export default Digit;
