window.addEventListener("load", function (){

var board = document.querySelector("#board");
var box = document.querySelectorAll(".box");
var turn = 0;
var x = "url('img/x.png')";
var o = "url('img/o.jpeg')";

board.addEventListener("click", function (event){
	if (event.target.classList.contains("clicked") === false){
	if (turn % 2 === 0) {
	event.target.style.backgroundImage = x;
	}
	if(turn % 2 === 1){ 
	event.target.style.backgroundImage = o;
	}
	turn += 1;
 	event.target.classList.add("clicked");
}
});

});













