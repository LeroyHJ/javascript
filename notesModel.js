class NotesModel {
  constructor() {
    this.basket = [];
};
    
  getNotes() {
    return this.basket;
  }

  addNote(note) {
    return this.basket.push(note);
  }

  reset() {
    return this.basket = [];
  }


}

// export function getNotes() {
//   return this.basket;
// }

module.exports = NotesModel;