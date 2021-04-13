var listaCognomi = ["Ascanio", "Bettio", "Brunetti", "BuccinÃ", "Butera", "Campodonico", "Cardone", "Cavaletti", "Chen", "Ciarmoli", "Cismasu", "Cordovani", "Durante", "Fabris", "Ferrera", "Geremia", "Lega", "Maggio", 
"Maletta", "Moi", "Pagani", "Pauri", "Perucino", "Pierfederici", "Puglisi", "Romeo", "Sanjevic", "Sanjevic", "Saramondi", "Sestili", "Tonielli", "Torricelli", "Valeri", "Zhou"];

var listaCognomiUpper = [];

for( var i=0; i<listaCognomi.length; i++){
    listaCognomiUpper.push(listaCognomi[i].toUpperCase());
};

document.getElementById("target").innerHTML+= ("<h1>" + "La lista originale dei cognomi era: " + listaCognomiUpper.join(', ') + "<br> <br>" + "</h1>"); 

var cognomeValido = false;

do{
var ilMioCognome = prompt ("Inserisci il tuo a cognome");
    if (ilMioCognome != null && ilMioCognome !== "") {
        cognomeValido = true;
    } 
} while (!cognomeValido);

console.log(ilMioCognome)



var ilMioCognomeUpper = ilMioCognome.toUpperCase();


listaCognomiUpper.push(ilMioCognomeUpper);

console.log("Lista originale dei cognomi: " + listaCognomi)

console.log("Lista dei cognomi aggiornata con l'ultimo inserimento: " + listaCognomiUpper.join(", "));
document.getElementById("target").innerHTML+= ("<h1>" + "La lista aggiornata è: " + listaCognomiUpper.join(', ') + "<br> <br>" + "</h1>");


listaCognomiUpper.sort();

console.log("Lista dei cognomi in ordine alfabetico: " + listaCognomiUpper);
document.getElementById("target").innerHTML+= ("<h1>" + "La nuova lista ordinata alfabeticamente è: " + listaCognomiUpper.join(', ') + "<br> <br>" + "</h1>");

var posizioneInserimentoCognome = (listaCognomiUpper.indexOf(ilMioCognomeUpper)) + 1;


console.log("il mio cognome si trova alla posizione n°: " + posizioneInserimentoCognome );
document.getElementById("target").innerHTML+= ("<h1>" + "Il cognome inserito ora si trova alla posizione: " + posizioneInserimentoCognome + "</h1>");
