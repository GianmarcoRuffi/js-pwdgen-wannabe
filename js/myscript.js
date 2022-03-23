/* 
Mermaid flowchart

graph TD
    A[Apertura pop-up] -->B[Richiesta del nome]
    B[Richiesta del nome] --> |OK / Annulla|C[Richiesta del cognome]
    C[Richiesta del cognome] --> |OK / Annulla|D[Richiesta del colore preferito]
    D[Richiesta del colore preferito] -->E{Conferma}
    E -->|OK| F[Somma dei dati richiesti]
    E -->|Annulla| G[Somma dei dati e comparsa della stringa null nei campi annullati]
    F --> Somma+21
    G--> Somma+21*/

/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

let firstName;
let lastName;
let favColor;
let supersafePass;

firstName = prompt("Buongiorno Utente, qual'è il tuo nome?");
console.log("First Name: " + firstName);

lastName = prompt("e il tuo cognome?");
console.log("Last Name: " + lastName);

favColor = prompt("il tuo colore preferito?");
console.log("Favorite color: " + favColor);

supersafePass = firstName + lastName + favColor + "21";
console.log("Password: " + supersafePass);

document.getElementById("generated-password").innerText = supersafePass;
