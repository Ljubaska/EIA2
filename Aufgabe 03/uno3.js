/*Aufgabe 3
Katja Kristina Ljubas
Matrikelnummer: 259521
Datum: 11.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Uno;
(function (Uno) {
    document.addEventListener("DOMContentLoaded", select);
    document.addEventListener("keydown", pressKeyboard);
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "X", "<=>"];
    let deck = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }];
    let placeToKeep = [];
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
        randomCard(n);
        displayHand();
        let button = document.getElementById("button");
        button.addEventListener("click", sortcards);
        let pull = document.getElementById("deck");
        pull.addEventListener("click", pullFromDeck);
    }
    function randomCard(_anz) {
        for (let anz = _anz; anz > 0; anz--) {
            let r = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[r]);
            deck.splice(r, 1);
        }
    }
    function pullFromDeck() {
        randomCard(1);
        displayHand();
    }
    function pressKeyboard(_event) {
        if (_event.keyCode == 32) {
            pullFromDeck();
        }
    }
    function displayHand() {
        document.getElementById("handcards").innerHTML = "";
        for (let b = 0; b < handcards.length; b++) {
            let div = document.createElement("div");
            document.getElementById("handcards").appendChild(div);
            div.innerHTML = handcards[b].value;
            let id = b.toString();
            div.setAttribute("id", id);
            div.classList.add("handcards");
            div.classList.add(handcards[b].color);
            div.addEventListener("click", playCard);
        }
    }
    function playCard(_event) {
        document.getElementById("stack").innerHTML = "";
        let clickedCard = _event.target;
        let index = parseInt(clickedCard.id);
        placeToKeep.push(handcards[index]);
        let div = document.createElement("div");
        document.getElementById("stack").appendChild(div);
        div.innerHTML = handcards[index].value;
        div.classList.add(handcards[index].color);
        handcards.splice(index, 1);
        displayHand();
    }
    function sortcards() {
        console.log(handcards);
        document.getElementById("handcards").innerHTML = "";
        handcards.sort(function (a, b) {
            if (a.color > b.color) {
                return 1;
            }
            if (a.color < b.color) {
                return -1;
            }
            if (a.value > b.value) {
                return 1;
            }
            if (a.value < b.value) {
                return -1;
            }
            return 0;
        });
        console.log(handcards);
        displayHand();
    }
})(Uno || (Uno = {}));
//# sourceMappingURL=uno3.js.map