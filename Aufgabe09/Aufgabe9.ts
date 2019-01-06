
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

        for (let i: number = 0; i < 200; i++) {
            let a: number = Math.floor(Math.random() * crc2.canvas.width);
            let b: number = Math.floor(Math.random() * crc2.canvas.height);
            paintSnowFlakes(a, b);
        }

        for (let i: number = 0; i < 10; i++) {
            let a: number = Math.floor(Math.random() * crc2.canvas.width);
            let b: number = Math.floor(Math.random() * crc2.canvas.height);
            crc2.beginPath();
            crc2.bezierCurveTo(80, 420, 680, 150, 260, 310);
            if (crc2.isPointInPath(a, b)) {
                paintTrees(a, b);
            }

            else {
                i--;
            }
        }
    }

    function paintSky(): void {

        crc2.fillStyle = "#B0E0E6";
        crc2.beginPath();
        crc2.moveTo(0, 430);
        crc2.bezierCurveTo(50, 360, 330, 203, 600, 130);
        crc2.lineTo(600, 0);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.lineWidth = 3;
        crc2.stroke();
        crc2.fill();

    }

    function paintCloud1(): void {
        crc2.beginPath();
        crc2.arc(60, 200, 20, 0, 2 * Math.PI);
        crc2.arc(80, 190, 20, 0, 2 * Math.PI);
        crc2.arc(80, 210, 20, 0, 2 * Math.PI);
        crc2.arc(90, 200, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }

    function paintCloud2(): void {
        crc2.beginPath();
        crc2.arc(365, 90, 20, 0, 2 * Math.PI);
        crc2.arc(395, 90, 20, 0, 2 * Math.PI);
        crc2.arc(380, 100, 20, 0, 2 * Math.PI);
        crc2.arc(385, 80, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }

    function paintSnowFlakes(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 1, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }

    function paintSun(): void {
        crc2.fillStyle = "#FFD700";
        crc2.beginPath();
        crc2.arc(10, 10, 100, 0, 2 * Math.PI);
        crc2.fill();
    }

    function paintChild1(): void {

        crc2.beginPath();
        crc2.arc(495, 250, 5, 0, 2 * Math.PI);
        crc2.lineWidth = 3;
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

        crc2.strokeStyle = "#A0522D";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.moveTo(450, 280);
        crc2.lineTo(425, 285);
        crc2.moveTo(432, 282);
        crc2.lineTo(432, 290);
        crc2.moveTo(441, 281);
        crc2.lineTo(441, 289);
        crc2.moveTo(455, 288);
        crc2.lineTo(415, 295);
        crc2.stroke();
    }

    function paintChild2(): void {

        crc2.moveTo(260, 450);
        crc2.beginPath();
        crc2.arc(300, 370, 5, 0, 2 * Math.PI);
        crc2.lineWidth = 3;
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

        crc2.strokeStyle = "#9d4e15";
        crc2.lineWidth = 2;
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

        crc2.fillStyle = "#8B4513";
        crc2.strokeStyle = "#8B4513";
        crc2.lineWidth = 2;
        crc2.beginPath();
        crc2.lineTo(_x + 5, _y + 10);
        crc2.lineTo(_x - 5, _y + 10);
        crc2.lineTo(_x - 5, _y - 10);
        crc2.lineTo(_x + 5, _y - 10);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "#006400";
        crc2.strokeStyle = "#008000";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.lineTo(_x - 20, _y - 10);
        crc2.lineTo(_x, _y - 55);
        crc2.lineTo(_x + 20, _y - 10);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "#006400";
        crc2.strokeStyle = "#008000";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.lineTo(_x - 17, _y - 25);
        crc2.lineTo(_x, _y - 65);
        crc2.lineTo(_x + 17, _y - 25);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.fillStyle = "#006400";
        crc2.strokeStyle = "#008000";
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.lineTo(_x - 14, _y - 42);
        crc2.lineTo(_x, _y - 75);
        crc2.lineTo(_x + 14, _y - 42);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
}