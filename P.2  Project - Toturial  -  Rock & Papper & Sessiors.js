let score = JSON.parse(localStorage.getItem
    ('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

upadateScoreElement ();


/*
if (!score){
score = {
    wins: 0,
    losses: 0,
    ties: 0
}
}
*/

let isAutoPlaying = false

let intervalId;
function autoPlay(){
    if (!isAutoPlaying){
 intervalId =  setInterval(function (){
            const playerMove = pickComputerMove();
                    playGame(playerMove );
                },1000)
                isAutoPlaying = true; 
    }else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
   
}

function playGame (playerMove){
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Scissors'){
        if (computerMove ==='rock') {
            result = 'You lose';
        }
        else if (computerMove === 'paper') {
        result = 'You win';
        }
        else if (computerMove === 'Scissors'){
            result = 'tie';
        }
    
    } else  if (playerMove === 'paper'){
        if (computerMove ==='rock') {
            result = 'You win';
        }else if (computerMove === 'paper') {
        result = 'tie';
        }  else if (computerMove === 'Scissors'){
            result = 'You lose';
        }
    } else if (playerMove === 'rock'){
        if (computerMove ==='rock') {
            result = 'tie';
        }
        else if (computerMove === 'paper') {
        result = 'You lose';
        }
        else if (computerMove === 'Scissors'){
            result = 'You win';
        }
    }

if (result === 'You win'){
    score.wins += 1;
} else if (result === 'You lose') {
    score.losses +=1;
} else if (result ==='tie'){
    score.ties +=1;
}

localStorage.setItem('score', JSON.stringify(score));


upadateScoreElement ();


document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves').innerHTML 
= `You
<img src="imging/${playerMove}-emoji.png" alt="">
<img src="imging/${computerMove}-emoji.png" alt="">
computer`;      

}   

function upadateScoreElement (){
    document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins},
Losses: ${score.losses}, 
Ties: ${score.ties}`;
}

function pickComputerMove (){
        const rondomNumber = Math.random();

        let  computerMove = '';

if (rondomNumber >= 0  && rondomNumber < 1 / 3) {

computerMove = 'rock';
}else if (rondomNumber >= 1/3 && rondomNumber < 2/3) {
       computerMove = 'paper'
}else if (rondomNumber >= 2/3 && rondomNumber < 1){
     computerMove = 'Scissors';

} 
return computerMove;
}