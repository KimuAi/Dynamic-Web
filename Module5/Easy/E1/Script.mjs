document.getElementById('startButton').onclick = () => {
    let colors = ['red', 'green', 'blue'];

    // Maak een functie die de achtergrondkleur wijzigt
    let changeColor = (i) => {
      if (i < colors.length) {
        document.body.style.backgroundColor = colors[i];

        // Wacht 1 seconde en roep de functie opnieuw aan met i + 1
        setTimeout(() => changeColor(i + 1), 1000);
      }
    };

    // Start het kleuren vanaf de eerste kleur (index 0)
    changeColor(0);
  };
