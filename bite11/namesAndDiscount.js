const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
];


function messageGen(names) {
  return names.map(names => `Hi ${namesAndDiscounts[name]}! ${namesAndDiscounts[discount]}% off our new candies for you today!`);
};

messsageGen(namesAndDiscounts);


