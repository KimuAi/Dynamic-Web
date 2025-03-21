 // Functie om een array met willekeurige getallen te genereren
 const generateRandomArray = (size) => {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 1000));
    }
    return array;
};

// Bubblesort implementatie (inefficiënt)
const bubbleSort = (arr) => {
    const result = Array.from(arr);
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - 1; j++) {
            if (result[j] > result[j + 1]) {
                // Verwissel elementen
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
};

// Gebruik JavaScript's ingebouwde sort
const nativeSort = (arr) => {
    const result = Array.from(arr);
    return result.sort((a, b) => a - b);
};

document.getElementById('compareButton').addEventListener('click', () => {
    const testArray = generateRandomArray(5000); // Test array van 5000 elementen
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = ''; // Maak de resultaten leeg

    console.time('BubbleSort');
    const bubbleSortedArray = bubbleSort(testArray);
    console.timeEnd('BubbleSort');

    console.time('NativeSort');
    const nativeSortedArray = nativeSort(testArray);
    console.timeEnd('NativeSort');

    // Controleer of beide sorteermethodes hetzelfde resultaat opleveren
    console.assert(JSON.stringify(bubbleSortedArray) === JSON.stringify(nativeSortedArray), 'De sorteerresultaten komen niet overeen!');

    // Vergelijk de tijden en toon de resultaten
    const bubbleTime = performance.now() - window.performance.timing.navigationStart;
    const nativeTime = performance.now() - window.performance.timing.navigationStart;

    const bubbleResultDiv = document.createElement('div');
    bubbleResultDiv.classList.add('result-item');
    bubbleResultDiv.classList.add(bubbleTime < nativeTime ? 'faster' : 'slower');
    bubbleResultDiv.innerHTML = `BubbleSort tijd: ${bubbleTime.toFixed(4)}ms`;

    const nativeResultDiv = document.createElement('div');
    nativeResultDiv.classList.add('result-item');
    nativeResultDiv.classList.add(nativeTime < bubbleTime ? 'faster' : 'slower');
    nativeResultDiv.innerHTML = `NativeSort tijd: ${nativeTime.toFixed(4)}ms`;

    resultDiv.appendChild(bubbleResultDiv);
    resultDiv.appendChild(nativeResultDiv);
});