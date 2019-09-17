import React from 'react';
import styled from 'styled-components';
import BoatType from './BoatType';
const BoatsStyles = styled.article`
  display: flex;
  justify-content: space-around;
`;

const Boats = () => {
  const addNewBoat = e => {
    console.log(e.target.id);
  };
  return (
    <BoatsStyles>
      <BoatType name='Eight' seats={8} cox={'yes'} addNewBoat={addNewBoat} />
      <BoatType
        name='Four/Quad'
        seats={4}
        cox={'maybe'}
        addNewBoat={addNewBoat}
      />
      <BoatType
        name='Pair/Double'
        seats={2}
        cox={'no'}
        addNewBoat={addNewBoat}
      />
      <BoatType name='Single' seats={1} cox={'no'} addNewBoat={addNewBoat} />
    </BoatsStyles>
  );
};

export default Boats;
