import React from 'react';
import { shallow } from 'enzyme';
import Cohort from './Cohort';

describe('Cohort', () => {
  it('should render staff and student information', () => {
    const wrapper = shallow(<Cohort staff={ [] } students={ [] }/>);

    expect(wrapper).toMatchSnapshot();
  });
});