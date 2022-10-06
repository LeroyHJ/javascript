class NotesView {
  // how does model link to notesmodel class?
  constructor(model) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model;

    document.querySelector('#add-note-btn').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
    })
  }
  
  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    });

    const notes = this.model.getNotes();

    notes.forEach(note => {
      const noteEL = document.createElement('div');
      noteEL.innerHTML = note;
      noteEL.className = 'note';
      this.mainContainerEl.append(noteEL);
      document.querySelector('#add-note-input').value = '';
    })

  }
}

module.exports = NotesView;