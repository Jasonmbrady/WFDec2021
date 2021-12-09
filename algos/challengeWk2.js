// FIZZBUZZ!
// Write a function that checks each number from 1 to 25 and prints "Fizz" for each number that is evenly divisible by 3, 
// "Buzz" for each number that is evenly divisible by 5, and "FizzBuzz" for each 
// number that is evenly divisible by both 3 and 5.


function fizzBuzz(){
    var output;
    for (var i = 1; i <= 25; i++){
        output = "";
        if ( i % 3 === 0){
            output += "Fizz"
        }
        if ( i % 5 === 0){
            output += "Buzz"
        }
        if (output !== ""){
            console.log(output + " " + i);
        }
    }
}
    
    
    // TEST
    fizzBuzz();
    