//var wins
//var loss
//var randomguesses
/* onclick 
At start of game a randomNumber is gnerated.

4 crystals - each represents a number that is hidden.

each time guess clicks on a crystal it will add to the guess counter the amount that specifice crystal is worth.

the only way to figure out what a crystal is work is by clicking on it (guess).

object is to match my (total score) with the randomNumber.

If guesss# is equal to randomNumber - I win.

Then random# will be reset to zero.

crystals will have different randomNumbers 1 - 12

If I go more than randomNumber then I loss



*/
// var randomguesses
// var wins
// var loss
//loops to assign a value to each crystal
var crystalArray = [];
for(var i=0; i<4; i++){
	var	rand=Math.floor(Math.random() * 12);
	crystalArray.push(rand);
	console.log("here is crystalArray",crystalArray);
}
//onclick, do something. What is it that happens?

$("#btn0").click(function(){
	console.log("It worked!");
	//assign #btn0 a value. What value? The value in crystalArray[0].
	$("#btn0").val(crystalArray[0]);
	var zero = $("#btn0").html();
	// console.log($("#btn0"));
	// console.log("Here is val #btn0",t);


});

$("#btn1").click(function(){
	$("#btn1").val(crystalArray[1]);
	var	one = $("#btn1").val();
	console.log (one);
	//
	//var ts = $("#test").text();
	console.log("test here",ts);
	$("#test").text(parseInt(one + ts));

});

$("#randomNum").click(function(){
	var random=Math.floor(Math.random() * 100)+20;
	var g = $("#randomNum").text();

	console.log("here is g", g);
});