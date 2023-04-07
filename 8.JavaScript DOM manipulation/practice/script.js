'use strict';
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number🎉!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNuumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // when no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number ';
    displayMessage('⛔ No Number ');
  }

  // when player wins
  else if (guess == secretNuumber) {
    displayMessage('🎉 Correct Numbber!');
    document.querySelector('.number').textContent = secretNuumber;

    // these are inline styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //When guess is wrong
  else if (guess != secretNuumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //  guess > secretNuumber ? '📈 Too heigh!' : '📉 Too Low';
      displayMessage(guess > secretNuumber ? '📈 Too heigh!' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//When guess is too high
// else if (guess > secretNuumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈 Too heigh!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
// }

//when the guess is too low
// else if (guess < secretNuumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📉 Too Low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
// }
//});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNuumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing ....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
