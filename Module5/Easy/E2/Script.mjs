  //wacht totdat de knop 5 keer is ingedrukt
  const waitForClick = async () => {
    let clickCount = 0;

    //Haal de elementen voor de counter en de boodschap op
    const counterElement = document.querySelector('.counter');
    const messageElement = document.querySelector('.message');

    // Wacht totdat de gebruiker 5 keer heeft geklikt
    while (clickCount < 5) {
      // Wacht op de click
      await new Promise(resolve => {
        document.getElementById('clickButton').onclick = () => {
        if( clickCount < 5)
          clickCount++; 
          // Werk de teller bij
          counterElement.textContent = clickCount;  
          // Geef aan dat de klik is voltooid
          resolve();  
        };
      });
    }

    messageElement.textContent = "Gefeliciteerd!";
  };

  // Roept de functie om op de clicken te wachten
  waitForClick();