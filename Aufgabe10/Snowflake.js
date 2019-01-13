var Aufgabe10;
(function (Aufgabe10) {
    class Snowflake {
        move() {
            this.y += this.dy;
            if (this.y > Aufgabe10.crc2.canvas.height + 20) {
                this.y = -3;
            }
        }
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.arc(this.x, this.y, 5, 2, 3 * Math.PI);
            Aufgabe10.crc2.strokeStyle = "lavender";
            Aufgabe10.crc2.fillStyle = "white";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.Snowflake = Snowflake;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Snowflake.js.map