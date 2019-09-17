import React from 'react';

const Boat = ({ seats, cox }) => {
  return (
    <>
      {[...Array(seats)].map((seat, i) => {
        return <li key={`seat-${i}`}>seat# {i}</li>;
      })}
    </>
  );
};

export default Boat;
