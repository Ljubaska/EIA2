/*Aufgabe 3
Katja Kristina Ljubas
Matrikelnummer: 259521
Datum: 11.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Uno{
    
    
    document.addEventListener ("keydown", pressKeyboard);
    
    interface playingcard {
        color: string;
        value: string;
        }
    
    let colors: string[] =["red", "blue","green","yellow"]
    let values : string[] = ["1","2","3","4","5","6","7","8","9","X","<=>"]
    let deck: playingcard[] =[{color:"red", value:"0"},{color:"blue", value:"0"} , {color:"green", value:"0"} , {color:"yellow", value:"0"} , {color:"black", value:"+4"} , {color:"black", value:"+4"} , {color:"black", value:"+4"} , {color:"black", value:"+4"}, {color:"black", value:"wish"} , {color:"black", value:"wish"} , {color:"black", value:"wish"} , {color:"black", value:"wish"}];
    let placeToKeep: playingcard [] = [] ;
        
        
    for(let i: number = 0; i<colors.length;i++){
        for(let j : number = 0; j < values.length; j++){
            for(let z: number = 0; z < 2 ; z++){
                let card: playingcard ={color: colors[i], value: values[j] };
                deck.push(card);
                }
            }
        }
  
    
    let handcards:playingcard[] = [];
    
        function select(): void {
        var cardnumber: string = prompt("Gib die Anzahl deiner Handkarten an");
        let n: number = parseInt(cardnumber);
        
        randomCard(n);
        displayHand();
     
        
        button.addEventListener("click", sortcards);

        let pull: HTMLElement = document.getElementById("deck");
        pull.addEventListener("click", pullFromDeck);

    }
    
    
        for (let anz: number = _anz; anz > 0; anz--) {
            let r: number = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[r]);
            deck.splice(r, 1);
        }
    }

    function pullFromDeck(): void {
        randomCard(1);
        displayHand();

    }

    function pressKeyboard(_event: KeyboardEvent): void {
        if (_event.keyCode == 32) {
            pullFromDeck();
        }
    }

    function displayHand(): void {

        document.getElementById("handcards").innerHTML = "";
        for (let b: number = 0; b < handcards.length; b++) {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("handcards").appendChild(div);
            div.innerHTML = handcards[b].value;
            let id: string = b.toString();
            div.setAttribute("id", id);
            div.classList.add("handcards");
            div.classList.add(handcards[b].color);
            div.addEventListener("click", playCard);

        }
    }

    function playCard(_event: MouseEvent): void {
        document.getElementById("stack").innerHTML = "";
        let clickedCard: HTMLElement = <HTMLElement>_event.target;
        let index: number = parseInt(clickedCard.id);
        placeToKeep.push(handcards[index]);
        let div: HTMLElement = document.createElement("div");
        document.getElementById("stack").appendChild(div);
        div.innerHTML = handcards[index].value;
        div.classList.add(handcards[index].color);
        handcards.splice(index, 1);
        displayHand();
    }



    function sortcards(): void {
        console.log(handcards);
        document.getElementById("handcards").innerHTML = "";
        handcards.sort(function(a: Card, b: Card): number {
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
}


  
       