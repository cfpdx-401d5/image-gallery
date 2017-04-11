const bodyParser = require('body-parser').json();
const express = require('express');

const Image = require('../models/image');

const Router = express.Router;
const imageRouter = Router();

imageRouter
    .post('/', bodyParser, (req, res, next) => {
      new Image(req.body).save()
        .then(image => { res.send(image); })
        .catch(next);
    })
    
    .get('/', (req, res, next) => {
      Image.find()
        .then(images => res.send(images))
        .catch(next);
    })

    .delete('/:id', (req, res, next) => {
      const image = req.params.id;

      Image.findByIdAndRemove(image)
        .then(image => {
          if (!image) {
            res.status(404).send({ error: 'Cannot Find Image' });
          } else {
            res.send({ message: `Image ${image._id} has been deleted` });
          }
        })
        .catch(next);

    })
    ;

module.exports = imageRouter;
