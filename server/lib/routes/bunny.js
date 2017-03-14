const bodyParser = require('body-parser').json();
const express = require('express');

const Bunny = require('../models/images');

const Router = express.Router;
const bunnyRouter = Router();

bunnyRouter

    .get('/', bodyParser, (req, res, next) => {
        Bunny.find()
            .then(images => res.send(images))
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
    .get('/:id', bodyParser, (req, res, next) => {
        const id = req.params.id;
        Bunny.findOne({id})
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
        const id = req.params.id;
        Bunny.findByIdAndRemove(id)
            .then( () => res.send({message: 'You deleted a tiny little baby bun bun! You monster!'}))
            .catch(next);
    });

module.exports = bunnyRouter;