import React from 'react';
import styled from 'styled-components';

const LineupTitleStyles = styled.article`
  display: grid;
  grid-column: 1/-1;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
    text-decoration: underline;
  }
  text-align: center;
`;

const LineupTitle = () => {
  return (
    <LineupTitleStyles>
      <h1>Rowing lineups</h1>
      <h2>date</h2>
    </LineupTitleStyles>
  );
};

export default LineupTitle;
