const User = require('../lib/models/user');
const assert = require('chai').assert;

describe('user model', () => {
    const Model = function(User) {
        return (data) => new User(data)
            .validate()
            .then(
                () => { throw new Error('validation should not have succeeded'); },
                () => {}
            );
    };

    it('is valid with a username and password', () => {
        return new User({
            username: 'username',
            password: 'password'
        }).validate();
    });

    it('sets hash from password and correctly compares', () => {
        const data = {
            username: 'username',
            password: 'password'
        };

        const user = new User(data);

        assert.isUndefined(user.password);
        assert.notEqual(user.hash, data.password);
        assert.isTrue(user.comparePassword('password'));
        assert.isFalse(user.comparePassword('notpassword'));
    });
});