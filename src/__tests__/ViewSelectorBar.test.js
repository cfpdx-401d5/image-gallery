import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import ViewSelectorBar from '../ViewSelectorBar';

function testClickHandler(e) {
  return e;
}

describe('ViewSelectorBar component: ', function () {

  it('renders the ViewSelectorBar component', () => {
    const rendered = shallow(<ViewSelectorBar clickHandler={testClickHandler} />);
    expect(toJson(rendered)).toMatchSnapshot();
  });

});
