class Student {
    constructor(naam, vakken) {
      this.naam = naam;
      this.vakken = vakken;
    }

    voegPuntToe(vak, punt) {
      this.vakken[vak] = punt;
    }

    gemiddelde() {
      let totaal = Object.values(this.vakken).reduce((acc, punt) => acc + punt, 0);
      return totaal / Object.keys(this.vakken).length;
    }

    toonRapport() {
      let vakkenString = Object.entries(this.vakken).map(([vak, punt]) => `${vak}: ${punt}`).join('<br>');
      return `${this.naam}'s Rapport:<br>${vakkenString}<br>Gemiddelde: ${this.gemiddelde().toFixed(2)}`;
    }
  }

  // Creëer studenten
  let student1 = new Student('Jan', { Wiskunde: 7, Nederlands: 8 });
  student1.voegPuntToe('Engels', 6);

  let student2 = new Student('Maria', { Geschiedenis: 9, Biologie: 8 });
  student2.voegPuntToe('Scheikunde', 7);

  // Toon rapporten in de 'output' div
  document.getElementById('output').innerHTML = student1.toonRapport() + "<br><br>" + student2.toonRapport();