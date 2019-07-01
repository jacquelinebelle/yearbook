import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

describe('Person', () => {
  it('should contain information about each person', () => {
    const wrapper = shallow(<Person />);

    expect(wrapper).toMatchSnapshot();
  });
});