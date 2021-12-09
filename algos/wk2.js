// // Types of Loops
// // WHILE
// var a = 1;
// var b = 10;
// while( a < b ){
//     console.log("A is less than B");
//     a++;
// }
// // FOR
// for(var i = 0; i < 10; i++){
//     console.log("the value of i is:" + i);
// }
// BREAK AND CONTINUE
// arr = ["a", "c", "z", "b", "r", "b", "p"]
// length 700,000
// for (var i=0; i < arr.length; i++){
//     if (arr[i] === "b"){
//         console.log(arr[i]);
//         continue;
//     }
//     console.log("Not b");
// }
// for (var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr.length; j++){
//         console.log(arr[i] + arr[j]);
//     }
// }
var sum = 0;
for(var i = 0; i < 256; i+=5){
    // if( i % 2 !== 0){
        sum += i;
    // }
}
console.log(sum);