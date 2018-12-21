import React from 'react';
import Card from './Card.js';

const Cardlist = ({ people }) => {
  return people.map(person => {
    return <Card person={person} />;
  });
};

export default Cardlist;
