import React from 'react';
import styled from 'styled-components';

const LineupStyles = styled.article`
  display: flex;
  flex-direction: column;
  /* grid-template-columns: 1fr 1fr 1fr; */
  padding: 20px;
`;

const Lineup = ({ children }) => {
  return <LineupStyles>{children}</LineupStyles>;
};

export default Lineup;
