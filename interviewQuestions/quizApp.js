var score = 0;

(function(){

	var Question = function(question, answers,isCorrect){
		this.question 	   = question;
		this.answers  	   = answers;
		this.isCorrect     = isCorrect;
	}

	var q1 = new Question('what is the coolest job in the world?', ['teacher','software engineer','manager'], 1);
	var q2 = new Question('what is the difference between JSP and JS?', ['JSP is an OOP language while JS is a functional programming language','there is no difference at all','JS is a scripting language while JSP is an Ajax based technology'],2);
	var q3 = new Question('what is the coolest programming language ever?', ['JS','java','C','Python'],2);
	var q4 = new Question('what is my name?', ['yosra','arsoy','pamella'],0);
	
	var questions = [q1, q2, q3, q4];

	Question.prototype.askQuestion = function(){
	    console.log(this.question);//display the questions
	    for(let i=0; i<this.answers.length; i++)console.log(i+'. '+this.answers[i]);
	}

	Question.prototype.checkAnswer = function(){
	    if(userAnswer == this.isCorrect){
	    	++score;
			console.log('correct answer!\n'+'your score now is: '+score);	
	    }
	    else console.log('try again\n'+'your score is still: '+score);
	}

	while(1){
		var x = Math.trunc(Math.random()*questions.length);
		questions[x].askQuestion();
		userAnswer = prompt('Please select the correct answer!');
		questions[x].checkAnswer();
		playing = prompt('Wanna continue playing? (yes/no)');
		if(playing == 'no') break;
	}
})();

/*
//private
var Question = (function(question, answers,isCorrect){
	this.question 	   = question;
	this.answers  	   = answers;
	this.isCorrect     = isCorrect;
});

var q1 = new Question('what is the coolest job in the world?', ['teacher','software engineer','manager'], 1);
var q2 = new Question('what is the difference between JSP and JS?', ['JSP is an OOP language while JS is a functional programming language','there is no difference at all','JS is a scripting language while JSP is a Ajax based technology','JS is client side side and JSP is server side'],3);
var q3 = new Question('what is the coolest programming language?', ['JS','java','C','Python'],2);
var q4 = new Question('what is your name?', ['yosra','arsoy'],0);
var questions = [q1, q2, q3, q4];


var x = Math.trunc(Math.random()*questions.length);
console.log(x);
console.log(questions[x]);

//private
Question.prototype.askQuestion = (function(){
    console.log(this.question);//display the questions
    for(let i=0; i<this.answers.length; i++)console.log(i+'. '+this.answers[i]);
});

//private
Question.prototype.checkAnswer = (function(){
    if(userAnswer == this.isCorrect) console.log('correct answer!');
    else console.log('try again');
});

questions[x].askQuestion();
userAnswer = prompt('Please select the correct answer!');
questions[x].checkAnswer();
*/
