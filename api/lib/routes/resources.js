const router = require('express').Router();
const Resource = require('../models/resource');
const bodyParser = require('body-parser').json();

router
    .post('/', bodyParser, (req, res, next) => {
        return new Resource(req.body).save()
            .then(resource => {
                res.status(201).send(resource);
            });
    })
    .get('/', (req, res, next) => {
        Resource.find()
            .then(resources => res.send(resources))
            .catch(next);
    });

module.exports = router;
