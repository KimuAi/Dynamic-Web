// Data simulatie - gebruikers database
const users = [
    { id: 1, name: "Sara", email: "sara@example.com", isAdmin: false },
    { id: 2, name: "Alex", email: "alex@example.com", isAdmin: true },
    { id: 3, name: "Kim", email: "kim@example.com", isAdmin: false }
];

// Functie om een gebruiker op te halen
const getUser = (userId) => {
    // Bug 1 Als de gebruiker niet wordt gevonden gevn we nu een foutmelding
    const user = users.find(u => u.id === userId);
    if (!user) {
        throw new Error(`User with id ${userId} not found`);
    }
    return user.name;
};

// Functie om admin-rechten te controleren
const checkAdminRights = (userId) => {
    // Bug 2 Controle of de gebruiker wel bestaat
    const user = users.find(u => u.id === userId);
    if (!user) {
        throw new Error(`User with id ${userId} not found`);
    }
    return user.isAdmin;
};

// Functie om e-mail te formatteren
const formatEmail = (email) => {
    // Bug 3 Reguliere expressie is veilig gemaakt en kan omgaan met ongeldige e-mails
    const match = email.match(/^(.+)@/);
    if (!match) {
        throw new Error(`Invalid email format: ${email}`);
    }
    const username = match[1];
    return username.toUpperCase() + "@" + email.split('@')[1];
};

// Functie om gebruikers te verwerken
const processUsers = () => {
    // Bug 4 Loopt probleem we moeten het juiste aantal iteraties gebruiken
    for (let i = 1; i <= users.length; i++) {
        try {
            const user = getUser(i);
            const isAdmin = checkAdminRights(i);
            const formattedEmail = formatEmail(users[i - 1].email);
            console.log(`Verwerkt: ${user} (Admin: ${isAdmin}) - ${formattedEmail}`);
        } catch (error) {
            // Bug 5 Foutmeldingen nu gedetailleerd, zodat de oorzaak duidelijker is!
            console.error(`Fout bij verwerken van gebruiker met id ${i}: ${error.message}`);
        }
    }
};

// Start het proces
processUsers();