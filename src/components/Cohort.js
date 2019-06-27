import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({people}) => {

  const personCards = people.map(card => {
    return (
      <Person
        id={card.id}
        name={card.name}
        quote={card.quote}
        superlative={card.superlative}
        photo={card.photo}
      />
    )
  })

  return (
    <div className="card-container">
      {personCards}
    </div>
  )
}

export default Cohort;
