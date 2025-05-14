let score = JSON.parse(localStorage.getItem('score')) || {
wins: 0,
losses: 0,
ties: 0
};

updateScoreElement();

function playGame(playerMove){
    const computerMove = pickComputerMove();
    
    let result = '';
    
    if (playerMove ==='Friends'){
        if (computerMove === 'Friends') {
            result = 'tie';
            }else if (computerMove === 'Pocket99') {
                result = 'You lose';
            }else if (computerMove === 'Lupin'){
                result = 'You win';
            }
    
    } else if (playerMove === 'Pocket99') {
       if  (computerMove === 'Friends') {
            result = 'You win';
    
            }
            else if (computerMove === 'Pocket99') {
                result = 'tie';
            }else if (computerMove === 'Lupin'){
                result = 'You lose';
            }
    } else if (playerMove ==='Lupin'){
        if (computerMove === 'Friends') {
            result = 'You win';
            }else if (computerMove === 'Pocket99') {
                result = 'You lose';
            }else if (computerMove === 'Lupin'){
                result = 'tie';
            }
    
    }
    
    if (result === 'You win'){
        score.wins += 1;
    }else if (result ==='You lose'){
        score.losses += 1;
    }else if (result === 'tie'){
        score.ties +=1
    }
    localStorage.setItem('score', JSON.stringify(score));
    
       
    

    updateScoreElement ();

   
        document.querySelector('.js-result').innerHTML = result;
    
    document.querySelector('.js-moves').innerHTML = 
        `You
        <img src="img/${playerMove}-emoji.png" alt="">
        <img src="img/${computerMove}-emoji.png" alt="">
        computer`;
    }
    
    function updateScoreElement (){
document.querySelector('.js-score').innerHTML = `
 Wins: ${score.wins}, 
Losses: ${score.losses}, 
Ties: ${score.ties}`;
    }
 
    
    

function pickComputerMove(){
    const rondomNumber = Math.random();
let  computerMove = '';


if (rondomNumber >= 0  && rondomNumber <
1 / 3) {

computerMove = 'Friends';
}else if (rondomNumber >= 1/3 && rondomNumber < 2/3) {
    computerMove = 'Pocket99'
}else if (rondomNumber >= 2/3 && rondomNumber < 1){
    computerMove = 'Lupin';

} 
return computerMove
}







   