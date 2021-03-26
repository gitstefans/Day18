function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
    for(let i = 1; i <= 5; i++){
        var x = i;
        yield x;
    }
}
function* insideGenerator2() {
    for(let i = 10; i <= 15; i++){
        var x = i;
        yield x;
    }
}
function* insideGenerator3() {
    for(let i = 6; i <= 9; i++){
        var x = i;
        yield x;
    }
}

var iterator = myGenerator();
const fifteenArray = [];
//var result = "";
for(let i = 0; i < 15; i++){
    fifteenArray.push(iterator.next().value);
    // result += fifteenArray[i] + "#, ";
    // if(i === 14) {
    //     result += "undefined!";
    // }
    if(i === 14){
        fifteenArray.push("undefined!")
    }
   
}
console.log(fifteenArray.join("#, "));
//console.log(result);
module.exports = { fifteenArray, myGenerator };