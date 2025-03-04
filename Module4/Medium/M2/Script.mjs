class Bankrekening {
    static rekeningNummerTeller = 1000;
    static rekeningen = [];
    static transacties = [];

    constructor(eigenaar, saldo) {
        this.rekeningNummer = Bankrekening.rekeningNrGenerator();
        this.eigenaar = eigenaar;
        this._saldo = saldo;
        Bankrekening.rekeningen.push(this);
    }

    static rekeningNrGenerator() {
        return Bankrekening.rekeningNummerTeller++;
    }

    static validerenTransactie(from, to, bedrag) {
        if (from === to) {
            return { succes: false, bericht: "De rekeningen zijn gelijk, transactie mislukt!" };
        }
        if (from._saldo < bedrag) {
            return { succes: false, bericht: "Onvoldoende saldo op de rekening!" };
        }
        return { succes: true, bericht: "Transactie kan worden uitgevoerd!" };
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(bedrag) {
        if (bedrag < 0) {
            console.log("Saldo kan niet negatief zijn.");
        } else {
            this._saldo = bedrag;
        }
    }

    storten(bedrag) {
        if (bedrag > 0) {
            this._saldo += bedrag;
            Bankrekening.transacties.push(`Storting van €${bedrag} op rekening ${this.rekeningNummer}`);
            return { succes: true, bericht: `Storting van €${bedrag} succesvol!` };
        }
        return { succes: false, bericht: "Stortingsbedrag moet positief zijn." };
    }

    opnemen(bedrag) {
        if (this._saldo >= bedrag) {
            this._saldo -= bedrag;
            Bankrekening.transacties.push(`Opname van €${bedrag} van rekening ${this.rekeningNummer}`);
            return { succes: true, bericht: `Opname van €${bedrag} succesvol!` };
        }
        return { succes: false, bericht: "Onvoldoende saldo voor opname." };
    }

    get overzicht() {
        return `Rekeningnummer: ${this.rekeningNummer}, Eigenaar: ${this.eigenaar}, Saldo: €${this._saldo}`;
    }
}

class Spaarrekening extends Bankrekening {
    constructor(eigenaar, saldo, rentePercentage) {
        super(eigenaar, saldo);
        this.rentePercentage = rentePercentage;
    }

    renteToevoegen() {
        const renteBedrag = this._saldo * (this.rentePercentage / 100);
        this._saldo += renteBedrag;
        Bankrekening.transacties.push(`Rente van €${renteBedrag.toFixed(2)} toegevoegd aan rekening ${this.rekeningNummer}`);
    }
}

// Maak een paar rekeningen aan
const rekening1 = new Bankrekening("Jan", 500);
const rekening2 = new Spaarrekening("Karel", 1000, 5);
const rekening3 = new Bankrekening("Kristen", 2000);

// Voer transacties uit
rekening1.storten(200);
rekening2.opnemen(100);
rekening3.storten(300);
rekening2.renteToevoegen();

// Toon overzicht van rekeningen
let accountsHtml = "<h2>Rekeningen Overzicht</h2>";
Bankrekening.rekeningen.forEach(rekening => {
    accountsHtml += `<p>${rekening.overzicht}</p>`;
});

document.getElementById('accounts').innerHTML = accountsHtml;

// Toon overzicht van transacties
let transactionsHtml = "<h2>Uitgevoerde Transacties</h2>";
Bankrekening.transacties.forEach(transactie => {
    transactionsHtml += `<p>${transactie}</p>`;
});

document.getElementById('transactions').innerHTML = transactionsHtml;