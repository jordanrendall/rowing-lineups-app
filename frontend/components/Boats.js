import React from 'react';
import styled from 'styled-components';
import Boat from '../components/Boat';
const BoatsStyles = styled.article`
  display: flex;
  justify-content: space-around;
`;

const Boats = () => {
  return (
    <BoatsStyles>
      <Boat name='Eight' seats={8} cox={'yes'} />
      <Boat name='Four/Quad' seats={4} cox={'maybe'} />
      <Boat name='Pair/Double' seats={2} cox={'no'} />
      <Boat name='Single' seats={1} cox={'no'} />
    </BoatsStyles>
  );
};

export default Boats;
