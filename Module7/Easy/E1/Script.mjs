// Functie om data op te halen met fetch
async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1"; 
  // Element om de data of foutmelding te tonen
  const resultElement = document.getElementById("result"); 

  try {
    const response = await fetch(url); 
    if (!response.ok) {
      // Controleer of de fetch succesvol was
      throw new Error("Netwerkfout: de data kon niet worden opgehaald");
    }
    // Zet de response om naar JSON
    const data = await response.json(); 
    resultElement.textContent = `Title: ${data.title}`; 
  } catch (error) {
    resultElement.textContent = `Fout: ${error.message}`; 
  }
}

// Eventlistener voor de knop om de fetchData functie aan te roepen
document.getElementById("fetchButton").addEventListener("click", fetchData);
