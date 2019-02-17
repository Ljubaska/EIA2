var Endabgabe;
(function (Endabgabe) {
    class GameStart {
        init() {
            this.xPos = 0;
            this.yPos = 0;
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.rect(this.xPos, this.yPos, 700, 1100);
            Endabgabe.crc2.fillStyle = "#f2f2f2";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.strokeStyle = "#bfbfbf";
            Endabgabe.crc2.fillStyle = "#bfbfbf";
            Endabgabe.crc2.strokeStyle = "#000000";
            Endabgabe.crc2.lineWidth = 5;
            Endabgabe.crc2.font = "50px Arial";
            Endabgabe.crc2.textAlign = "center";
            Endabgabe.crc2.fillStyle = "#000000";
            Endabgabe.crc2.fillText("Click & Play", 350, 350);
            Endabgabe.crc2.fillText("Wirf so viele Kinder ab", 350, 500);
            Endabgabe.crc2.fillText("wie moeglich.", 350, 550);
            Endabgabe.crc2.fillText("45 Sekunden hast du Zeit", 350, 600);
            Endabgabe.crc2.stroke();
        }
    }
    Endabgabe.GameStart = GameStart;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=GameStart.js.map