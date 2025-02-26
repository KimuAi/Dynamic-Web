'use strict';

        const maakBestelling = (drank = "cola", snack = "chips") => ({ drank, snack });

        const output = document.getElementById('bestellingen');

        const bestelling1 = maakBestelling();
        const bestelling2 = maakBestelling("fanta");
        const bestelling3 = maakBestelling("sprite", "nootjes");

        output.innerHTML += `
            <div class="showBestelling1">
                bestelling1: ${bestelling1.drank} en ${bestelling1.snack}
            </div>
            <div class="showBestelling2">
                bestelling2: ${bestelling2.drank} en ${bestelling2.snack}
            </div>
            <div class="showBestelling3">
                bestelling3: ${bestelling3.drank} en ${bestelling3.snack}
            </div>
        `;