const NotesModel = require('./notesModel');

describe('notesModel', () => {
    it('returns an empty array', () => {
        const model = new NotesModel()
        let answer = model.getNotes();
        expect(answer).toEqual([]);
    })

    it('adds a note to the list', () => {
      const model = new NotesModel();
      model.addNote('Buy milk');
      model.addNote('Go to the gym');
      let answer = model.getNotes();
      expect(answer).toEqual(['Buy milk', 'Go to the gym']);
  })

  it('resets the list', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.getNotes();
    model.reset();
    let answer = model.getNotes();
    expect(answer).toEqual([]);
  })
});