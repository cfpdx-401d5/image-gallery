/* eslint-disable */
const Image = require('../lib/models/image');

let testImage = {
  title: 'animal',
  description: 'this is not required',
  id: 'someId123',
  url: 'http://www.myimage.com'
};

describe('Image model', () => {

  it('validation passes with all required fields', () => {
    return new Image(testImage)
      .validate();
  });

});
