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
        id: 'anotherId123',
        url: 'http://www.google.com/'
    };

     let anotherTestingImage = {
        title: 'cute animals again',
        description: 'this is required, not',
        id: 'anotherId1234566',
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
                assert.isDefined(res.body._id);
                assert.equal(res.body.title, testingImage.title);
                assert.equal(res.body.id, testingImage.id);
                assert.equal(res.body.url, testingImage.url);
            });
    });

    it('GETs all images', () => {
        return request
            .post('/images')
            .send(anotherTestingImage)
            .then(res => {
                postedImages.push(res.body);
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



});
