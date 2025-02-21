'use strict'

// Objecten om de studentgegevens op te slaan
const students = {
  Alex: [],
  Sam: [],
  Jo: []
};

// Functie om een score toe te voegen
document.getElementById('addGrade').addEventListener('click', function() {
  const studentName = document.getElementById('student').value;
  const course = document.getElementById('course').value;
  const grade = parseInt(document.getElementById('grade').value);

  if(course && !isNaN(grade)) {
    students[studentName].push({ course, grade });
    displayResults(); // Resultaten opnieuw tonen
  }
});

// Functie om de resultaten te tonen
function displayResults() {
  const overview = document.getElementById('studentOverview');
  overview.innerHTML = ''; // Verwijder bestaande resultaten

  for (const studentName in students) {
    const studentData = students[studentName];
    let studentHTML = `<h3>${studentName}</h3>`;
    let totalScore = 0;
    let highestScore = 0;
    let lowestScore = 20;

    // Toon vakken met scores en bereken totalen
    studentData.forEach(({ course, grade }) => {
      studentHTML += `<p>${course}: ${grade}</p>`;
      totalScore += grade;
      if(grade > highestScore) highestScore = grade;
      if(grade < lowestScore) lowestScore = grade;
    });

    // Gemiddelde score berekenen
    const averageScore = totalScore / studentData.length;

    studentHTML += `<p>Gemiddelde Score: ${averageScore.toFixed(2)}</p>`;
    studentHTML += `<p>Hoogste Score: ${highestScore}</p>`;
    studentHTML += `<p>Laagste Score: ${lowestScore}</p>`;
    overview.innerHTML += studentHTML;
  }
}
