import addOne from '../actions/addOne';
import completeOne from '../actions/completeOne';
import deleteOne from '../actions/deleteOne';
import getAll from '../actions/getAll';
import updateOne from '../actions/updateOne';

const express = require('express');

const api = express.Router();

/* AJAX api */
api.get('/', (request, response) => {
  response.render('todos_ajax');
});

api.get('/get-all', (request, response, next) => {
  getAll()
    .then((todos) => {
      response.json({ todos: todos });
    })
    .catch(next);
});

api.post('/delete/:id', (request, response, next) => {
  const id = request.params.id;
  deleteOne(id)
    .then(() => {
      response.status(200);
    })
    .catch(next);
})

api.put('/update/:id', (request, response, next) => {
  const id = request.params.id;
  const data = request.body
  updateOne(data.item, parseInt(id))
    .then(() => {
      response.status(200);
    })
    .catch(next);
})

api.post('/complete/:id', (request, response, next) => {
  const id = request.params.id;
  completeOne(id)
    .then(() => {
      response.status(200);
    })
    .catch(next);
});


module.exports = api;
