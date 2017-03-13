import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import { GalleryView } from '../ImageGallery';

describe('GalleryView component: ', function () {

  it('renders the GalleryView component', () => {
    const rendered = shallow(<GalleryView image={{ title: '_title', description: '_description', url: '_url'}} />);
    expect(toJson(rendered)).toMatchSnapshot();
  });

});
