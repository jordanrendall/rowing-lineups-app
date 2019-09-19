import React, { useState } from 'react';
import styled from 'styled-components';
import BoatType from './BoatType';
const BoatsStyles = styled.article`
  display: flex;
  justify-content: space-around;
`;

const Boats = ({ unallocatedAthletes }) => {
  return (
    <BoatsStyles>
      <BoatType
        name='Eight'
        seats={8}
        cox={'yes'}
        disabled={
          unallocatedAthletes.rowers < 8 || unallocatedAthletes.coxies === 0
        }
      />
      <BoatType
        name='Four/Quad'
        seats={4}
        cox={'maybe'}
        disabled={unallocatedAthletes.rowers < 4}
      />
      <BoatType
        name='Pair/Double'
        seats={2}
        cox={'no'}
        disabled={unallocatedAthletes.rowers < 2}
      />
      <BoatType
        name='Single'
        seats={1}
        cox={'no'}
        disabled={unallocatedAthletes.rowers === 0}
      />
    </BoatsStyles>
  );
};

export default Boats;
