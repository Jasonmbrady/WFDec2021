// complete the following function:

// given an array of integers, return the average value of all numbers in the array

function average(numbers){
    var sum = 0;
    var totalNums = 0;
    for (let number of numbers){
        if (typeof number === "number"){
            sum += number;
            totalNums++;
        }
    }
    return sum / totalNums;
}

// TEST - All numbers
console.log(average([1,2,4,5]));
// expected result: 3
// TEST - Ninja Bonus
// isNaN();
console.log(average([3,4,"Dojo", false, 8]));
// expected result: 5




