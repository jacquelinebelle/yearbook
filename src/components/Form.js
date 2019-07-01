import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      quote: '',
      photo: 'https://placekitten.com/200/300',
      superlative: '',
      status: 'student',
    };
  }

  handleStateChange = e => {
    e.persist();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitNewStudent = e => {
    e.preventDefault();
    const newStudent = { ...this.state, id: Date.now() };
    this.props.addStudent(newStudent);
    this.clearForm();
  };

  clearForm = () => {
    this.setState({ id: 0, name: '', quote:'', photo: 'https://placekitten.com/200/300', superlative: '' })
  }

  render() {
    const { name, quote, superlative } = this.state;
    return (
      <div>
        <h2>Add student</h2>
        <form className='form-input'>
          <input
            type='text'
            name='name'
            value={name}
            placeholder='Name'
            onChange={this.handleStateChange}
          />
          <input
            type='text'
            name='quote'
            value={quote}
            placeholder='Quote'
            onChange={this.handleStateChange}
          />
          <input
            className='input-style'
            type='text'
            name='superlative'
            value={superlative}
            placeholder='Superlative'
            onChange={this.handleStateChange}
          />
          <button onClick={this.handleSubmit}>Submit!</button>
        </form>
      </div>
    );
  }
}

export default Form;