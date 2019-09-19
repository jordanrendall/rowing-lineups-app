import React, { useState } from 'react';
import AddBoat from './AddBoat';
import styled from 'styled-components';
import Boat from './Boat';
const BoatStyles = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  button {
    margin: 5px;
  }
`;

const BoatType = ({ name, seats, cox, disabled }) => {
  const [boats, setBoats] = useState();
  const addNewBoat = e => {
    const seats = e.target.getAttribute('seats');
    const cox = e.target.getAttribute('cox');
    let boatList = [];
    if (boats) {
      boatList = [...boats, { seats: seats, cox: cox }];
    } else {
      boatList = [{ seats: seats, cox: cox }];
    }
    setBoats(boatList);
  };
  return (
    <BoatStyles>
      <h3>{name}</h3>
      <AddBoat seats={seats} click={addNewBoat} cox={cox} disabled={disabled} />
      {boats &&
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
