var temps = document.querySelectorAll(".temp");

function swapTemps(){
    var tempSelect = document.getElementById("tempSelector");
    if (tempSelect.value === "Fahrenheit"){
        for (var temp of temps){
            pizza.innerText = Math.round(parseInt(pizza.innerText) * (9/5) + 32 ) 
        }
        /* for (var i = 0; i < temps.length; i++){
            temps[i].innerText = Math.round(parseInt(temps[i].innerText) * (9/5) + 32 )
        } */
    } else if (tempSelect.value === "Celsius"){
        for (var temp of temps){

        }
    }
}