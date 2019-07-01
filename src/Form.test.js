import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  it('should render elements that make up a form to add new students', () => {
    const wrapper = shallow(<FormInput />);

    expect(wrapper).toMatchSnapshot();
  });
});