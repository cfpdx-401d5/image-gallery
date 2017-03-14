const bodyParser = require('body-parser').json();
const express = require('express');

const Bunny = require('../models/bunny');

const Router = express.Router;
const bunnyRouter = Router();

bunnyRouter

    .get('/', (req, res, next) => {
        Bunny.find()
            .then(bunnies => res.send(bunnies))
            .catch(next);
    })
    .post('/', bodyParser, (req, res, next) => {
        console.log('IN POST', req.body);
        new Bunny(req.body).save()
            .then(bunny => {
                if(!bunny) {
                    res.status(400).send({error: 'Invalid Bunny Submission'});
                }
                else {
                    res.send(bunny);
                }
            })
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Bunny.findOne(req.params.id)
            .then(bunny => {
                if(!bunny){
                    res.status(404).send({ error: 'Image ID does not exists'});
                }
                else {
                    res.send(bunny);
                }
            })
            .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        Bunny.findByIdAndRemove(req.params.id)
            .then( () => res.send({message: 'You deleted a tiny little baby bun bun! You monster!'}))
            .catch(next);
    });

module.exports = bunnyRouter;