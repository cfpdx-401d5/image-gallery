import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import { ThumbnailView } from '../ImageGallery';

describe('ThumbnailView component: ', function () {

  it('renders the ThumbnailView component', () => {
    const rendered = shallow(<ThumbnailView image={{Title: '_Title', Link: '_url'}} />);
    expect(toJson(rendered)).toMatchSnapshot();
  });

});
