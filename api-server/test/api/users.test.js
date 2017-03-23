const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const app = require('../../lib/app')

process.env.DB_URI = 'mongodb://localhost:27017/users-api-test';
require('../../lib/connection');

describe('user', () => {
    before(() => mongoose.connection.dropDatabase());

    const user = {
        username: 'user',
        password: 'asdf'
    };

    const request = chai.request(app);

    describe('user management', () => {

        const badRequest = (url, data, error) => 
            request
                .post(url)
                .send(data)
                .then(
                    () => { throw new Error('status should not be ok'); },
                    res => {
                        assert.equal(res.status, 400);
                        assert.equal(res.response.body.error, error);
                    }
                );

        it('signup requires username', () => 
            badRequest('/user/signup', { password: 'asdf' }, 'username and password must be provided')
        );

        it('signup requires password', () => 
            badRequest('/user/signup', { username: 'user' }, 'username and password must be provided')
        );

        it('signup', () =>
            request
                .post('/user/signup')
                .send(user)
                .then(res => assert.ok(token = res.body.token))
        );

    });

});