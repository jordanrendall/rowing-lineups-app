import React from 'react';
import styled from 'styled-components';

const StyledSeatArray = styled.ul`
  border: 1px solid black;
  padding: 10px;
  li {
    list-style: none;
    padding: 10px;
    border: 1px solid black;
  }
`;

const Boat = ({ seats, cox }) => {
  const seatArray = new Array(parseInt(seats) + (cox === 'yes' ? 1 : 0));
  const filledSeatArray = [...seatArray].map((seat, i) => {
    return i;
  });
  let items = [];
  items = [...filledSeatArray].map((item, i) => {
    return <li key={`seat-${i}`}>{i >= seats ? 'cox' : `seat# ${i + 1}`}</li>;
  });
  return <StyledSeatArray>{items}</StyledSeatArray>;
};

export default Boat;
