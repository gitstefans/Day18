// Only change code below this line
let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5]
]);

const arrKey = [];
const arrValue = [];

for(let key of shoppingList.keys()) {
    arrKey.push(key);
}
console.log("groceries: " + arrKey.join("\ngroceries: "));

for(let val of shoppingList.values()) {
    arrValue.push(val);
}
console.log("amount: " + arrValue.join("\namount: "));

for(let i of shoppingList.entries()) {
    console.log(`[ '${i[0]}', ${i[1]} ]`);
}

// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };