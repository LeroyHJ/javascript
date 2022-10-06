/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button to show the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');

    inputEl.value = 'message here';

    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('message here');
  });

  it('clicks the button to hide the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const showButtonEl = document.querySelector('#show-message-button');
    showButtonEl.click();

    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});