process.env.MONGODB_URI = 'mongodb://localhost:27017/gallery-test';
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const app = require('../lib/app');
chai.use(chaiHttp);
const request = chai.request(app);
let savedImageId = '';

before(() => mongoose.connection.dropDatabase());
after(() => mongoose.connection.dropDatabase());

let imageA =
    {
        title: 'Puppy puppy',
        description: 'Who could resist?',
        url: 'http://slco.org/uploadedImages/depot/publicWorks/fAnimal/20090809-IMG_7799-Edit.jpg'
    };

function saveImage(image) {
    return request.post('/images')
        .send(image)
        .then(res => res.body);
}


describe('Full Stack Backend', () => {
    it('Get should be empty array ', () => {
        return request.get('/images')
            .then(req => req.body)
            .then(images => assert.deepEqual(images, []));
    });


    it('Add an image to db', () => {
        return saveImage(imageA)
            .then(saveImage => {
                savedImageId = saveImage._id;
                assert.isOk(saveImage._id);
            });
    });

    it('Delete an image from db', () => {
        return request.delete(`/images/${savedImageId}`)
            .then(res => {
                assert.deepEqual(res.body, { deleted: true });
            });
    });

}); //end describe
