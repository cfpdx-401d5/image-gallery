/* eslint-disable */
const chai = require('chai');
const chaiHttp = require('chai-Http');
const mongoose = require('mongoose');

const app = require('../../lib/app');

const assert = chai.assert;

chai.use(chaiHttp);

process.env.DB_URI = 'mongodb://localhost:27017/image-gallery-test';
require('../../lib/connection');

describe('images API', () => {

    const request = chai.request(app);

    let testingImage = {
        title: 'cute animals',
        description: 'this is not required',
        id: '',
        url: 'http://www.google.com/'
    };

     let anotherTestingImage = {
        title: 'cute animals again',
        description: 'this is required, not',
        id: '',
        url: 'http://www.images.google.com/'
    };

    let postedImages = [];

    before(() => mongoose.connection.dropDatabase());

    it('POSTs an image', () => {
        return request
            .post('/images')
            .send(testingImage)
            .then(res => {
                postedImages.push(res.body);
                testingImage.id = res.body._id;
                assert.isDefined(res.body._id);
                assert.equal(res.body.title, testingImage.title);
                assert.equal(res.body.url, testingImage.url);
            });
    });

    it('GETs all images', () => {
        return request
            .post('/images')
            .send(anotherTestingImage)
            .then(res => {
                postedImages.push(res.body);
                anotherTestingImage.id = res.body._id;
            })
            .then(() => {
                return request
                    .get('/images')
                    .then(res => {
                        assert.equal(res.body.length, postedImages.length);
                        assert.deepEqual(res.body, postedImages);
                    });
            })
    });

    it('DELETEs an image', () => {
        return request
            .delete(`/images/${testingImage.id}`)
            .then(res => {
                console.log('rez bod is ', res.body);
                assert.deepEqual(res.body.message, `Image { _id: 58c6f9a34e96391e91405a6c,\n  title: \'cute animals\',\n  description: \'this is not required\',\n  url: \'http://www.google.
com/\',\n  __v: 0 } has been deleted`);
            });
    });


});
