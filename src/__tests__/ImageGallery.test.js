import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import ImageGallery from '../ImageGallery';

describe('ImageGallery: ', function () {
  
  it('runs ImageGallery app', function () {
    const rendered = shallow(<ImageGallery />);
    expect(toJson(rendered)).toMatchSnapshot();

  });
});
