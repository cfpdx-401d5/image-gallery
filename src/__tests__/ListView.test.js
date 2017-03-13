import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import { ListView } from '../ImageGallery';

describe('ListView component: ', function () {

  it('renders the ListView component', () => {
    const rendered = shallow(<ListView image={{Title: '_Title', Description: '_description', Link: '_url'}} />);
    expect(toJson(rendered)).toMatchSnapshot();
  });

});
