/* eslint-disable */
const Image = require('../lib/models/image');

let testImage = {
  title: 'animal',
  description: 'this is not required',
  url: 'http://www.myimage.com'
};

describe('Image model', () => {

  it('validation passes with all required fields', () => {
    // empty fields for title or url will fail the test
    return new Image(testImage)
      .validate();
  });

});
