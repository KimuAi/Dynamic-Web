'use strict'

document.addEventListener("DOMContentLoaded", () => {
    let scores = [];
    const invoer = document.getElementById("score"),
          knop = document.getElementById("addScore"),
          gemiddeld = document.getElementById("average"),
          hoogste = document.getElementById("highest"),
          lijst = document.getElementById("scoreList");

    knop.addEventListener("click", () => {
        let score = parseFloat(invoer.value);
        if (score >= 0 && score <= 20) {
            scores.push(score);
            bijwerken();
            tonen();
            invoer.value = "";
        } else alert("Voer een geldige score in (0-20). ");
    });

    function bijwerken() {
        gemiddeld.textContent = (scores.reduce((a, b) => a + b, 0) / scores.length || 0).toFixed(2);
        hoogste.textContent = Math.max(...scores, 0);
    }

    function tonen() {
        lijst.innerHTML = scores.map(s => `<li>${s}</li>`).join("");
    }
});
