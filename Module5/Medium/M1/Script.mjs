// Functie om een afbeelding te laden
const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
  
      img.onload = () => resolve(img);  // Als de afbeelding is geladen
    });
  };
  
  // Functie om de afbeeldingen sequentieel te laden
  const loadImages = async () => {
    const images = [
      "https://i.pinimg.com/736x/6c/c7/03/6cc70302ac1a393870751b7e21c9a71e.jpg",
      "https://i.pinimg.com/736x/6c/c7/03/6cc70302ac1a393870751b7e21c9a71e.jpg",
      "https://i.pinimg.com/736x/6c/c7/03/6cc70302ac1a393870751b7e21c9a71e.jpg"
    ];
  
    const gallery = document.querySelector('.gallery');
    const progressBar = document.querySelector('.progress-bar');
    let progress = 0;
  
    // Laad de afbeeldingen één voor één
    for (let i = 0; i < images.length; i++) {
      try {
        // Wacht totdat de afbeelding is geladen
        const img = await loadImage(images[i]);
        gallery.appendChild(img);  
  
        // Werk de voortgangsbalk bij
        progress = ((i + 1) / images.length) * 100;
        progressBar.style.width = `${progress}%`;
        // Toon het percentage
        progressBar.textContent = `${Math.round(progress)}%`;  
  
        // Wacht 1 sec voor dat volgende afbeelding laad
        await new Promise(resolve => setTimeout(resolve, 1000));
  
      } catch (error) {
        // Toon fouten in de console als die er zijn
        console.error(error); 
      }
    }
  };
  
  document.getElementById('loadButton').addEventListener('click', loadImages);
  