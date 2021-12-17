// Primitive
// var myVar = "string";
// var myBool = true;
// Data Structures
var produce = ["apple", "cucumber", "spinach"];
produce[0] = "orange";
// var removed = produce.pop();
// produce.push("tomato");
// console.log(produce.pop());
// console.log(removed);
// console.log(produce);
// for (var i = 0; i < produce.length; i++){
//     console.log(produce[i]);
// }
for (var vegetable of produce){
    console.log(vegetable);
}
// Create an array with all odd numbers 1 - 255 inclusive
function oddArr(){
    var arr = [];
    for (var i = 1; i < 256; i++){
        if(i%2 !== 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(oddArr());
