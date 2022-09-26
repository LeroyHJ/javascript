const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (number) => {
  return 'Text sent to: ' + number;
}

const notify = (emailOrNumber, apples) => {
    return apples(emailOrNumber);
}

console.log(notify('jovi@gmail.com', notifyByEmail));
console.log(notify('12345678901', notifyByText));
