
function startGame(){
	return Math.trunc(Math.random()*2);
}


roundScore = 0;
globalScore = [0,0];
var y = startGame();//choose a player

//When button roll is clicked, we need to roll the dice, return the number we obtained, and update the score
document.querySelector('.btn-roll').addEventListener('click',function(){
	var dice = Math.trunc(Math.random()*6)+1;//roll the dice
	console.log(dice);
	if(dice != 1){
		roundScore += dice;
		document.querySelector('#roundScore-'+ y).textContent = roundScore;// update the roundscore
	}
	else{
		roundScore = 0;
		document.querySelector('#roundScore-'+ y).textContent = roundScore;// update the score
		if(y==0) y = 1;
		else y = 0;
	}
});

//When button hold is clicked, the round score will be hold, and it'll be the next player's turn
document.querySelector('.btn-hold').addEventListener('click',function(){
	//if(dice != 1){
		globalScore[y] += roundScore;
		roundScore = 0;
		document.querySelector('#roundScore-'+ y).textContent = roundScore;// update the roundscore
		document.querySelector('#score-'+ y).textContent = globalScore[y];// update the score
		if(y == 0) y = 1;
		else y = 0;
	//}
});

//init the game
document.querySelector('.btn-new').addEventListener('click',function(){
	roundScore = 0;
	globalScore = [0,0];
	document.querySelector('#score-0').textContent = 0;
	document.querySelector('#score-1').textContent = 0;
	document.querySelector('#roundScore-0').textContent = 0;
	document.querySelector('#roundScore-1').textContent = 0;
});