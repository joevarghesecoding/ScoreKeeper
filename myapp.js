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
const h2 = document.querySelector('h2');

playing_to.addEventListener('change', (e) => {
    console.log(e.target.value);
    final_score = e.target;
})

player_one.addEventListener('click', (e) => {
    player1_score++;
    h2.innerText = `${player1_score} to ${player2_score}`;
    console.log(score1.innerText);
    if(player1_score == final_score){
        score1.style.color = 'green';
        score2.style.color = 'red';
        score_btn.disabled = true;
    }

})

player_two.addEventListener('click', (e) => {
    player2_score++;
    h2.innerText = `${player1_score} to ${player2_score}`;
    if(player2_score == final_score){
        score1.style.color = 'red';
        score2.style.color = 'green';
        score_btn.disabled = true;
    }
})

reset.addEventListener('click', (e) => {
    h2.innerText= "0 to 0";
    final_score = 3;
    player1_score = 0;
    player2_score = 0;
    score1 = 0;
    score2 = 0;
    score_btn.disabled = false;
})


