// Wachtfunctie om voor een bepaalde tijd te pauzeren
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Verlicht het blok door de kleur te veranderen en daarna terug te keren naar de originele kleur
async function lightBlock(block) {
    const originalColor = block.style.backgroundColor; 
    block.style.backgroundColor = 'white'; 
    await wait(500); 
    block.style.backgroundColor = originalColor; 
}

// Start de lichtshow
async function startLightshow() {
    const blocks = document.querySelectorAll('.block'); 

    // Doorloop de blokken van links naar rechts
    for (let block of blocks) {
        await lightBlock(block); 
        await wait(200); 
    }

    // Doorloop de blokken van rechts naar links
    for (let i = blocks.length - 1; i >= 0; i--) {
        // Verlicht het blok
        await lightBlock(blocks[i]); 
        await wait(200); 
    }
}

// Event listener voor de startknop
document.getElementById('startBtn').addEventListener('click', startLightshow); 
