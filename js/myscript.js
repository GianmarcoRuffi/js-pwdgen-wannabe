/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

var firstName;
var lastName;
var favColor;
var supersafePass;

firstName = prompt("Buongiorno Utente, qual'è il tuo nome?");
console.log("First Name: " + firstName);

lastName = prompt("e il tuo cognome?");
console.log("Last Name: " + lastName);

favColor = prompt("il tuo colore preferito?");
console.log("Favorite color: " + favColor);

supersafePass = firstName + lastName + favColor + "21";
console.log("Password: " + supersafePass);

document.getElementById("generated-password").innerText = supersafePass;
