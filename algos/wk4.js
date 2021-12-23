// Functions - Arguments vs Parameters

// function addNums(num1, num2){
//     console.log(num1 + num2);
// }

// addNums(10, 15);

function addNums(arr){
    var res = arr;
    arr.pop();
    return res;
}
// console.log(res);
// var result = addNums(7,12);
// console.log(result);
// console.log(result - 10);
console.log(addNums([12,15,4,6,"hello, world!"]))

