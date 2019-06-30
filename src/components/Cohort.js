import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({ staff, students }) => {

  const staffCards = staff.map(card => {
    return (
      <Person
        id={card.id}
        name={card.name}
        quote={card.quote}
        superlative={card.superlative}
        photo={card.photo}
      />
    )
  });

  const studentCards = students.map(card => {
    return (
      <Person
        key={card.id}
        name={card.name}
        quote={card.quote}
        superlative={card.superlative}
        photo={card.photo}
      />
    );
  });


  return (
    <div>
      <h2>Staff</h2>
      <div className="card-container">
        {staffCards}
      </div>
      <h2>Students</h2>
      <div className="card-container">
        {studentCards}
      </div>
    </div>
  )
}

export default Cohort;
