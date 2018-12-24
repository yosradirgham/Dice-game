
var currentScore, currentPlayer, globalScore, end;

init();

function init(){
	currentScore = 0;
	currentPlayer = 0;
	globalScore = [0,0];
	end = false;
	//document.querySelector('.dice').style.display    = 'none';
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.getElementById('score-0').textContent   = '0';
	document.getElementById('score-1').textContent   = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
};

document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-roll').addEventListener('click',function(){
	document.querySelector('.player-'+currentPlayer+'-panel').classList.add('active');
	if(!end){
		var dice = Math.trunc(Math.random()*6)+1;
		document.querySelector('.dice').src = 'dice-'+dice+'.png';
		if(dice == 1) currentPlayer = nextPlayer();
		else {
			currentScore += dice;
			document.getElementById('current-'+currentPlayer).textContent = currentScore; 
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
		globalScore[currentPlayer] += currentScore;
		if(globalScore[currentPlayer] >= 100) {
			end = true;
			document.getElementById('name-'+currentPlayer).textContent = 'Winner !';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-'+currentPlayer+'-panel').classList.add('winner');//style.display = 'none'; 
			document.querySelector('.player-'+currentPlayer+'-panel').classList.remove('active');
		}
		else{
			document.getElementById('score-'+currentPlayer).textContent = globalScore[currentPlayer];
			currentPlayer = nextPlayer();
		}
});


function nextPlayer(){
	currentScore = 0;
	document.getElementById('current-'+currentPlayer).textContent = currentScore;
	document.querySelector('.player-'+currentPlayer+'-panel').classList.remove('active');
	return currentPlayer == 0 ? 1 : 0;	
}


