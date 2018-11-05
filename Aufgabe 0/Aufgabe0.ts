/**
Aufgabe 0
Katja Kristina Ljubas
Matrikelnummer: 259521
Datum: 07.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
**/


function Feldeingabe() {
    var Name : string  = prompt("Gib deinen Namen hier ein");
    var node : HTMLElement = document.getElementById("innerhtmlcontent");
    node.innerHTML += "Hey ";
    node.innerHTML += Name;
    node.innerHTML += " was geht?";
    console.log("Hey " + Name + "was geht?");
}
document.addEventListener('DOMContentLoaded', Feldeingabe);
