/*Aufgabe 2
Katja Kristina Ljubas
Matrikelnummer: 259521
Datum: 28.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Uno{
    
    interface Card {
        color: string;
        value: string;
        }
    
    let colors: string[] =["red", "blue","green","yellow"]
    let values : string[] = ["1","2","3","4","5","6","7","8","9","X","<=>"]
    let deck: Card[] =[{color:"red", value:"0"},{color:"blue", value:"0"} , {color:"green", value:"0"} , {color:"yellow", value:"0"} , {color:"black", value:"+4"} , {color:"black", value:"+4"} , {color:"black", value:"+4"} , {color:"black", value:"+4"}, {color:"black", value:"wish"} , {color:"black", value:"wish"} , {color:"black", value:"wish"} , {color:"black", value:"wish"}];
    
        
        
    for(let i: number = 0; i<colors.length;i++){
        for(let j : number = 0; j < values.length; j++){
            for(let z: number = 0; z < 2 ; z++){
                let card: Card ={color: colors[i], value: values[j] };
                deck.push(card);
                }
            }
        }
  
    
    let handcards:Card[] = [];
    
     
     
    
    function select(): void {
        var cardnumber: string = prompt("Gib die Anzahl deiner Handkarten an");
        let n: number = parseInt(cardnumber);
     
  
        for (let anz: number = n; anz > 0; anz--) {
            let r: number = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[r]);
            deck.splice(r, 1);
        }
          for (let b: number = 0; b < handcards.length; b++) {
            let div: HTMLElement = document.createElement("div");
            div.innerHTML = handcards[b].value;
            div.classList.add("Handcards");
            div.classList.add(handcards[b].color);
            document.getElementById("Handcards").appendChild(div);
            }
    
    
        }
     document.addEventListener("DOMContentLoaded", select);
    }   