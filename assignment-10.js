let stopBtn=document.getElementById("stop");
let slowBtn=document.getElementById("slow");
let goBtn=document.getElementById("go");

function stop(){
  document.getElementById("red").style.backgroundColor = "red";
  document.getElementById("yellow").style.backgroundColor = "gray";
  document.getElementById("green").style.backgroundColor = "gray";
}
function slow(){
      document.getElementById("red").style.backgroundColor = "gray";
  document.getElementById("yellow").style.backgroundColor = "yellow";
  document.getElementById("green").style.backgroundColor = "gray";

}
function go(){
    document.getElementById("red").style.backgroundColor = "gray";
  document.getElementById("yellow").style.backgroundColor = "gray";
  document.getElementById("green").style.backgroundColor = "green";

}