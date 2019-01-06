
namespace Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        paintSky();
        paintCloud1();
        paintCloud2();
        paintSun();        
        paintChild1();
        paintSled1();
        paintChild2();
        paintSled2();

        for (let i: number = 0; i < 600; i++) {
            let a: number = Math.floor(Math.random() * crc2.canvas.width);
            let b: number = Math.floor(Math.random() * crc2.canvas.height);
            paintSnowFlakes(a, b);
        }

        for (let i: number = 0; i < 15; i++) {
            let a: number = Math.floor(Math.random() * crc2.canvas.width);
            let b: number = Math.floor(Math.random() * crc2.canvas.height);
            crc2.beginPath();
            crc2.bezierCurveTo(100, 460, 720, 170, 280, 330);
            if (crc2.isPointInPath(a, b)) {
                paintTrees(a, b);
            }

            else {
                i--;
            }
        }
    }

    function paintSky(): void {

        crc2.fillStyle = "#00b0ff";
        crc2.beginPath();
        crc2.moveTo(0, 430);
        crc2.bezierCurveTo(50, 360, 330, 203, 600, 130);
        crc2.lineTo(900, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.lineWidth = 1;
        crc2.stroke();
        crc2.fill();

    }

    function paintCloud1(): void {
        crc2.beginPath();
        crc2.arc(60, 200, 30, 1, 4 * Math.PI);
        crc2.arc(80, 190, 30, 1, 4 * Math.PI);
        crc2.arc(80, 210, 30, 1, 4 * Math.PI);
        crc2.arc(90, 200, 30, 1, 4 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }

    function paintCloud2(): void {
        crc2.beginPath();
        crc2.arc(385, 110, 17, 0, 2 * Math.PI);
        crc2.arc(415, 110, 17, 0, 2 * Math.PI);
        crc2.arc(400, 120, 17, 0, 2 * Math.PI);
        crc2.arc(405, 100, 17, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
   

    function paintSnowFlakes(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 4, 1 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }

    function paintSun(): void {
        crc2.fillStyle = "yellow";
        crc2.beginPath();
        crc2.arc(80, 10, 100, 5, 100 * Math.PI);
        crc2.fill();
    }

    function paintChild1(): void {

        crc2.beginPath();
        crc2.arc(495, 250, 5, 0, 2 * Math.PI);
        crc2.lineWidth = 5;
        crc2.moveTo(495, 280);
        crc2.lineTo(495, 254);
        crc2.moveTo(485, 262);
        crc2.lineTo(495, 262);
        crc2.moveTo(489, 295);
        crc2.lineTo(495, 267);
        crc2.moveTo(499, 295);
        crc2.lineTo(495, 267);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fill();
    }

    function paintSled1(): void {

        crc2.strokeStyle = "brown";
        crc2.lineWidth = 4;
        crc2.beginPath();
        crc2.moveTo(455, 285);
        crc2.lineTo(430, 290);
        crc2.moveTo(437, 287);
        crc2.lineTo(437, 295);
        crc2.moveTo(446, 286);
        crc2.lineTo(446, 294);
        crc2.moveTo(460, 293);
        crc2.lineTo(420, 300);
        crc2.stroke();
    }

    function paintChild2(): void {

        crc2.moveTo(260, 450);
        crc2.beginPath();
        crc2.arc(300, 370, 5, 0, 2 * Math.PI);
        crc2.lineWidth = 5;
        crc2.moveTo(300, 395);
        crc2.lineTo(300, 372);
        crc2.moveTo(300, 382);
        crc2.lineTo(290, 382);
        crc2.moveTo(300, 395);
        crc2.lineTo(290, 400);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fill();
    }

    function paintSled2(): void {

        crc2.strokeStyle = "brown";
        crc2.lineWidth = 6;
        crc2.beginPath();
        crc2.moveTo(310, 395);
        crc2.lineTo(280, 405);
        crc2.moveTo(290, 400);
        crc2.lineTo(290, 409);
        crc2.moveTo(302, 398);
        crc2.lineTo(302, 406);
        crc2.moveTo(313, 402);
        crc2.lineTo(270, 415);
        crc2.stroke();
    }

    function paintTrees(_x: number, _y: number): void {

        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "brown";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.lineTo(_x + 1, _y + 40);
        crc2.lineTo(_x - 1, _y + 40);
        crc2.lineTo(_x - 1, _y - 40);
        crc2.lineTo(_x + 1, _y - 40);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "#008000";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.lineTo(_x - 20, _y - 15);
        crc2.lineTo(_x, _y - 55);
        crc2.lineTo(_x + 20, _y - 15);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "#008000";
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.lineTo(_x - 12, _y - 15);
        crc2.lineTo(_x, _y - 65);
        crc2.lineTo(_x + 12, _y - 15);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "darkgreen";
        crc2.strokeStyle = "#008000";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.lineTo(_x - 12, _y - 46);
        crc2.lineTo(_x, _y - 75);
        crc2.lineTo(_x + 12, _y - 46);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
}