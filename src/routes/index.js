/* Actions */
import addOne from '../actions/addOne';
import completeOne from '../actions/completeOne';
import deleteOne from '../actions/deleteOne';
import getAll from '../actions/getAll';
import updateOne from '../actions/updateOne';

const express = require('express');

const api = express.Router();

/* API */
api.get('/', (request, response, next) => {
  getAll()
    .then((todos) => {
      // uncomment line below and comment out line 18 after AJAXifying
      // response.json({ todos: todos });
      response.render('todos', { todos });
    })
    .catch(next);
});

api.post('/add', (request, response, next) => {
  const data = request.body.item;
  addOne(data)
    .then(() => {
      // uncomment line below and comment out line 29 after AJAXifying
      // response.status(200);
      response.redirect('/');
    })
    .catch(next);
});

api.get('/complete/:id', (request, response, next) => {
  const id = request.params.id;
  completeOne(id)
    .then(() => {
      // uncomment line below and comment out line 29 after AJAXifying
      // response.status(200);
      response.redirect('/');
    })
    .catch(next);
});

api.post('/delete/:id', (request, response, next) => {
  const id = request.params.id;
  deleteOne(id)
    .then(() => {
      // uncomment line below and comment out line 51 after AJAXifying
      // response.status(200);
      response.redirect('/');
    })
    .catch(next);
});

api.post('/update/:id', (request, response, next) => {
  const item = request.body.item;
  const id = request.params.id;
  updateOne(item, id)
    .then(() => {
      // uncomment line below and comment out line 63 after AJAXifying
      // response.status(200);
      response.redirect('/');
    })
    .catch(next);
});

module.exports = api;
