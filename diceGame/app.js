
var currentScore, currentPlayer, globalScore;

init();

//an init function 
function init(){
	currentScore = 0;
	currentPlayer = 0;
	globalScore = [0,0];
	//document.querySelector('.dice').style.display    = 'none';
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.getElementById('score-0').textContent   = '0';
	document.getElementById('score-1').textContent   = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
};

document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-roll').addEventListener('click',function(){
	document.querySelector('.player-'+currentPlayer+'-panel').classList.add('active');
	if(globalScore[0] < 100 && globalScore[1] < 100){
		var dice = Math.trunc(Math.random()*6)+1;
		console.log(dice);
		document.querySelector('.dice').src = 'dice-'+dice+'.png';
		if(dice == 1){
			currentPlayer = nextPlayer();
		} 
		else {
			currentScore += dice;
			document.getElementById('current-'+currentPlayer).textContent = currentScore; 
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(globalScore[currentPlayer] < 100){
		globalScore[currentPlayer] += currentScore;
		if(globalScore[currentPlayer] >= 100) {
			document.getElementById('name-'+currentPlayer).textContent = 'Winner !';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-'+currentPlayer+'-panel').classList.add('winner');//style.display = 'none'; 
			document.querySelector('.player-'+currentPlayer+'-panel').classList.remove('active');
		}
		else{
			document.getElementById('score-'+currentPlayer).textContent = globalScore[currentPlayer];
			currentPlayer = nextPlayer();
		}
	}
});


function nextPlayer(){
	currentScore = 0;
	document.getElementById('current-'+currentPlayer).textContent = currentScore;
	document.querySelector('.player-'+currentPlayer+'-panel').classList.remove('active');
	return currentPlayer == 0 ? 1 : 0;	
	document.querySelector('.player-'+currentPlayer+'-panel').classList.add('active');
}


