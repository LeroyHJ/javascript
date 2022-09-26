function oddOrEven(i) {
  for (let i = 1 ; i <= 20 ; i++) {
      if (i % 2 === 0) {
          console.log(`${i} is even`);
      } else {
          console.log(`${i} is odd`);
      }

  }
}
console.log(oddOrEven());

// if requiring this in another file:
// module.exports = oddOrEven;
