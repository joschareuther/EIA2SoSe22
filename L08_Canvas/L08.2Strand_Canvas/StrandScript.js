var L08_Strand_Canvas;
(function (L08_Strand_Canvas) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    let height;
    let width;
    function handleLoad(_event) {
        let canvas = document.getElementById("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        height = canvas.height;
        width = canvas.width;
        let horizon = height * golden;
        drawBackground();
        drawSun({ x: 250, y: 30 });
        drawCloud({ x: 100, y: 50 }, { x: 70, y: 60 });
        drawCloud({ x: 200, y: 70 }, { x: 100, y: 150 });
        drawBoat({ x: getRandom(230, 290), y: horizon + 10 });
        drawSea();
        drawBeach({ x: width / 2 - 50, y: horizon }, 100);
        drawMountains({ x: 0, y: horizon }, 20, 50, "darkgrey", "white", width / 2 - 20);
        drawMountains({ x: 0, y: horizon }, 10, 30, "darkgrey", "green", width / 2);
        drawTrees({ x: 40, y: 100 }, { x: 90, y: 10 });
        drawBirds();
        drawJellyfish();
        //adrawSchwimmeri();
        //drawSurferi();
        //drawFishes();
        //drawPeople();
    }
    function drawBackground() {
        console.log("Background");
        console.log(golden);
        let gradient = crc2.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "lightyellow");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, width, height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 12;
        let r2 = 50;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 20;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawSea() {
        console.log("Sea");
        let gradient = crc2.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(golden, "blue");
        gradient.addColorStop(1, "lightblue");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, golden * height, width, height);
    }
    function drawBeach(_position, _widthFront) {
        console.log("Beach");
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.bezierCurveTo(_position.x - 100, _position.y + 10, _position.x + 100, _position.y + 100, _position.x + 800, _position.y + 200);
        crc2.lineTo(0, height);
        crc2.lineTo(0, _position.y);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, _position.y, 0, height);
        gradient.addColorStop(0, "brown");
        gradient.addColorStop(0.6, "lightyellow");
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh, _end) {
        console.log("Mountains");
        let stepMin = 10;
        let stepMax = 20;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < width / 2 - 80);
        crc2.lineTo(_end, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawTrees(_position, _size) {
        console.log("Trees", _position, _size);
        let nParticles = 80;
        let radiusParticle = 5;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(122, 64%, 50%, 1");
        gradient.addColorStop(1, "HSLA(122, 88%, 75%, 0.3");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawBirds() {
        console.log("Birds");
        let horizon = height * golden;
        for (let nBirds = 0; nBirds < 10; nBirds++) {
            crc2.save();
            crc2.translate(getRandom(0, 60), getRandom(60, 100) - horizon);
            crc2.beginPath();
            crc2.arc(100, 70, 4, 2.7, 0);
            crc2.arc(100 + 7, 70, 4, 2.8, 0);
            crc2.stroke();
            crc2.restore();
        }
    }
    function drawBoat(_position) {
        console.log("Boat", _position);
        crc2.beginPath();
        crc2.moveTo(_position.x - 10, _position.y);
        crc2.lineTo(_position.x - 10, _position.y - 40);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_position.x + 0, _position.y + 0);
        crc2.lineTo(_position.x + 10, _position.y - 20);
        crc2.lineTo(_position.x - 40, _position.y - 20);
        crc2.lineTo(_position.x - 30, _position.y);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#5c2a10";
        crc2.fill();
        crc2.fillStyle = "lightgrey";
        crc2.fillRect(_position.x - 30, _position.y - 17, 3, 4);
        crc2.fillStyle = "lightgrey";
        crc2.fillRect(_position.x, _position.y - 17, 3, 4);
        crc2.fillStyle = "lightgrey";
        crc2.fillRect(_position.x - 25, _position.y - 17, 3, 4);
        crc2.fillStyle = "lightgrey";
        crc2.fillRect(_position.x - 20, _position.y - 17, 3, 4);
        crc2.fillStyle = "lightgrey";
        crc2.fillRect(_position.x - 15, _position.y - 17, 3, 4);
        crc2.fillStyle = "lightgrey";
        crc2.fillRect(_position.x - 10, _position.y - 17, 3, 4);
        crc2.beginPath();
        crc2.moveTo(_position.x - 10, _position.y - 20);
        crc2.lineTo(_position.x, _position.y - 25);
        crc2.lineTo(_position.x - 10, _position.y - 40);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ebe4c7";
        crc2.fill();
    }
    function drawJellyfish() {
        console.log("Jellyfish");
        let horizon = height * golden;
        let x;
        let y;
        for (let nJellyfish = 0; nJellyfish < 5; nJellyfish++) {
            crc2.save();
            crc2.translate(0, 0);
            crc2.beginPath();
            crc2.arc(x = getRandom(180, 280), y = getRandom(horizon + 30, horizon + 50), getRandom(4, 7), 3, 6, 0);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "HSLA(0, 100%, 50%, 0.65";
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(x - 3, y);
            crc2.lineTo(x + 6, y + 10);
            crc2.moveTo(x, y);
            crc2.lineTo(x + 9, y + 10);
            crc2.moveTo(x + 3, y - 1);
            crc2.lineTo(x + 12, y + 10);
            crc2.stroke();
        }
    }
    function getRandom(_min, _max) {
        let random = Math.floor(Math.random() * (_max - _min + 1)) + _min;
        return random;
    }
})(L08_Strand_Canvas || (L08_Strand_Canvas = {}));
//# sourceMappingURL=StrandScript.js.map