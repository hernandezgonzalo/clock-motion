import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Wrap = styled.div`
  align-items: center;
  bottom: 10px;
  display: flex;
  height: 40px;
  justify-content: center;
  position: absolute;
  width: 100vw;
`;

const Icon = styled(FontAwesomeIcon)`
  bottom: 10px;
  margin: auto;
  left: 50%;
  opacity: 0.5;
  transition: ease-in-out 100ms;

  &:hover {
    font-size: 40px;
    opacity: 1;
  }
`;

export const GithubIcon = () => (
  <Wrap>
    <a href="https://github.com/hernandezgonzalo/motion-clock">
      <Icon icon={faGithub} color="#fff" size="2x" />
    </a>
  </Wrap>
);
