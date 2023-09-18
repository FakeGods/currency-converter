const multiplyBy = (arr, number) => {
  return arr.map((element) => element * number);
  
};
const numbers = [1, 2, 3];
const multipliedNumbers = multiplyBy(numbers, 2);
console.log(multipliedNumbers);