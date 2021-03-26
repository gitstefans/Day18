// Only change code below this line 
let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([6, 4, 3, 2]);
let unionSet = new Set([]);   // set one + set two
let intersectionSet = new Set([]);   // set one in set two
let differenceSet = new Set([]);    // set one that are not in two

console.log(one);
console.log(two);

unionSet = new Set([...one, ...two]);
console.log(unionSet);

intersectionSet = new Set([...one].filter(x => two.has(x)));
console.log(intersectionSet);

differenceSet = new Set([...one].filter(x => !two.has(x)));
console.log(differenceSet);

// Only change code above this line
module.exports = { unionSet, intersectionSet, differenceSet };