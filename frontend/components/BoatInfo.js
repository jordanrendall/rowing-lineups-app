import React, { useState } from 'react';
import Names from './Names';
import Boats from './Boats';
import styled from 'styled-components';

const BoatInfoStyles = styled.span`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;
const BoatInfo = () => {
  const [athleteCount, setAthleteCount] = useState({ rowers: 0, coxies: 0 });
  //   const [allocatedAthletes, allocateAthlete] = useState()
  return (
    <BoatInfoStyles>
      <Names
        setAthleteCount={setAthleteCount} /*allocateAthlete={allocateAthlete}*/
      />
      <Boats unallocatedAthletes={athleteCount} />
    </BoatInfoStyles>
  );
};

export default BoatInfo;
