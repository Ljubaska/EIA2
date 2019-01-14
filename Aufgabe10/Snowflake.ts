namespace Aufgabe10 {

    export class Snowflake {
        x: number;
        y: number;
        dy: number;
        color: string;
        

        move(): void {

            this.y += this.dy;

            if (this.y > crc2.canvas.height + 20) {
                this.y = -3;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 5, 2, 3 * Math.PI);
            crc2.strokeStyle = "lavender";
            crc2.fillStyle = "white";
            crc2.stroke();
            crc2.fill();
        }
    }
}