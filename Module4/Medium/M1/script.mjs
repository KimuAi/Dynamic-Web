class Voertuig {
    constructor(merk, model, prijs) {
        this.merk = merk;
        this.model = model;
        this.prijs = prijs;
        this.beschikbaar = true;
    }

    verhuur = () => {
        if (this.beschikbaar) {
            this.beschikbaar = false;
            return `${this.merk} ${this.model} is verhuurd.`;
        } else {
            return `${this.merk} ${this.model} is al verhuurd.`;
        }
    }

    retourneer = () => {
        this.beschikbaar = true;
        return `${this.merk} ${this.model} is teruggebracht.`;
    }
}

const voertuigen = [
    new Voertuig('BMW', '320i', 50),
    new Voertuig('Audi', 'A3', 55)
];

const toonVoertuigen = () => {
    const tableBody = document.getElementById('vehicleList');
    tableBody.innerHTML = '';
    voertuigen.forEach((v, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${v.merk}</td>
            <td>${v.model}</td>
            <td>${v.prijs} EUR</td>
            <td>${v.beschikbaar ? 'Beschikbaar' : 'Niet beschikbaar'}</td>
            <td>
                <button onclick="verhuurVoertuig(${index})">Verhuur</button>
                <button onclick="retourneerVoertuig(${index})">Retourneer</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

const verhuurVoertuig = (index) => {
    const bericht = voertuigen[index].verhuur();
    document.getElementById('output').innerText = bericht;
    toonVoertuigen();
}

const retourneerVoertuig = (index) => {
    const bericht = voertuigen[index].retourneer();
    document.getElementById('output').innerText = bericht;
    toonVoertuigen();
}

toonVoertuigen();
