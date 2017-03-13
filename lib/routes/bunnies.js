const express = require('express');
const Router = express.Router;
const router = Router();
const Bunny = require('../models/bunny');
const bodyParser = require('body-parser').json();
const ensureRole = require('../auth/ensure-role');

router

.get('/', (req, res, next) => {
  const query = {};
  if (req.query.type) {
    query.type = req.query.type;
  }
  Bunny.find(query)
    .then(bunnies => res.send(bunnies))
    .catch(next);
})

.get('/:id', (req, res, next) => {
  Bunny.findById(req.params.id)
    .then(bunny => {
      if (!bunny) {
        res.status(404).send({ error: `Id ${req.params.id} Not Found` });
      }	else {
        res.send(bunny);
      }
    })
			.catch(next);
})

.post('/', ensureRole('admin'), bodyParser, (req, res, next) => {
  new Bunny(req.body).save()
    .then(bunny => res.send(bunny))
    .catch(next);
})

.put('/:id', ensureRole('admin'), bodyParser, (req, res, next) => {
  return Bunny.findByIdAndUpdate(
    req.params.id,
    req.body
  )
  .then(bunny => {
    res.send(bunny);
  })
		.catch(next);
})

.delete('/:id', ensureRole('admin'), (req, res, next) => {
  Bunny.findByIdAndRemove(req.params.id)
  .then(deleted => {
    res.send({ deleted: !!deleted });
  })
		.catch(next);
});

module.exports = router;
