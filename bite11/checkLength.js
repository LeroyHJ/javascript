const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

function checkLength(number) {
  if (number.length <= 10) {
    return true
  } else { 
    return false 
  }
}

function filterLongNumbers(numbers) {
  return numbers.filter(checkLength);
}

console.log(filterLongNumbers(numbers)); 
console.log(filterLongNumbers(['1763687364', '4763687363'])); 
console.log(filterLongNumbers([])); 
