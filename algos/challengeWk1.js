// create a variable to hold your name
// create a variable to hold a basic greeting
// print a message that includes both your name and greeting
// Ninja Bonus: print a different message if the name is "Steve"
// Ex (greeting is "Hello World")
//  if name is "Steve" print:
//      "Steve here AKA the Stevenator, just wanted to say Hello World"
//  if name is not "Steve" print:
//      "Jane here, just wanted to say Hello World"

function greet(){
    var name = "Steve";
    var greeting = "Hello, World";
    if(name === "Steve"){
        console.log(`${name} here, AKA the Stevenator, just wanted to say ${greeting}`);
    } else {
        console.log(`${name} ${greeting}`);
    }
}
// TEST
greet();
