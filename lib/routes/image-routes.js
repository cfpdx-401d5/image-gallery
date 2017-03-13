const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image-schema');

router
    .post('/', bodyParser, (req, res, next) => {
        new Image(req.body).save()
        .then(images => res.send(images))
        .catch(next);
    })
    .get('/', (req, res, next) => {
        Image.find()
        .lean()
        .then(images => res.send(images))
        .catch(next);
    })
    .put('/:id', bodyParser, (req, res, next) => {
        Image.findByIdAndUpdate(req.params.id, req.body)
        .then(images => res.send(images))
        .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        Image.findByIdAndRemove(req.params.id)
        .then(deleted => res.send({ deleted: !!deleted }))
        .catch(next);
    });

module.exports = router;
