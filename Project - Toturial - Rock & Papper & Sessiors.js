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

document.querySelector('.js-rock-button').addEventListener(
    'click', () => {
        playGame('rock');
    }
)
document.querySelector('.js-paper-button').addEventListener(
    'click', () => {
        playGame('paper');
    }
)
document.querySelector('.js-scissors-button').addEventListener
(
    'click', ()=>{
        playGame('scissors')
    }
)

/*
document.body.addEventListener('keydown' , () => {
    console.log('keydown');
} )
*/
/*
document.body.addEventListener('keydown', (event) => {
console.log(event.key);
})
*/
document.body.addEventListener('keydown', (event) => {
if(event.key === 'a'){
playGame('rock');
} else if (event.key === 's'){
playGame('paper');
} else if (event.key ==='d'){
playGame('scissors');
}   })

function playGame (playerMove){
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissors'){
        if (computerMove ==='rock') {
            result = 'You lose';
        }
        else if (computerMove === 'paper') {
        result = 'You win';
        }
        else if (computerMove === 'scissors'){
            result = 'tie';
        }
    
    } else  if (playerMove === 'paper'){
        if (computerMove ==='rock') {
            result = 'You win';
        }else if (computerMove === 'paper') {
        result = 'tie';
        }  else if (computerMove === 'scissors'){
            result = 'You lose';
        }
    } else if (playerMove === 'rock'){
        if (computerMove ==='rock') {
            result = 'tie';
        }
        else if (computerMove === 'paper') {
        result = 'You lose';
        }
        else if (computerMove === 'scissors'){
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
     computerMove = 'scissors';

} 
return computerMove;
}