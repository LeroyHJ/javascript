const fizzBuzz = () => {
  for (let n = 1; n <= 10; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log('FizzBuzz');
    } else if (n % 3 === 0) {
      console.log('Fizz');
    }
    else if (n % 5 === 0) {
      console.log('Buzz');
    }
    else {
      console.log(n);
    }
  }
}

console.log(fizzBuzz())
// module.exports = fizzBuzz;
