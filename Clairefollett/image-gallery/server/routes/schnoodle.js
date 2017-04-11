const bodyParser = require('body-parser').json();
const Schnoodle = require('../models/schnoodle');

const schnoodleRouter = require('express').Router();

schnoodleRouter
    .post('/add', bodyParser, (req, res, next) => {
        new Schnoodle(req.body).save()
            .then(schnoodle => { res.send(schnoodle); })
    })

    .get('/', (req, res, next) => {
        Schnoodle.find()
            .then(schnoodles => res.send(schnoodles))
            .catch(next);
    })
    
    .delete('/:id', bodyParser, (req, res, next) => {
        Schnoodle.findByIdAndRemove(req.params.id)
            .then(deleted => res.send({ deleted: !!deleted }))
            .catch(next);
    })

module.exports = schnoodleRouter;