import React, { useState } from 'react';
import AddBoat from './AddBoat';
import styled from 'styled-components';
import Boat from './Boat';
const BoatStyles = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  button {
    margin: 5px;
  }
`;

const BoatType = ({ name, seats, addNewBoat, cox }) => {
  const [boats, setBoats] = useState([]);
  return (
    <BoatStyles>
      <h3>{name}</h3>
      <AddBoat seats={seats} click={addNewBoat} />
      {boats.length > 0 &&
        boats.map((boat, i) => {
          return (
            <Boat
              key={`boat-${boat.seats}-${i}`}
              seats={boat.seats}
              cox={cox}
            />
          );
        })}
    </BoatStyles>
  );
};

export default BoatType;
