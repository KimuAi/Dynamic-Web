const playerNameInput = document.getElementById("playerName");
const scoreInput = document.getElementById("score");
const scoreBoard = document.getElementById("scoreBoard");
const voegScoreToeButton = document.querySelector("button");

const scoreLijst = [];

voegScoreToeButton.addEventListener("click", () => {
    const naam = playerNameInput.value.trim() || "Onbekend";
    const score = parseInt(scoreInput.value, 10) || 0;

    if (isNaN(score) || score < 0) {
        alert("Voer een geldige score in.");
        return;
    }

    const scoreObject = { naam, score };
    scoreLijst.push(scoreObject);
    
    scoreBoard.innerHTML = scoreLijst.map(s => `<p>${s.naam}: ${s.score}</p>`).join("");
    
    playerNameInput.value = "";
    scoreInput.value = "";
});
