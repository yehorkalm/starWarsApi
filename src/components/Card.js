import React from 'react';

const Card = ({ person }) => {
  console.log(person);

  return (
    <div
      className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'
      style={{ minWidth: 300 }}
    >
      <p className='f2 tc'> {person.name} </p>
      <p className='b'>Height: {person.height}</p>
      <p className='b'>Mass: {person.mass}</p>
      <p className='b'>Hair Color: {person.hair_color}</p>
      <p className='b'>Skin Color: {person.skin_color}</p>
      <p className='b'>Eye color: {person.eye_color}</p>
      <p className='b'>Birth Year: {person.birth_year}</p>
    </div>
  );
};

export default Card;
