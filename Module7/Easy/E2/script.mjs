
const users = [
    { id: 1, name: "Emma", role: "Admin", lastLogin: "2023-03-15" },
    { id: 2, name: "Thomas", role: "User", lastLogin: "2023-03-17" },
    { id: 3, name: "Sophie", role: "Editor", lastLogin: "2023-03-12" },
    { id: 4, name: "Lucas", role: "User", lastLogin: "2023-03-10" }
  ];

  document.getElementById("showUsers").addEventListener("click", function () {
    console.table(users);

    console.group("Gebruikersrollen");

    // Itereer over de gebruikers en gebruik verschillende console methodes
    users.forEach((user) => {
      // Gebruik console.info voor Admin
      if (user.role === "Admin") {
        console.info(`${user.name} is een ${user.role}`);
      }
      // Gebruik console.warn voor Editor
      else if (user.role === "Editor") {
        console.warn(`${user.name} is een ${user.role}`);
      }
      // Gebruik console.error voor User
      else if (user.role === "User") {
        console.error(`${user.name} is een ${user.role}`);
      }
    });

    // Sluit de groep af
    console.groupEnd();
  });