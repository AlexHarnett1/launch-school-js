function buyFruit(fruitList) {
  let fruits = [];
  fruitList.forEach(element => {
    for (i = 0; i < element[1]; i += 1) {
      fruits.push(element[0]);
    }
  });
  return fruits;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]