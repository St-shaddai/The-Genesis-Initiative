var colorx=document.querySelector(".color1");
var colorz=document.getElementById("color2");
var css=document.querySelector("h3");
var body=document.querySelector("body");

function dynamo(){
    body.style.background="linear-gradient(to right,"+colorx.value+", "+colorz.value+")";
        css.textContent=body.style.background+";";
     };
    colorx.addEventListener("input", function(){
    dynamo()});

    colorz.addEventListener("input", function(){
    dynamo()});

css.addEventListener("load", function(){
    dynamo()
});

/*function page(){
    body.style.background= "linear-gradient(to right, red, yellow)";
    css.textContent=body.style.background+";";
}

colorx.addEventListener("load", function(){
    page()});

    colorz.addEventListener("load", function(){
        page()});*/