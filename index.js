const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

// import { getNotes } from './notesModel';
// let val = getNotes();  // val is "Hello";
const model = new NotesModel();
model.addNote('this is an example note');

const view = new NotesView(model);

view.displayNotes();