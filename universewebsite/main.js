
document.getElementById("darkmode").addEventListener("click", drkmode); 


function drkmode(){
    document.getElementById("lightmode").checked = false;
    document.body.style.backgroundColor = "#343434";
    document.body.style.color = "white";
}


document.getElementById("lightmode").addEventListener("click", lghtmode); 


function lghtmode(){
    document.getElementById("darkmode").checked = false;
    document.body.style.backgroundColor = "#F5F5F5";
    document.body.style.color = "black";
    document.body.style.transition = "ease .3s"
}

var currentTime = new Date().getHours();
var bckround = document.body.innerHTML;

if (bckround) {
    if (7 <= currentTime && currentTime < 20) {
        lghtmode();
    }
    else {
        drkmode();
    }
}
