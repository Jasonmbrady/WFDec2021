// Print Array Min and Max
// Iterate through an array of integers and find the smallest and largest values in the array
// and print them

var arr = [6, 19, 2, 45, 10, 92, -3, 0]
function minAndMax(){
    if (arr.length < 1){
        console.log("That is an empty array!");
    } else{
        var min = arr[0];
        var max = arr[0];
        for (var num of arr){
            if (max < num){
                max = num;
            }
            if (min > num){
                min = num;
            }
        }
        console.log(`Min: ${min}`)
        console.log(`Max: ${max}`)
    }
    return `Min: ${min}, Max: ${max}`
}

// TEST
// EXPECTED OUTPUT: -3, 92
minAndMax();
