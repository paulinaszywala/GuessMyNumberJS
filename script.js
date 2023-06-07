'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let usersScore = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // WHEN THERE'S NO INPUT
  if (!guess) {
    displayMessage('⛔ No number! ');

    // WHEN GUESS IS OUT OF RANGE
  } else if (guess < 1 || guess > 20) {
    displayMessage('🛑 Out of range!');
    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.getElementById('guess').disabled = true;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (usersScore > highscore) {
      document.querySelector('.highscore').textContent = usersScore;
      highscore = usersScore;
    }

    //WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (usersScore > 1) {
      displayMessage(
        guess > secretNumber ? '😱 Too high number!' : '😔 Too low number!'
      );
      usersScore--;
      document.querySelector('.score').textContent = usersScore;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.highscore').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  usersScore = 20;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';
  document.getElementById('guess').disabled = false;
  document.querySelector('.score').textContent = usersScore;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
