import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const Container = styled.div`
  margin: 50px 0 10px 0;
  font-size: 25px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer: React.FC = () => {

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(currentTime + 1);
    }, 1000)
  }, [currentTime]);

  return (
    <Container>
      <div>Timer</div>
      <div>{currentTime}</div>
    </Container>
  );
};
export default Timer;
