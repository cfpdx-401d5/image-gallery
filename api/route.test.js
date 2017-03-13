/* eslint-disable */
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require('../../lib/app');
const request = chai.request(app);
const Image = require('../../lib/models/image-schema');

process.env.MONGODB_URI = 'mongodb://localhost:27017/image-test';
require('../../lib/connection');
const mongoose = require('mongoose');

describe('image routes', () => {
    before(() => mongoose.connection.dropDatabase());

    let imageOne = {
        title: 'Bunny and Friend',
        description: 'Hanging with best stuffed buddy.',
        url: 'http://www.acuteaday.com/blog/wp-content/uploads/2012/11/best-bunny-buddies.jpg'
    };
    
    it('post creates a new image', () => {
       return request.post('/')
            .send(imageOne)
            .then(res => {
                assert.isOk(res.body._id)
                imageOne._id = res.body._id;
                imageOne.__v = res.body.__v;
                assert.deepEqual(res.body, imageOne);
            })
    });

    it('get retrieves all the images', () => {
        return request.get('/')
            .then(res => {
                assert.isArray(res.body);
            });
    });

    it('delete removes image from the db', () => {
        return request.delete(`/${imageOne._id}`)
            .then(res => {
                assert.deepEqual(res.body, { deleted: true });
            });
    });
});


