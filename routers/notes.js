const express = require('express'); 
const notes = require('../controllers/notes.js');
const notesRouter = express.Router();

// Require notes controller
const notesController = require('../controllers/notes.js')

// Index cua router note
notesRouter.get('/', notesController.index);
// Creat 1 note
notesRouter.get('/create', notesController.createGet);
notesRouter.post('/create', notesController.createPost);
//Edit notes
notesRouter.get('/:id/edit', notesController.edit);
notesRouter.put('/:id', notesController.update);
// Delete notes
notesRouter.delete('/:id', notesController.delete);

module.exports = notesRouter