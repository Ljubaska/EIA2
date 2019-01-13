var Aufgabe10;
(function (Aufgabe10) {
    class ChildSled {
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 0) {
                this.x = 100 + 200;
                this.y = 80 - 240;
            }
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x + 300, this.y + 370, 5, 0, 2 * Math.PI);
            Aufgabe10.crc2.lineWidth = 5;
            Aufgabe10.crc2.moveTo(this.x + 300, this.y + 395);
            Aufgabe10.crc2.lineTo(this.x + 300, this.y + 372);
            Aufgabe10.crc2.moveTo(this.x + 300, this.y + 382);
            Aufgabe10.crc2.lineTo(this.x + 290, this.y + 382);
            Aufgabe10.crc2.moveTo(this.x + 300, this.y + 395);
            Aufgabe10.crc2.lineTo(this.x + 290, this.y + 400);
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.fillStyle = "mistyrose";
            Aufgabe10.crc2.strokeStyle = "deeppink";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.strokeStyle = "saddlebrown";
            Aufgabe10.crc2.lineWidth = 5;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 310, this.y + 395);
            Aufgabe10.crc2.lineTo(this.x + 280, this.y + 405);
            Aufgabe10.crc2.moveTo(this.x + 290, this.y + 400);
            Aufgabe10.crc2.lineTo(this.x + 290, this.y + 409);
            Aufgabe10.crc2.moveTo(this.x + 302, this.y + 398);
            Aufgabe10.crc2.lineTo(this.x + 302, this.y + 406);
            Aufgabe10.crc2.moveTo(this.x + 313, this.y + 402);
            Aufgabe10.crc2.lineTo(this.x + 270, this.y + 415);
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.ChildSled = ChildSled;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=ChildSled.js.map