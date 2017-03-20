import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import ThumbnailDisplay from '../ThumbnailDisplay';

describe('ThumbnailDisplay component: ', function () {

  it('renders the ThumbnailDisplay component', () => {
    const rendered = shallow(<ThumbnailDisplay image={{ title: '_Title', url: '_url' }} deleteImage={() => {} } />);
    expect(toJson(rendered)).toMatchSnapshot();
  });

});
