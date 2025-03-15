class Persoon {
    constructor(naam, email, leeftijd) {
        this._naam = naam;
        this._email = email;
        this._leeftijd = leeftijd;
    }

    get naam() {
        return this._naam;
    }

    set naam(value) {
        this._naam = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        if (this.isValidEmail(value)) {
            this._email = value;
        } else {
            console.error("Ongeldig emailformaat.");
        }
    }

    get leeftijd() {
        return this._leeftijd;
    }

    set leeftijd(value) {
        this._leeftijd = value;
    }

    isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
}

class Student extends Persoon {
    constructor(naam, email, leeftijd, studentnummer, studiejaar) {
        super(naam, email, leeftijd);
        this._studentnummer = studentnummer;
        this._studiejaar = studiejaar;
    }

    get studentnummer() {
        return this._studentnummer;
    }

    set studentnummer(value) {
        this._studentnummer = value;
    }

    get studiejaar() {
        return this._studiejaar;
    }

    set studiejaar(value) {
        this._studiejaar = value;
    }

    static zoekOpStudentnummer(nummer) {
        return students.find(student => student.studentnummer === nummer);
    }
}

class Docent extends Persoon {
    constructor(naam, email, leeftijd, vakgebied, aanstellingsdatum) {
        super(naam, email, leeftijd);
        this._vakgebied = vakgebied;
        this._aanstellingsdatum = aanstellingsdatum;
    }

    get vakgebied() {
        return this._vakgebied;
    }

    set vakgebied(value) {
        this._vakgebied = value;
    }

    get aanstellingsdatum() {
        return this._aanstellingsdatum;
    }

    set aanstellingsdatum(value) {
        this._aanstellingsdatum = value;
    }
}

class Cursus {
    constructor(titel, beschrijving, docent, ects, maximumStudenten) {
        this._titel = titel;
        this._beschrijving = beschrijving;
        this._docent = docent;
        this._ects = ects;
        this._maximumStudenten = maximumStudenten;
        this._inschrijvingen = [];
    }

    get titel() {
        return this._titel;
    }

    set titel(value) {
        this._titel = value;
    }

    get beschrijving() {
        return this._beschrijving;
    }

    set beschrijving(value) {
        this._beschrijving = value;
    }

    get docent() {
        return this._docent;
    }

    set docent(value) {
        this._docent = value;
    }

    get ects() {
        return this._ects;
    }

    set ects(value) {
        this._ects = value;
    }

    get maximumStudenten() {
        return this._maximumStudenten;
    }

    set maximumStudenten(value) {
        if (value < 0) {
            console.error("Het maximum aantal studenten mag niet negatief zijn.");
        } else {
            this._maximumStudenten = value;
        }
    }

    static zoekOpTitel(titel) {
        return courses.find(cursus => cursus.titel === titel);
    }
}

class Inschrijving {
    constructor(student, cursus, datum, status) {
        this._student = student;
        this._cursus = cursus;
        this._datum = datum;
        this._status = status || 'actief'; // default to 'actief'
    }

    get student() {
        return this._student;
    }

    get cursus() {
        return this._cursus;
    }

    get datum() {
        return this._datum;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    static controleerDubbele(student, cursus) {
        return inscriptions.some(inschrijving => inschrijving.student === student && inschrijving.cursus === cursus);
    }

    wijzigStatus(nieuweStatus) {
        this._status = nieuweStatus;
    }

    voegBeoordelingToe(beoordeling) {
        this._beoordeling = beoordeling;
    }
}

// Arrays om de data op te slaan
const students = [];
const teachers = [];
const courses = [];
const inscriptions = [];

// Functie om de UI te vullen
function toonCursussen() {
    const courseList = document.getElementById('course-list');
    courses.forEach(cursus => {
        const div = document.createElement('div');
        div.textContent = cursus.titel;
        courseList.appendChild(div);
    });
}

function toonStudenten() {
    const studentList = document.getElementById('student-list');
    students.forEach(student => {
        const div = document.createElement('div');
        div.textContent = student.naam;
        studentList.appendChild(div);
    });
}

function toonDocenten() {
    const teacherList = document.getElementById('teacher-list');
    teachers.forEach(docent => {
        const div = document.createElement('div');
        div.textContent = docent.naam;
        teacherList.appendChild(div);
    });
}

function toonInschrijvingen() {
    const enrollmentList = document.getElementById('enrollment-list');
    inscriptions.forEach(inschrijving => {
        const div = document.createElement('div');
        div.textContent = `${inschrijving.student.naam} is ingeschreven voor ${inschrijving.cursus.titel}`;
        enrollmentList.appendChild(div);
    });
}

// Voorbeelddata
const docent1 = new Docent("Dr. Jansen", "jansen@example.com", 45, "Informatica", "2020-09-01");
const cursus1 = new Cursus("JavaScript voor Beginners", "Leer de basis van JavaScript", docent1, 6, 30);
const student1 = new Student("Pieter de Vries", "piet@example.com", 22, "S12345", "2024");
const inschrijving1 = new Inschrijving(student1, cursus1, "2025-03-04", "actief");

// Voeg data toe aan arrays
teachers.push(docent1);
students.push(student1);
courses.push(cursus1);
inscriptions.push(inschrijving1);

// Toon de data in de UI
toonCursussen();
toonStudenten();
toonDocenten();
toonInschrijvingen();