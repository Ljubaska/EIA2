var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let fps = 25;
    let imgData;
    let snowflakes = [];
    let trees = [];
    let childsleds = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        drawCloud();
        imgData = Aufgabe10.crc2.getImageData(0, 0, 600, 420);
        for (let i = 0; i < 80; i++) {
            let snowflake = new Aufgabe10.Snowflake();
            snowflake.x = Math.random() * Aufgabe10.crc2.canvas.width;
            snowflake.y = Math.random() * Aufgabe10.crc2.canvas.height;
            snowflake.dy = Math.random() * 4 + 4;
            snowflake.color = "#00ff00";
            snowflakes.push(snowflake);
        }
        for (let i = 0; i < 15; i++) {
            let tree = new Aufgabe10.Tree();
            tree.x = Math.random() * 300 + 320;
            tree.y = Math.random() * 100 + 200;
            trees.push(tree);
        }
        for (let i = 0; i < 10; i++) {
            let childsled = new Aufgabe10.ChildSled();
            childsled.x = Math.random() * 100 + 200;
            childsled.y = Math.random() * 80 - 240;
            childsled.dx = Math.random() * 2 - 7;
            childsled.dy = Math.random() * 1 + 2;
            childsleds.push(childsled);
        }
        update();
        console.log("Canvas start");
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe10.crc2.clearRect(0, 0, Aufgabe10.crc2.canvas.width, Aufgabe10.crc2.canvas.height);
        Aufgabe10.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < 50; i++) {
            let snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }
        for (let i = 0; i < 6; i++) {
            let tree = trees[i];
            tree.draw();
        }
        for (let i = 0; i < 10; i++) {
            let childsled = childsleds[i];
            childsled.move();
            childsled.draw();
        }
        console.log("update");
    }
    function drawCloud() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(365, 90, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(395, 90, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(380, 100, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.arc(385, 80, 20, 0, 2 * Math.PI);
        Aufgabe10.crc2.fillStyle = "white";
        Aufgabe10.crc2.fill();
    }
    function drawSun() {
        Aufgabe10.crc2.fillStyle = "lightgoldenrodyellow";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(10, 10, 100, 0, 2 * Math.PI);
        Aufgabe10.crc2.fill();
    }
    function drawSky() {
        Aufgabe10.crc2.fillStyle = "lightskyblue";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 430);
        Aufgabe10.crc2.bezierCurveTo(50, 360, 330, 203, 600, 130);
        Aufgabe10.crc2.lineTo(600, 0);
        Aufgabe10.crc2.lineTo(0, 0);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.lineWidth = 3;
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Main.js.map