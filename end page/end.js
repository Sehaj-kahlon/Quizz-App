const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  console.log(username.value);
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();
  //storing score and names of the players
  const Score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScore.push(Score);
  highScore.sort((a, b) => b.score - a.score);
  //keep upto 5 max scores 

  highScore.spice(5);
  localStorage.setItem("highScores", JSON.stringify(highScore));
  
  console.log(highScore);
};