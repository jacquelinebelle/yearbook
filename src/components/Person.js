import React from 'react';
import './Person.css';

const Person = ({id, name, quote, superlative, photo}) => {
  return (
    <div className="card">
      <img src={photo} alt="photo of staff" />
      <h3>{name}</h3>
      <p>{quote}</p>
      <p>{superlative}</p>
    </div>
  )
}

export default Person;
