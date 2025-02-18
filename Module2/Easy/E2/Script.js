'use strict';

// Functie om de receptkaart te maken
function generateRecipeCard() {
  //de waarden van de invoervelden
  const recipeName = document.getElementById('recipeName').value;
  const preparationTime = document.getElementById('prepTime').value;
  const ingredientsText = document.getElementById('ingredients').value;

  // ingrediënten in een array & gesplitst op nieuwe regels
  const ingredientsArray = ingredientsText.split('\n').map(ingredient => ingredient.trim()).filter(ingredient => ingredient !== '');

  // receptkaart met template literals
  const recipeCard = `🥘 ${recipeName}
⏱️ Bereidingstijd: ${preparationTime} minuten

Ingrediënten:
${ingredientsArray.join('\n')}
`;

  // Toon de receptkaart in het resultaat
  document.getElementById('result').innerText = recipeCard;
}

// Voeg een event listener toe aan de knop om de receptkaart te genereren
document.getElementById('generateCard').addEventListener('click', generateRecipeCard);
