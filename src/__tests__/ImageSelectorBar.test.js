import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import { ImageSelectorBar } from '../ImageGallery';

function testClickHandler(e) {
  return e;
}

describe('ImageSelectorBar component: ', function () {

  it('renders the ImageSelectorBar component', () => {
    const rendered = shallow(<ImageSelectorBar clickHandler={testClickHandler} />);
    expect(toJson(rendered)).toMatchSnapshot();
  });

});
