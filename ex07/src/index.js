// Only change code below this line
const numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
const uniqueArray = [];

uniqueArray.push(...new Set(numberArray));
//uniqueArray.sort(function(a, b){return a-b});
uniqueArray.sort((a,b) => a - b);
console.log(uniqueArray);
// Only change code above this line
module.exports = { numberArray, uniqueArray };