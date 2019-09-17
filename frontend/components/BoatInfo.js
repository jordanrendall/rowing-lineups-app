import React from 'react';
import Names from './Names';
import Boats from './Boats';
import styled from 'styled-components';

const BoatInfoStyles = styled.span`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;
const BoatInfo = () => {
  return (
    <BoatInfoStyles>
      <Names />
      <Boats />
    </BoatInfoStyles>
  );
};

export default BoatInfo;
