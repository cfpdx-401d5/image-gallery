const bodyParser = require('body-parser').json();
const express = require('express');
const Router = express.Router;
const userRouter = Router();

const User = require('../models/user');
const Image = require('../models/image');
const token = require('../auth/token');
const ensureAuth = require('../auth/ensure-auth')();

function hasUsernameAndPassword(req, res, next) {
    const user = req.body;
    if(!user.username || !user.password) {
        return next({
            code: 400,
            error: 'username and password must be provided'
        });
    }
    next();
}

userRouter
    .get('/verify', ensureAuth, (req, res) => {
        res.send({ valid: true });
    })

    .post('/signup', bodyParser, hasUsernameAndPassword, (req, res, next) => {
        let data = req.body;
        User.find({ username: data.username }).count()
            .then(count => {
                if(count > 0) throw {
                    code: 400,
                    error: `username ${data.username} already exists`
                };
                else {
                    data.images = []
                }
            })
            .then(user => token.sign(user))
            .then(token => res.send({ token }))
            .catch(next);
    })