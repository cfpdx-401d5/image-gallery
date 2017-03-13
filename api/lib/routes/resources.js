const router = require('express').Router();
const Resource = require('../models/resource');
const bodyParser = require('body-parser');

router
    .post('/', bodyParser, (req, res, next) => {
        return new Resource(req.body).save()
            .then(resource => {
                res.send(resource);
            });
    })
    .get('/', (req, res, next) => {
        Resource.find()
            .then(resources => res.send(resources))
            .catch(next);
    });
    // .delete('/:id', (req, res, next) => {

    // })

module.exports = router;
