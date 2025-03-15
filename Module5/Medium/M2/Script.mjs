let timerInterval;
let cancelTimer = false;

const startButton = document.getElementById('startButton');
const cancelButton = document.getElementById('cancelButton');
const timerDisplay = document.getElementById('timerDisplay');
const message = document.getElementById('message');
const secondsInput = document.getElementById('seconds');

// Functie om de timer te starten
function startTimer() {
  const seconds = parseInt(secondsInput.value);
  
  // Maak een Promise om de timer countdown af te handelen
  const timerPromise = new Promise((resolve, reject) => {
    let timeRemaining = seconds;
    timerDisplay.textContent = timeRemaining;
    
    timerInterval = setInterval(() => {
      if (cancelTimer) {
        clearInterval(timerInterval); 
        reject('Timer geannuleerd'); 
      }
      
      timeRemaining -= 1;
      timerDisplay.textContent = timeRemaining;
      
      if (timeRemaining <= 0) {
        clearInterval(timerInterval); 
        resolve('Timer voltooid!'); 
      }
    }, 1000);
  });
  
  
  timerPromise
    .then(message => {
      messageElement(message); 
      cancelButton.disabled = true; 
    })
    .catch(error => {
      messageElement(error); 
      cancelButton.disabled = true; 
    })
    .finally(() => {
      startButton.disabled = false; 
    });
}

// Functie om berichten op de pagina weer te geven
function messageElement(messageText) {
  message.textContent = messageText;
  message.style.display = 'block';
}

// Functie om de actie van de knop af te handelen
function cancelTimerHandler() {
  cancelTimer = true; 
  messageElement('Timer geannuleerd'); 
}

// Voeg event listeners toe
startButton.addEventListener('click', () => {
  cancelTimer = false; 
  cancelButton.disabled = false; 
  startButton.disabled = true; 
  // Start de timer
  startTimer(); 
});

cancelButton.addEventListener('click', cancelTimerHandler); 
