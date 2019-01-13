namespace Aufgabe10 {

    export class Tree {
        x: number;
        y: number;
        color: string;


        draw(): void {
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "#8B4513";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.lineTo(this.x + 2, this.y + 8);
            crc2.lineTo(this.x - 2, this.y + 8);
            crc2.lineTo(this.x - 2, this.y - 8);
            crc2.lineTo(this.x + 2, this.y - 8);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "cadetblue";
            crc2.strokeStyle = "#008000";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.lineTo(this.x - 20, this.y - 10);
            crc2.lineTo(this.x, this.y - 55);
            crc2.lineTo(this.x + 20, this.y - 10);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "cadetblue";
            crc2.strokeStyle = "#008000";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.lineTo(this.x - 20, this.y - 25);
            crc2.lineTo(this.x, this.y - 65);
            crc2.lineTo(this.x + 20, this.y - 25);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.fillStyle = "cadetblue";
            crc2.strokeStyle = "#008000";
            crc2.lineWidth = 5;
            crc2.beginPath();
            crc2.lineTo(this.x - 17, this.y - 42);
            crc2.lineTo(this.x, this.y - 75);
            crc2.lineTo(this.x + 17, this.y - 42);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }
}

