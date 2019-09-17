import React from 'react';
import AddBoat from './AddBoat';
import styled from 'styled-components';

const BoatStyles = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  button {
    margin: 5px;
  }
`;

const Boat = ({ name, seats }) => {
  return (
    <BoatStyles>
      <h3>{name}</h3>
      <AddBoat seats={seats} />
    </BoatStyles>
  );
};

export default Boat;
