class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.mainContainerEl = document.querySelector('#main-container'); 
  }

  displayMessage() {
    const messageEl = document.createElement('div');
    messageEl.textContent = 'his message displayed by JavaScript';
    messageEl.id = 'message';
    this.mainContainerEl.append(messageEl);
  }
}

module.exports = MessageView;