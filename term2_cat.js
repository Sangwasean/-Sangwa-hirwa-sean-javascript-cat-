function sumOfAll(arr) {
  let sum = 0;
  for (let a of arr) sum += a;
  return sum;
}
console.log(sumOfAll([5, 3, 7]));


//PRODUCT OF THE ARRAY


function productOfAll(arr) {
  let product = 1;
  for (let i of arr) product *= i;
  return product;
}
console.log(productOfAll([5, , 7]));


