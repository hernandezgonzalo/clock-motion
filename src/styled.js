import styled from "styled-components";
import { motion } from "framer-motion";

export const Box = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const Separator = styled.div`
  color: rgba(255, 255, 255, 0.2);
  font-size: 9vw;
`;

export const NumberWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 10vw;
`;

export const Number = styled(motion.div)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14vw;
`;
