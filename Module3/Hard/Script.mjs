const maakSpeler = (naam = "Player 1") => ({ naam, level: 1, health: 100 });

const doeSchade = (speler, schade) => {
    speler.health = Math.max(0, speler.health - schade);
};

const levelOmhoog = (speler) => {
    speler.level++;
    speler.health = 100;
};

let huidigeSpeler = null;

const updateUI = () => {
    const playerStatsDiv = document.getElementById("playerStats");
    if (huidigeSpeler) {
        playerStatsDiv.innerHTML = `<div class="player-card">
            <h2>${huidigeSpeler.naam}</h2>
            <p>Level: ${huidigeSpeler.level}</p>
            <p>Health: ${huidigeSpeler.health}</p>
        </div>`;
    } else {
        playerStatsDiv.innerHTML = "<p>Geen speler geselecteerd</p>";
    }
};

const maakNieuweSpeler = () => {
    const naam = document.getElementById("playerName").value || "Player 1";
    huidigeSpeler = maakSpeler(naam);
    updateUI();
};

const doeSchadeBijSpeler = () => {
    if (huidigeSpeler) {
        doeSchade(huidigeSpeler, 25);
        updateUI();
    }
};

const levelSpelerOp = () => {
    if (huidigeSpeler) {
        levelOmhoog(huidigeSpeler);
        updateUI();
    }
};

document.addEventListener("DOMContentLoaded", updateUI);
