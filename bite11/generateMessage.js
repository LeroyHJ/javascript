const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

function messageGen(names) {
  return names.map(names => `Hi ${names}! 50% off our new candies for you today!`)
};

console.log(messageGen(names));