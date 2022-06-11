const player_one = document.querySelector('#player-one');
const player_two = document.querySelector('#player-two');
const reset = document.querySelector('#reset');
const playing_to = document.querySelector('#score-choice');
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const buttons = document.querySelector('.button');
const score_btn = document.querySelector('.score-btn');
let final_score = 3;
let player1_score = 0;
let player2_score = 0;
let isGameOver = false;
const h2 = document.querySelector('h2');

playing_to.addEventListener('change', (e) => {
    // console.log('final score change' + e.target.value);
    final_score = e.target.value;
    // console.log('final_score ' + final_score);
    resetGame(final_score);
})

player_one.addEventListener('click', (e) => {
    if(!isGameOver){
        player1_score++;
        score1.textContent = player1_score;
        // console.log('player1 score ' + player1_score);
        // console.log('final score in player ' + final_score);
        if(player1_score >= final_score){
            score1.style.color = 'green';
            score2.style.color = 'red';
            isGameOver = true;
        }
    }
   

})

player_two.addEventListener('click', (e) => {
    if(!isGameOver){
        player2_score++;
        score2.textContent = player2_score;
        // console.log('player2 score ' + player2_score);
        // console.log('final score in player ' + final_score);
        if(player2_score >= final_score){
            score1.style.color = 'red';
            score2.style.color = 'green';
            isGameOver = true;
        }
    }

})

function resetGame(val) {
    final_score = val;
    player1_score = 0;
    player2_score = 0;
    isGameOver = false;
    score1.textContent = player1_score;
    score2.textContent = player2_score;
    score1.style.color= 'black';
    score2.style.color = 'black';
}

reset.addEventListener('click', (e) => {
    resetGame(playing_to.value);
})


