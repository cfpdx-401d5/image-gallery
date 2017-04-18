import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import {GalleryDisplay} from '../GalleryDisplay';

describe('GalleryDisplay component: ', function () {

  it('renders the GalleryDisplay component', () => {
    const rendered = shallow(< GalleryDisplay  title='_title' description='_description' url='_url' />);
    expect(toJson(rendered)).toMatchSnapshot();
  });

});
