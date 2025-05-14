let score = JSON.parse(localStorage.getItem('score')) || {
wins: 0,
losses: 0,
ties: 0
};

function playGame(playerMove){
    const computerMove = pickComputerMove();
    
    let result = '';
    
    if (playerMove === 'Firends'){
    
    
    if (computerMove === 'Friends') {
    result = 'tie';
    }else if (computerMove === 'Pocket99') {
    result = 'You win';
    }else if (computerMove === 'lupin'){
    result = 'You lose';
    }
    } else if (playerMove === 'Poket99') {
       if  (computerMove === 'Friends') {
            result = 'You win';
    
            }
            else if (computerMove === 'Pocket99') {
                result = 'tie';
            }else if (computerMove === 'lupin'){
                result = 'You lose';
            }
    } else if (playerMove ==='Lupin'){
        if (computerMove === 'Friends') {
            result = 'You win';
            }else if (computerMove === 'Pocket99') {
                result = 'You lose';
            }else if (computerMove === 'lupin'){
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
    
    alert (`You picked ${playerMove}. computer picked ${computerMove}. ${result}
        Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
    `);
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
    computerMove = 'lupin';

} 
return computerMove
}







   