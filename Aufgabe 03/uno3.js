/*Aufgabe 3
Katja Kristina Ljubas
Matrikelnummer: 259521
Datum: 28.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Uno;
(function (Uno) {
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "X", "<=>"];
    let deck = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }];
    for (let i = 0; i < colors.length; i++) {
        for (let j = 0; j < values.length; j++) {
            for (let z = 0; z < 2; z++) {
                let card = { color: colors[i], value: values[j] };
                deck.push(card);
            }
        }
    }
    let handcards = [];
    function select() {
        var cardnumber = prompt("Gib die Anzahl deiner Handkarten an");
        let n = parseInt(cardnumber);
        for (let anz = n; anz > 0; anz--) {
            let r = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[r]);
            deck.splice(r, 1);
        }
        for (let b = 0; b < handcards.length; b++) {
            let div = document.createElement("div");
            div.innerHTML = handcards[b].value;
            div.classList.add("Handcards");
            div.classList.add(handcards[b].color);
            document.getElementById("Handcards").appendChild(div);
        }
    }
    document.addEventListener("DOMContentLoaded", select);
})(Uno || (Uno = {}));
//# sourceMappingURL=uno3.js.map