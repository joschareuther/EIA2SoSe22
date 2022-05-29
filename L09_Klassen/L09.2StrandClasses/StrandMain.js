var StrandClasses;
(function (StrandClasses) {
    StrandClasses.golden = 0.62;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.getElementById("canvas");
        if (!canvas)
            return;
        StrandClasses.crc2 = canvas.getContext("2d");
        StrandClasses.height = canvas.height;
        StrandClasses.width = canvas.width;
        let horizon = StrandClasses.height * StrandClasses.golden;
        let newSun = new StrandClasses.Sun({ x: 250, y: getRandom(30, 100) });
        let cloud1 = new StrandClasses.Cloud({ x: 100, y: 50 }, { x: 70, y: 60 });
        let cloud2 = new StrandClasses.Cloud({ x: 200, y: 70 }, { x: 100, y: 150 });
        let boat = new StrandClasses.Boat({ x: getRandom(230, 290), y: horizon + 10 });
        let volcano = new StrandClasses.Vulcano({ x: getRandom(-30, 20), y: horizon }, 40, 50, "brown", "white", { x: 20, y: 20 });
        let bird = new StrandClasses.Bird({ x: 60, y: 100 });
        let jellyfish = new StrandClasses.Jellyfish({ x: getRandom(180, 280), y: getRandom(horizon + 30, horizon + 50) }, "yellow");
        let palme = new StrandClasses.Palme({ x: 100, y: 100 });
        let person = new StrandClasses.Person({ x: 100, y: 200 });
        let surferi = new StrandClasses.Surferi({ x: 100, y: 200 }, "brown", "red", "yellow");
        drawBackground();
        newSun.draw({ x: 250, y: getRandom(30, 100) });
        //newSun.sink();
        cloud1.draw({ x: 100, y: 50 }, { x: 70, y: 60 });
        cloud2.draw({ x: 200, y: 70 }, { x: 100, y: 150 });
        //cloud1.fly();
        boat.draw({ x: getRandom(230, 290), y: horizon + 10 });
        drawSea();
        drawBeach({ x: StrandClasses.width / 2 - 50, y: horizon }, 100);
        volcano.draw({ x: getRandom(-30, 20), y: horizon }, 40, 50, "brown", "white", { x: 20, y: 20 });
        drawMountains({ x: 0, y: horizon }, 15, 30, "darkgrey", "white", StrandClasses.width / 2 - 20);
        drawMountains({ x: 0, y: horizon }, 10, 20, "darkgrey", "green", StrandClasses.width / 2);
        drawTrees({ x: 40, y: 100 }, { x: 90, y: 10 });
        bird.draw({ x: 60, y: 100 });
        jellyfish.draw({ x: getRandom(180, 280), y: getRandom(horizon + 30, horizon + 50) }, "orange");
        palme.draw({ x: 100, y: 100 });
        person.draw({ x: 100, y: 200 });
        surferi.draw({ x: 100, y: 200 }, "brown", "red", "orange");
    }
    function drawBackground() {
        console.log("Background");
        console.log(StrandClasses.golden);
        let gradient = StrandClasses.crc2.createLinearGradient(0, 0, 0, StrandClasses.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(StrandClasses.golden, "white");
        gradient.addColorStop(1, "lightyellow");
        StrandClasses.crc2.fillStyle = gradient;
        StrandClasses.crc2.fillRect(0, 0, StrandClasses.width, StrandClasses.height);
    }
    function drawSea() {
        console.log("Sea");
        let gradient = StrandClasses.crc2.createLinearGradient(0, 0, 0, StrandClasses.height);
        gradient.addColorStop(StrandClasses.golden, "blue");
        gradient.addColorStop(1, "lightblue");
        StrandClasses.crc2.fillStyle = gradient;
        StrandClasses.crc2.fillRect(0, StrandClasses.golden * StrandClasses.height, StrandClasses.width, StrandClasses.height);
    }
    function drawBeach(_position, _widthfront) {
        console.log("Beach");
        StrandClasses.crc2.beginPath();
        StrandClasses.crc2.moveTo(_position.x, _position.y);
        StrandClasses.crc2.bezierCurveTo(_position.x - 100, _position.y + 10, _position.x + 100, _position.y + 100, _position.x + 800, _position.y + 200);
        StrandClasses.crc2.lineTo(0, StrandClasses.height);
        StrandClasses.crc2.lineTo(0, _position.y);
        StrandClasses.crc2.closePath();
        let gradient = StrandClasses.crc2.createLinearGradient(0, _position.y, 0, StrandClasses.height);
        gradient.addColorStop(0, "brown");
        gradient.addColorStop(0.6, "lightyellow");
        StrandClasses.crc2.fillStyle = gradient;
        StrandClasses.crc2.fill();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh, _end) {
        console.log("Mountains");
        let stepMin = 5;
        let stepMax = 15;
        let x = 0;
        StrandClasses.crc2.save();
        StrandClasses.crc2.translate(_position.x, _position.y);
        StrandClasses.crc2.beginPath();
        StrandClasses.crc2.moveTo(0, 0);
        StrandClasses.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            StrandClasses.crc2.lineTo(x, y);
        } while (x < StrandClasses.width / 2 - 80);
        StrandClasses.crc2.lineTo(_end, 0);
        StrandClasses.crc2.closePath();
        let gradient = StrandClasses.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);
        StrandClasses.crc2.fillStyle = gradient;
        StrandClasses.crc2.fill();
        StrandClasses.crc2.restore();
    }
    function drawTrees(_position, _size) {
        console.log("Trees", _position, _size);
        let nParticles = 80;
        let radiusParticle = 5;
        let particle = new Path2D();
        let gradient = StrandClasses.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(122, 64%, 50%, 1");
        gradient.addColorStop(1, "HSLA(122, 88%, 75%, 0.3");
        StrandClasses.crc2.save();
        StrandClasses.crc2.translate(_position.x, _position.y);
        StrandClasses.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            StrandClasses.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            StrandClasses.crc2.translate(x, y);
            StrandClasses.crc2.fill(particle);
            StrandClasses.crc2.restore();
        }
        StrandClasses.crc2.restore();
    }
    function getRandom(_min, _max) {
        let random = Math.floor(Math.random() * (_max - _min + 1)) + _min;
        return random;
    }
    StrandClasses.getRandom = getRandom;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=StrandMain.js.map