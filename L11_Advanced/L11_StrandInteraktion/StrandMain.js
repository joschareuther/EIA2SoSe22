var L11_2StrandInteraktion;
(function (L11_2StrandInteraktion) {
    //Generelle Variablen//
    L11_2StrandInteraktion.golden = 0.62;
    let horizon;
    let imgData;
    //Instanzierung der Objekte//
    let newSun = new L11_2StrandInteraktion.Sun({ x: 250, y: getRandom(30, 100) }, 2);
    let cloud1 = new L11_2StrandInteraktion.Cloud({ x: 100, y: 50 }, { x: 70, y: 60 }, 1);
    let cloud2 = new L11_2StrandInteraktion.Cloud({ x: 200, y: 70 }, { x: 100, y: 150 }, 2);
    let boat = new L11_2StrandInteraktion.Boat({ x: getRandom(230, 290), y: horizon + 10 }, 2);
    let volcano = new L11_2StrandInteraktion.Vulcano({ x: getRandom(-30, 20), y: horizon }, 40, 50, "brown", "white", { x: 20, y: 20 });
    let bird = new L11_2StrandInteraktion.Bird({ x: 60, y: 100 }, 2);
    let jellyfish = new L11_2StrandInteraktion.Jellyfish({ x: getRandom(180, 280), y: getRandom(horizon + 30, horizon + 50) }, "red", 2);
    let palme = new L11_2StrandInteraktion.Palme({ x: 100, y: 100 });
    let person = new L11_2StrandInteraktion.Person({ x: 100, y: 200 }, "brown", "green", "white");
    let surferi = new L11_2StrandInteraktion.Surferi({ x: 100, y: 200 }, "brown", "red", "yellow");
    //START//
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.getElementById("canvas");
        if (!canvas)
            return;
        L11_2StrandInteraktion.crc2 = canvas.getContext("2d");
        L11_2StrandInteraktion.height = canvas.height;
        L11_2StrandInteraktion.width = canvas.width;
        horizon = L11_2StrandInteraktion.height * L11_2StrandInteraktion.golden;
        drawBackground();
        newSun.draw();
        drawSea();
        drawBeach({ x: L11_2StrandInteraktion.width / 2 - 50, y: horizon }, 100);
        volcano.draw({ x: getRandom(-30, 20), y: horizon }, 40, 50, "brown", "white", { x: 20, y: 20 });
        drawMountains({ x: 0, y: horizon }, 15, 30, "darkgrey", "white", L11_2StrandInteraktion.width / 2 - 20);
        drawMountains({ x: 0, y: horizon }, 10, 20, "darkgrey", "green", L11_2StrandInteraktion.width / 2);
        drawTrees({ x: 40, y: 100 }, { x: 90, y: 10 });
        boat.draw();
        cloud1.draw();
        cloud2.draw();
        bird.draw();
        jellyfish.draw();
        palme.draw();
        person.draw();
        person.draw();
        surferi.draw();
        surferi.draw();
        //Speichern des Canvas-Bildes//
        imgData = L11_2StrandInteraktion.crc2.getImageData(0, 0, L11_2StrandInteraktion.width, L11_2StrandInteraktion.height);
        canvas.addEventListener("click", handleClick);
    } //Close Load-Funktion//
    //ANIMATION START//
    function handleClick(_event) {
        console.log("Click");
        requestAnimationFrame(frame);
    }
    function frame() {
        L11_2StrandInteraktion.crc2.putImageData(imgData, 0, 0);
        newSun.sink();
        bird.fly();
        jellyfish.swim();
        cloud1.fly();
        cloud2.fly();
        requestAnimationFrame(frame);
    }
    //Funktionen für den unbewegten Teil des Bildes: Background, Sea, Beach, Mountains, Trees)
    function drawBackground() {
        console.log("Background");
        console.log(L11_2StrandInteraktion.golden);
        let gradient = L11_2StrandInteraktion.crc2.createLinearGradient(0, 0, 0, L11_2StrandInteraktion.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L11_2StrandInteraktion.golden, "white");
        gradient.addColorStop(1, "lightyellow");
        L11_2StrandInteraktion.crc2.fillStyle = gradient;
        L11_2StrandInteraktion.crc2.fillRect(0, 0, L11_2StrandInteraktion.width, L11_2StrandInteraktion.height);
    }
    function drawSea() {
        console.log("Sea");
        let gradient = L11_2StrandInteraktion.crc2.createLinearGradient(0, 0, 0, L11_2StrandInteraktion.height);
        gradient.addColorStop(L11_2StrandInteraktion.golden, "blue");
        gradient.addColorStop(1, "lightblue");
        L11_2StrandInteraktion.crc2.fillStyle = gradient;
        L11_2StrandInteraktion.crc2.fillRect(0, L11_2StrandInteraktion.golden * L11_2StrandInteraktion.height, L11_2StrandInteraktion.width, L11_2StrandInteraktion.height);
    }
    function drawBeach(_position, _widthfront) {
        console.log("Beach");
        L11_2StrandInteraktion.crc2.beginPath();
        L11_2StrandInteraktion.crc2.moveTo(_position.x, _position.y);
        L11_2StrandInteraktion.crc2.bezierCurveTo(_position.x - 100, _position.y + 10, _position.x + 100, _position.y + 100, _position.x + 800, _position.y + 200);
        L11_2StrandInteraktion.crc2.lineTo(0, L11_2StrandInteraktion.height);
        L11_2StrandInteraktion.crc2.lineTo(0, _position.y);
        L11_2StrandInteraktion.crc2.closePath();
        let gradient = L11_2StrandInteraktion.crc2.createLinearGradient(0, _position.y, 0, L11_2StrandInteraktion.height);
        gradient.addColorStop(0, "brown");
        gradient.addColorStop(0.6, "lightyellow");
        L11_2StrandInteraktion.crc2.fillStyle = gradient;
        L11_2StrandInteraktion.crc2.fill();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh, _end) {
        console.log("Mountains");
        let stepMin = 5;
        let stepMax = 15;
        let x = 0;
        L11_2StrandInteraktion.crc2.save();
        L11_2StrandInteraktion.crc2.translate(_position.x, _position.y);
        L11_2StrandInteraktion.crc2.beginPath();
        L11_2StrandInteraktion.crc2.moveTo(0, 0);
        L11_2StrandInteraktion.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11_2StrandInteraktion.crc2.lineTo(x, y);
        } while (x < L11_2StrandInteraktion.width / 2 - 80);
        L11_2StrandInteraktion.crc2.lineTo(_end, 0);
        L11_2StrandInteraktion.crc2.closePath();
        let gradient = L11_2StrandInteraktion.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);
        L11_2StrandInteraktion.crc2.fillStyle = gradient;
        L11_2StrandInteraktion.crc2.fill();
        L11_2StrandInteraktion.crc2.restore();
    }
    function drawTrees(_position, _size) {
        console.log("Trees", _position, _size);
        let nParticles = 80;
        let radiusParticle = 5;
        let particle = new Path2D();
        let gradient = L11_2StrandInteraktion.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(122, 64%, 50%, 1");
        gradient.addColorStop(1, "HSLA(122, 88%, 75%, 0.3");
        L11_2StrandInteraktion.crc2.save();
        L11_2StrandInteraktion.crc2.translate(_position.x, _position.y);
        L11_2StrandInteraktion.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L11_2StrandInteraktion.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L11_2StrandInteraktion.crc2.translate(x, y);
            L11_2StrandInteraktion.crc2.fill(particle);
            L11_2StrandInteraktion.crc2.restore();
        }
        L11_2StrandInteraktion.crc2.restore();
    }
    //Funktion für die Zufallszahl//
    function getRandom(_min, _max) {
        let random = Math.floor(Math.random() * (_max - _min + 1)) + _min;
        return random;
    }
    L11_2StrandInteraktion.getRandom = getRandom;
})(L11_2StrandInteraktion || (L11_2StrandInteraktion = {}));
//# sourceMappingURL=StrandMain.js.map