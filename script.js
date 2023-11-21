let score = {
    won: 0,
    lost: 0,
    tie: 0,
  };
  localStorage.setItem("Highest_score", JSON.stringify(score));
  function spsGame(user) {
    let comp = Math.random() * 3;
    if (comp > 0 && comp <= 1) {
      comp = "stone";
    } else if (comp > 1 && comp <= 2) {
      comp = "paper";
    } else {
      comp = "scissor";
    }
    let winner;
    if (comp == user) {
      winner = "Tie";
      score.tie++;
    } else if (
      (comp == "scissor" && user == "paper") ||
      (comp == "paper" && user == "stone") ||
      (comp == "stone" && user == "scissor")
    ) {
      score.lost++;
      winner = "computer";
    } else if (
      (user == "scissor" && comp == "paper") ||
      (user == "paper" && comp == "stone") ||
      (user == "stone" && comp == "scissor")
    ) {
      score.won++;
      winner = "user";
    }
    document.querySelector(".usechoose").innerText =
      "User Choose : " + user;
    document.querySelector(
      ".compchoose"
    ).innerText = `Compter Choose : ${comp}`;
    if (winner == "Tie") {
      document.querySelector(".won").innerText = ` Match Tie`;
    } else
      document.querySelector(".won").innerText = `${winner} won the match`;
    displayScore();
  }
  function displayScore() {
    document.querySelector(".play").innerText = `You Play ${
      score.lost + score.tie + score.won
    } times`;
    document.querySelector(
      ".wonS"
    ).innerText = `You won ${score.won} times`;
    document.querySelector(
      ".lost"
    ).innerText = `You lost ${score.lost} times`;
    document.querySelector(
      ".tie"
    ).innerText = `Match Tie ${score.tie} times`;
  }
  function stop() {
    let obj = JSON.parse(localStorage.getItem("Highest_score"));
    if (obj.won < score.won) {
      alert(`Your Score : ${score.won}\nHighest Score : ${score.won}`);
      localStorage.setItem("Highest_score", JSON.stringify(score));
      score.won = 0;
    score.tie = 0;
    score.lost = 0;
    } else {
      alert(`Your Score : ${score.won}\nHighest Score : ${obj.won}`);
      score.won = 0;
    score.tie = 0;
    score.lost = 0;
      return;
    }
  }
  function reset() {
    score.won = 0;
    score.tie = 0;
    score.lost = 0;
    localStorage.setItem("Highest_score", JSON.stringify(score));
    
  }