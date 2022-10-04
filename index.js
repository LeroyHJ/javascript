const NotesModel = require('./notesModel');

// import { getNotes } from './notesModel';
// let val = getNotes();  // val is "Hello";
const model = new NotesModel();

console.log(model.getNotes());