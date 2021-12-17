// var arr = ["Alan", "Olivia", "Justin", "Shawn", "Corey"];
// //            0          2         3        4        5
// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// var names = ["Alan", "Jason", "Olivia", "Justin", "Shawn", "Corey"];
// for (var thisname of names){
//     console.log(thisname);
// }

// var elements = document.querySelectorAll(".header") // []
// var elements = document.getElementsByClassName("header")
function clickHead(el){
    changeColor(el);
    changeBackground(el);
    addExclaim(el);
}

function changeColor(el){
    // var el = document.getElementById("header");
    if( el.style.color !== "lime"){
        el.style.color = "lime"
    } else {
        el.style.color = "black"
    }
}

function changeBackground(el){
    if( el.style.backgroundColor !== "black"){
        el.style.backgroundColor = "black"
    } else {
        el.style.backgroundColor = "white"
    }
}

function addExclaim(el){
    el.innerText += "!";
}

// var header = document.getElementById("header");
// header.addEventListener("mouseover", changeColor);
// header.addEventListener("mouseout", changeColor);
