import addOne from '../actions/addOne';
import completeOne from '../actions/completeOne';
import deleteOne from '../actions/deleteOne';
import getAll from '../actions/getAll';
import updateOne from '../actions/updateOne';
import ajax from './ajax';

const express = require('express');

const api = express.Router();

api.use('/ajax', ajax);

/* API */
api.get('/', (request, response, next) => {
  getAll()
    .then((todos) => {
      response.render('todos', { todos });
    })
    .catch(next);
});

api.post('/add', (request, response, next) => {
  const data = request.body.item;
  addOne(data)
    .then(() => {
      response.redirect('/');
    })
    .catch(next);
});

api.get('/complete/:id', (request, response, next) => {
  const id = request.params.id;
  completeOne(id)
    .then(() => {
      response.redirect('/');
    })
    .catch(next);
});

api.post('/delete/:id', (request, response, next) => {
  const id = request.params.id;
  deleteOne(id)
    .then(() => {
      response.redirect('/');
    })
    .catch(next);
});

api.post('/update/:id', (request, response, next) => {
  const item = request.body.item;
  const id = request.params.id;
  updateOne(item, id)
    .then(() => {
      response.redirect('/');
    })
    .catch(next);
});

module.exports = api;
