import React from 'react';
import BoatInfo from '../components/BoatInfo';
import Lineup from '../components/Lineup';
import LineupTitle from '../components/LineupTitle';

const indexPage = () => {
  return (
    <Lineup>
      <LineupTitle />
      <BoatInfo />
    </Lineup>
  );
};

export default indexPage;
