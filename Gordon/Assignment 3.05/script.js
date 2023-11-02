// var p = document.getElementById("change");
var p = document.querySelector("#change");
p.innerHTML = "text" ;
p.style.background = "blue";
p.style.color = "red";
p.style.textAlign = "center";

function changeParagraphBackgroundColor() 
{
    this.style.background = 'green';
}
p.onclick = changeParagraphBackgroundColor;

var currentMargin = 0;
function nextFrame()
{
    currentMargin++;
    p.style.margin =currentMargin + 'px';
}

var animation;

function play()
{
    animation = setInterval(nextFrame,20);

}
play();
document.querySelector("#play").onclick = play;


function stop()
{
    currentMargin = 0;
    p.style.margin = "0px";
    clearInterval(animation);

}

document.querySelector("#stop").onclick = stop;






