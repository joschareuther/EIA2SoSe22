var L08_Strand_Canvas;
(function (L08_Strand_Canvas) {
    L08_Strand_Canvas.golden = 0.62;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.getElementById("canvas");
        if (!canvas)
            return;
        L08_Strand_Canvas.crc2 = canvas.getContext("2d");
        L08_Strand_Canvas.height = canvas.height;
        L08_Strand_Canvas.width = canvas.width;
        let horizon = L08_Strand_Canvas.height * L08_Strand_Canvas.golden;
        let newSun = new StrandClasses.Sun({ x: 250, y: getRandom(30, 100) });
        let cloud1 = new StrandClasses.Cloud({ x: 100, y: 50 }, { x: 70, y: 60 });
        let cloud2 = new StrandClasses.Cloud({ x: 200, y: 70 }, { x: 100, y: 150 });
        let boat = new StrandClasses.Boat({ x: getRandom(230, 290), y: horizon + 10 });
        let volcano = new StrandClasses.Vulcano({ x: getRandom(-30, 20), y: horizon }, 40, 50, "brown", "white", { x: 20, y: 20 });
        drawBackground();
        //newSun.draw({ x: 250, y: getRandom(30, 100) });
        //newSun.sink();
        //cloud1.draw({ x: 100, y: 50 }, { x: 70, y: 60 });
        //cloud2.draw({ x: 200, y: 70 }, { x: 100, y: 150 });
        //cloud1.fly();
        //boat.draw({ x: getRandom(230, 290), y: horizon + 10 });
        drawSea();
        drawBeach({ x: L08_Strand_Canvas.width / 2 - 50, y: horizon }, 100);
        volcano.draw({ x: getRandom(-30, 20), y: horizon }, 40, 50, "brown", "white", { x: 20, y: 20 });
        drawMountains({ x: 0, y: horizon }, 15, 30, "darkgrey", "white", L08_Strand_Canvas.width / 2 - 20);
        drawMountains({ x: 0, y: horizon }, 10, 20, "darkgrey", "green", L08_Strand_Canvas.width / 2);
        drawTrees({ x: 40, y: 100 }, { x: 90, y: 10 });
        drawBirds();
        drawJellyfish();
        drawPalmos();
        drawPeople();
        drawSurferi();
        //drawFishes();
    }
    function drawBackground() {
        console.log("Background");
        console.log(L08_Strand_Canvas.golden);
        let gradient = L08_Strand_Canvas.crc2.createLinearGradient(0, 0, 0, L08_Strand_Canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L08_Strand_Canvas.golden, "white");
        gradient.addColorStop(1, "lightyellow");
        L08_Strand_Canvas.crc2.fillStyle = gradient;
        L08_Strand_Canvas.crc2.fillRect(0, 0, L08_Strand_Canvas.width, L08_Strand_Canvas.height);
    }
    function drawSea() {
        console.log("Sea");
        let gradient = L08_Strand_Canvas.crc2.createLinearGradient(0, 0, 0, L08_Strand_Canvas.height);
        gradient.addColorStop(L08_Strand_Canvas.golden, "blue");
        gradient.addColorStop(1, "lightblue");
        L08_Strand_Canvas.crc2.fillStyle = gradient;
        L08_Strand_Canvas.crc2.fillRect(0, L08_Strand_Canvas.golden * L08_Strand_Canvas.height, L08_Strand_Canvas.width, L08_Strand_Canvas.height);
    }
    function drawBeach(_position, _widthfront) {
        console.log("Beach");
        L08_Strand_Canvas.crc2.beginPath();
        L08_Strand_Canvas.crc2.moveTo(_position.x, _position.y);
        L08_Strand_Canvas.crc2.bezierCurveTo(_position.x - 100, _position.y + 10, _position.x + 100, _position.y + 100, _position.x + 800, _position.y + 200);
        L08_Strand_Canvas.crc2.lineTo(0, L08_Strand_Canvas.height);
        L08_Strand_Canvas.crc2.lineTo(0, _position.y);
        L08_Strand_Canvas.crc2.closePath();
        let gradient = L08_Strand_Canvas.crc2.createLinearGradient(0, _position.y, 0, L08_Strand_Canvas.height);
        gradient.addColorStop(0, "brown");
        gradient.addColorStop(0.6, "lightyellow");
        L08_Strand_Canvas.crc2.fillStyle = gradient;
        L08_Strand_Canvas.crc2.fill();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh, _end) {
        console.log("Mountains");
        let stepMin = 5;
        let stepMax = 15;
        let x = 0;
        L08_Strand_Canvas.crc2.save();
        L08_Strand_Canvas.crc2.translate(_position.x, _position.y);
        L08_Strand_Canvas.crc2.beginPath();
        L08_Strand_Canvas.crc2.moveTo(0, 0);
        L08_Strand_Canvas.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L08_Strand_Canvas.crc2.lineTo(x, y);
        } while (x < L08_Strand_Canvas.width / 2 - 80);
        L08_Strand_Canvas.crc2.lineTo(_end, 0);
        L08_Strand_Canvas.crc2.closePath();
        let gradient = L08_Strand_Canvas.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);
        L08_Strand_Canvas.crc2.fillStyle = gradient;
        L08_Strand_Canvas.crc2.fill();
        L08_Strand_Canvas.crc2.restore();
    }
    function drawTrees(_position, _size) {
        console.log("Trees", _position, _size);
        let nParticles = 80;
        let radiusParticle = 5;
        let particle = new Path2D();
        let gradient = L08_Strand_Canvas.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(122, 64%, 50%, 1");
        gradient.addColorStop(1, "HSLA(122, 88%, 75%, 0.3");
        L08_Strand_Canvas.crc2.save();
        L08_Strand_Canvas.crc2.translate(_position.x, _position.y);
        L08_Strand_Canvas.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L08_Strand_Canvas.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L08_Strand_Canvas.crc2.translate(x, y);
            L08_Strand_Canvas.crc2.fill(particle);
            L08_Strand_Canvas.crc2.restore();
        }
        L08_Strand_Canvas.crc2.restore();
    }
    function getRandom(_min, _max) {
        let random = Math.floor(Math.random() * (_max - _min + 1)) + _min;
        return random;
    }
})(L08_Strand_Canvas || (L08_Strand_Canvas = {}));
//# sourceMappingURL=StrandMain.js.map