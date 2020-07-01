import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getTime } from "lib/time";
import { GithubIcon } from "Components/GithubIcon";
import { Separator } from "Components/Separator";
import Digit from "Components/Digit";

const Box = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

function App() {
  const [visible, setVisible] = useState({});
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setTimeout(() => {
      const timeUpdated = getTime();
      setVisible({
        hoursDecimals: true,
        hoursUnits: true,
        minutesDecimals: true,
        minutesUnits: true,
        secondsDecimals: true,
        secondsUnits: true
      });

      setTimeout(() => {
        const {
          hoursDecimals,
          hoursUnits,
          minutesDecimals,
          minutesUnits,
          secondsDecimals,
          secondsUnits
        } = timeUpdated;

        setVisible({
          hoursDecimals: time.hoursDecimals === hoursDecimals,
          hoursUnits: time.hoursUnits === hoursUnits,
          minutesDecimals: time.minutesDecimals === minutesDecimals,
          minutesUnits: time.minutesUnits === minutesUnits,
          secondsDecimals: time.secondsDecimals === secondsDecimals,
          secondsUnits: time.secondsUnits === secondsUnits
        });

        setTime({
          hoursDecimals,
          hoursUnits,
          minutesDecimals,
          minutesUnits,
          secondsDecimals,
          secondsUnits
        });
      }, 500);
    }, 500);
  }, [time]);

  return (
    <>
      <Box>
        <Digit value={time.hoursDecimals} visible={visible.hoursDecimals} />
        <Digit value={time.hoursUnits} visible={visible.hoursUnits} />
        <Separator>:</Separator>
        <Digit value={time.minutesDecimals} visible={visible.minutesDecimals} />
        <Digit value={time.minutesUnits} visible={visible.minutesUnits} />
        <Separator>:</Separator>
        <Digit value={time.secondsDecimals} visible={visible.secondsDecimals} />
        <Digit value={time.secondsUnits} visible={visible.secondsUnits} />
      </Box>
      <GithubIcon />
    </>
  );
}

export default App;
