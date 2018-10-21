/**Name: Katja Ljubas
Matrikelnummer: 259521
Datum: 20.10.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.

(In Zusammenarbeit mit Girrbach und Stark) */

     
/** create cards with interface (farben haben number als Datentyp) */
    interface Karten {
        typ: string;
        colour: number[];
    }
    
    let card_0 = {
        typ: "0",
        colour: [0,1,2,3]       
     }
     let card_1 = {
        typ: "1",
        colour: [0,0,1,1,2,2,3,3]    
     }
     let card_2 = {
        typ: "2",
        colour: [0,0,1,1,2,2,3,3]    
     }
     let card_3 = {
        typ: "3",
        colour: [0,0,1,1,2,2,3,3]     
     }
     let card_4 = {
        typ: "4",
        colour: [0,0,1,1,2,2,3,3]    
     }
     let card_5 = {
        typ: "5",
        colour: [0,0,1,1,2,2,3,3]       
     }
     let card_6 = {
        typ: "6",
        colour: [0,0,1,1,2,2,3,3]      
     }
     let card_7 = {
        typ: "7",
        colour: [0,0,1,1,2,2,3,3]       
     }
     let card_8 = {
        typ: "8",
        colour: [0,0,1,1,2,2,3,3]       
     }
     let card_9 = {
        typ: "9",
        colour: [0,0,1,1,2,2,3,3]      
     }
     let card_plus_2 = {
        typ: "10",
        colour: [0,0,1,1,2,2,3,3]       
     }
     let card_changeOfDirection = {
        typ: "11",
        colour: [0,0,1,1,2,2,3,3]       
     }
     let card_suspend = {
        typ: "12",
        colour: [0,0,1,1,2,2,3,3]       
     }
     let card_plus_4 = {
        typ: "13",
        colour: [4,4,4,4]       
     }
     let card_preferredcolour = {
        typ: "14",
        colour: [4,4,4,4]       
     }
    
    let c: string = ""; //der Farbcode
    
   /**put cards in "deck" array*/
    let deckArray : cards [] = [card_0, card_1, card_2, card_3, card_4, card_5, card_6, card_7, card_8,
                                 card_9, card_plus_2, card_changeOfDirection, card_suspend, card_plus_4, card_preferredcolour] 
    
    /**function to generate a random number */
       function random(z: number): number { 
        return Math.floor(Math.random() * Math.floor(z));
       }

    /** visual depiction of hand cards */
        function placeDiv(_colour: string, _y: string, _x: number): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "a" + _x) 
            
        document.getElementById("a" + _x).innerHTML += _y; 
        let s: CSSStyleDeclaration = div.style;
        s.border = "thin solid black";
        s.textAlign = "center";
        s.position = "absolute";
        s.backgroundColor = _colour;
        s.width = 90 + "px";
        s.height = 170 + "px";
        s.left = (_x + 0.5) * 100 + "px";
        s.bottom = 40 + "px";
        s.borderRadius = 10 + "px";
        s.color = "white";
        
            
             if (_colour == "#ffff00") { //Wenn Hintergrund Gelb -> Schrift schwarz
             s.color = "black";
             }


        }
    
     function main(): void {
        let n: number;
        let i: string = prompt("Wie viele Handkarten pro Spieler");
        n = Number(i);
        for (let d: number = 0; d < n; d++) { 
            let l: number = random(15); //l = Zufallswert von 0-14 (alle Karten)
            if (l == 13 &&  card_plus_4.colour.length > 0) { //Wenn l = 13 dann generiere eine schwarze +4
                c = "#000000";
                card_plus_4.colour.pop(); 
                placeDiv(c, "+4", d);
                continue;
            }
            else if (l == 13 && card_plus_4.colour.length <= 0) { //Wenn l = 13 & farbenArray Länge <= 0 dann continue (d--) da sonst Karte übersprungen
                d--;
                continue;
            }
            else {
                if (l == 14 && card_preferredcolour.colour.length > 0) { //Wenn l = 14 dann generiere schwarze Farbwahl
                    c = "#000000";
                    card_preferredcolour.colour.pop();
                    placeDiv(c, "Farbwunsch", d);
                    continue;
                }
                else if (l == 14 && card_preferredcolour.colour.length <= 0) { //Wenn l = 14 & karte_Farbenwunsch.farben.length <= 0 dann continue (d-- da sonst Karte übersprungen)
                    d--;
                    continue;
                }
                else { //Wenn l =/= 13 || 14 dann vergebe Farbe an Kartenwert
                    let r: number = random(4); //random Zahl von 0-3 jeweils eine Farbe
                    switch (r) {
                        case 0: //Wenn r = 0 dann rote Farbe
                            c = "#ff0000"; //rot
                            if (deckArray[l].colour[0] || deckArray[l].colour[1] == 0) {
                                placeDiv(c, deckArray[l].typ, d);
                                deckArray[l].colour.splice(0, 1); 
                                continue;
                            }
                            else { //Wenn Kombination aus Wert und Farbe <= 0 dann continue (d-- da sonst Karte übersprungen)
                                d--;
                                continue;
                            }
                        case 1: //Wenn r = 1 dann grüne Farbe
                            c = "#00ff00"; //grün
                            if (deckArray[l].colour[2] || deckArray[l].colour[3] == 1) {
                                placeDiv(c, deckArray[l].typ, d);
                                deckArray[l].colour.splice(2, 1); 
                                continue;
                            }
                            else { //Wenn Kombination aus Wert und Farbe <= 0 dann continue (d-- da sonst Karte übersprungen)
                                d--;
                                continue;
                            }
                        case 2: //Wenn r = 2 dann blaue Farbe
                            c = "#0000ff"; //blau
                            if (deckArray[l].colour[4] || deckArray[l].colour[5] == 2) {
                                placeDiv(c, deckArray[l].typ, d);
                                deckArray[l].colour.splice(4, 1); 
                                continue;
                            }
                            else { //Wenn Kombination aus Wert und Farbe <= 0 dann continue (d-- da sonst Karte übersprungen)
                                d--;
                                continue;
                            }
                        case 3: //Wenn r = 3 dann gelbe Farbe
                            c = "#ffff00"; //gelb
                            if (deckArray[l].colour[6] || deckArray[l].colour[7] == 3) {
                                placeDiv(c, deckArray[l].typ, d);
                                deckArray[l].colour.splice(6, 1);                              
                                continue;
                            }
                            else { //Wenn Kombination aus Wert und Farbe <= 0 dann continue (d-- da sonst Karte übersprungen)
                                d--;
                                continue;
                            }
                    }
                }


            }

        }
    
function Stapel(_n: number): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);

            let s: CSSStyleDeclaration = div.style;
            s.border = "thin solid black";
            s.position = "absolute";
            s.backgroundColor = "#38610B";
            s.width = 90 + "px";
            s.height = 170 + "px";
            s.left = (_n + 0.5) * 20 + "px";
            s.top = (_n + 0.5) * 10 + "px";
            s.borderRadius = 10 + "px";
        }

        function Ablage(): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablage")

            document.getElementById("Ablage").innerHTML += "Ablage";

            let s: CSSStyleDeclaration = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#abd19a";
            s.width = 120 + "px";
            s.height = 200 + "px";
            s.right = 50 + "px";
            s.top = 20 + "px";
        }

        for (let i: number = 0; i < 10; i++) {
            Stapel(i);
        }

        Ablage();
    }
    document.addEventListener('DOMContentLoaded',main);
   }