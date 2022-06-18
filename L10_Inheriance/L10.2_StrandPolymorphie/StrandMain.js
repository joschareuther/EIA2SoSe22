var L10_2StrandPolymorphie;
(function (L10_2StrandPolymorphie) {
    //Bei mir funktioniert die Animation leider noch nicht!//
    //Generelle Variablen//
    L10_2StrandPolymorphie.golden = 0.62;
    let horizon;
    let imgData;
    //Instanzierung der Objekte//
    let newSun = new L10_2StrandPolymorphie.Sun({ x: 250, y: getRandom(30, 100) }, 2);
    let cloud1 = new L10_2StrandPolymorphie.Cloud({ x: 100, y: 50 }, { x: 70, y: 60 }, 1);
    let cloud2 = new L10_2StrandPolymorphie.Cloud({ x: 200, y: 70 }, { x: 100, y: 150 }, 2);
    let boat = new L10_2StrandPolymorphie.Boat({ x: getRandom(230, 290), y: horizon + 10 }, 2);
    let volcano = new L10_2StrandPolymorphie.Vulcano({ x: getRandom(-30, 20), y: horizon }, 40, 50, "brown", "white", { x: 20, y: 20 });
    let bird = new L10_2StrandPolymorphie.Bird({ x: 60, y: 100 }, 2);
    let jellyfish = new L10_2StrandPolymorphie.Jellyfish({ x: getRandom(180, 280), y: getRandom(horizon + 30, horizon + 50) }, "red", 2);
    let palme = new L10_2StrandPolymorphie.Palme({ x: 100, y: 100 });
    let person = new L10_2StrandPolymorphie.Person({ x: 100, y: 200 }, "brown", "green", "white");
    let surferi = new L10_2StrandPolymorphie.Surferi({ x: 100, y: 200 }, "brown", "red", "yellow");
    //START//
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.getElementById("canvas");
        if (!canvas)
            return;
        L10_2StrandPolymorphie.crc2 = canvas.getContext("2d");
        L10_2StrandPolymorphie.height = canvas.height;
        L10_2StrandPolymorphie.width = canvas.width;
        horizon = L10_2StrandPolymorphie.height * L10_2StrandPolymorphie.golden;
        drawBackground();
        newSun.draw();
        drawSea();
        drawBeach({ x: L10_2StrandPolymorphie.width / 2 - 50, y: horizon }, 100);
        volcano.draw({ x: getRandom(-30, 20), y: horizon }, 40, 50, "brown", "white", { x: 20, y: 20 });
        drawMountains({ x: 0, y: horizon }, 15, 30, "darkgrey", "white", L10_2StrandPolymorphie.width / 2 - 20);
        drawMountains({ x: 0, y: horizon }, 10, 20, "darkgrey", "green", L10_2StrandPolymorphie.width / 2);
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
        imgData = L10_2StrandPolymorphie.crc2.getImageData(0, 0, L10_2StrandPolymorphie.width, L10_2StrandPolymorphie.height);
        canvas.addEventListener("click", handleClick);
    } //Close Load-Funktion//
    //ANIMATION START//
    function handleClick(_event) {
        console.log("Click");
        requestAnimationFrame(frame);
    }
    function frame() {
        L10_2StrandPolymorphie.crc2.putImageData(imgData, 0, 0);
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
        console.log(L10_2StrandPolymorphie.golden);
        let gradient = L10_2StrandPolymorphie.crc2.createLinearGradient(0, 0, 0, L10_2StrandPolymorphie.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L10_2StrandPolymorphie.golden, "white");
        gradient.addColorStop(1, "lightyellow");
        L10_2StrandPolymorphie.crc2.fillStyle = gradient;
        L10_2StrandPolymorphie.crc2.fillRect(0, 0, L10_2StrandPolymorphie.width, L10_2StrandPolymorphie.height);
    }
    function drawSea() {
        console.log("Sea");
        let gradient = L10_2StrandPolymorphie.crc2.createLinearGradient(0, 0, 0, L10_2StrandPolymorphie.height);
        gradient.addColorStop(L10_2StrandPolymorphie.golden, "blue");
        gradient.addColorStop(1, "lightblue");
        L10_2StrandPolymorphie.crc2.fillStyle = gradient;
        L10_2StrandPolymorphie.crc2.fillRect(0, L10_2StrandPolymorphie.golden * L10_2StrandPolymorphie.height, L10_2StrandPolymorphie.width, L10_2StrandPolymorphie.height);
    }
    function drawBeach(_position, _widthfront) {
        console.log("Beach");
        L10_2StrandPolymorphie.crc2.beginPath();
        L10_2StrandPolymorphie.crc2.moveTo(_position.x, _position.y);
        L10_2StrandPolymorphie.crc2.bezierCurveTo(_position.x - 100, _position.y + 10, _position.x + 100, _position.y + 100, _position.x + 800, _position.y + 200);
        L10_2StrandPolymorphie.crc2.lineTo(0, L10_2StrandPolymorphie.height);
        L10_2StrandPolymorphie.crc2.lineTo(0, _position.y);
        L10_2StrandPolymorphie.crc2.closePath();
        let gradient = L10_2StrandPolymorphie.crc2.createLinearGradient(0, _position.y, 0, L10_2StrandPolymorphie.height);
        gradient.addColorStop(0, "brown");
        gradient.addColorStop(0.6, "lightyellow");
        L10_2StrandPolymorphie.crc2.fillStyle = gradient;
        L10_2StrandPolymorphie.crc2.fill();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh, _end) {
        console.log("Mountains");
        let stepMin = 5;
        let stepMax = 15;
        let x = 0;
        L10_2StrandPolymorphie.crc2.save();
        L10_2StrandPolymorphie.crc2.translate(_position.x, _position.y);
        L10_2StrandPolymorphie.crc2.beginPath();
        L10_2StrandPolymorphie.crc2.moveTo(0, 0);
        L10_2StrandPolymorphie.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L10_2StrandPolymorphie.crc2.lineTo(x, y);
        } while (x < L10_2StrandPolymorphie.width / 2 - 80);
        L10_2StrandPolymorphie.crc2.lineTo(_end, 0);
        L10_2StrandPolymorphie.crc2.closePath();
        let gradient = L10_2StrandPolymorphie.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);
        L10_2StrandPolymorphie.crc2.fillStyle = gradient;
        L10_2StrandPolymorphie.crc2.fill();
        L10_2StrandPolymorphie.crc2.restore();
    }
    function drawTrees(_position, _size) {
        console.log("Trees", _position, _size);
        let nParticles = 80;
        let radiusParticle = 5;
        let particle = new Path2D();
        let gradient = L10_2StrandPolymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(122, 64%, 50%, 1");
        gradient.addColorStop(1, "HSLA(122, 88%, 75%, 0.3");
        L10_2StrandPolymorphie.crc2.save();
        L10_2StrandPolymorphie.crc2.translate(_position.x, _position.y);
        L10_2StrandPolymorphie.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L10_2StrandPolymorphie.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            L10_2StrandPolymorphie.crc2.translate(x, y);
            L10_2StrandPolymorphie.crc2.fill(particle);
            L10_2StrandPolymorphie.crc2.restore();
        }
        L10_2StrandPolymorphie.crc2.restore();
    }
    //Funktion für die Zufallszahl//
    function getRandom(_min, _max) {
        let random = Math.floor(Math.random() * (_max - _min + 1)) + _min;
        return random;
    }
    L10_2StrandPolymorphie.getRandom = getRandom;
})(L10_2StrandPolymorphie || (L10_2StrandPolymorphie = {}));
//# sourceMappingURL=StrandMain.js.map