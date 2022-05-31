var StrandClasses;
(function (StrandClasses) {
    class Vector {
        x;
        y;
    }
    StrandClasses.Vector = Vector;
    class Sun {
        position;
        dy;
        constructor(_position, _dy) {
            this.position = _position;
            this.dy = _dy;
        }
        draw() {
            console.log("Sun");
            let gradient = StrandClasses.crc2.createRadialGradient(0, 0, 12, 0, 0, 50);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
            StrandClasses.crc2.save();
            StrandClasses.crc2.translate(this.position.x, this.position.y);
            StrandClasses.crc2.fillStyle = gradient;
            StrandClasses.crc2.arc(0, 0, 50, 0, 2 * Math.PI);
            StrandClasses.crc2.fill();
            StrandClasses.crc2.restore();
        }
        sink() {
            console.log("Sink!");
            this.position.y += this.dy;
            if (this.position.y - 50 > StrandClasses.height || this.position.y + 50 < 0) {
                this.dy = -this.dy;
            }
        }
    }
    StrandClasses.Sun = Sun;
    class Cloud {
        position;
        size;
        dx;
        constructor(_position, _size, _dx) {
            this.position = _position;
            this.size = _size;
            this.dx = _dx;
        }
        draw() {
            console.log("Cloud", this.position, this.size);
            let nParticles = 20;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = StrandClasses.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0");
            StrandClasses.crc2.save();
            StrandClasses.crc2.translate(this.position.x, this.position.y);
            StrandClasses.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                StrandClasses.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                StrandClasses.crc2.translate(x, y);
                StrandClasses.crc2.fill(particle);
                StrandClasses.crc2.restore();
            }
            StrandClasses.crc2.restore();
        }
        fly() {
            console.log("Wolke fliegt!");
            this.position.x += this.dx;
            if (this.position.x > StrandClasses.height || this.position.x < 0) {
                this.dx = -this.dx;
            }
        }
    }
    StrandClasses.Cloud = Cloud;
    class Boat {
        position;
        dx;
        constructor(_position, _dx) {
            this.position = _position;
            this.dx = _dx;
        }
        draw() {
            console.log("Boat", this.position);
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.moveTo(this.position.x - 10, this.position.y);
            StrandClasses.crc2.lineTo(this.position.x - 10, this.position.y - 40);
            StrandClasses.crc2.stroke();
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.moveTo(this.position.x + 0, this.position.y + 0);
            StrandClasses.crc2.lineTo(this.position.x + 10, this.position.y - 20);
            StrandClasses.crc2.lineTo(this.position.x - 40, this.position.y - 20);
            StrandClasses.crc2.lineTo(this.position.x - 30, this.position.y);
            StrandClasses.crc2.closePath();
            StrandClasses.crc2.stroke();
            StrandClasses.crc2.fillStyle = "#5c2a10";
            StrandClasses.crc2.fill();
            StrandClasses.crc2.fillStyle = "lightgrey";
            StrandClasses.crc2.fillRect(this.position.x - 30, this.position.y - 17, 3, 4);
            StrandClasses.crc2.fillRect(this.position.x, this.position.y - 17, 3, 4);
            StrandClasses.crc2.fillRect(this.position.x - 25, this.position.y - 17, 3, 4);
            StrandClasses.crc2.fillRect(this.position.x - 20, this.position.y - 17, 3, 4);
            StrandClasses.crc2.fillRect(this.position.x - 15, this.position.y - 17, 3, 4);
            StrandClasses.crc2.fillRect(this.position.x - 10, this.position.y - 17, 3, 4);
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.moveTo(this.position.x - 10, this.position.y - 20);
            StrandClasses.crc2.lineTo(this.position.x, this.position.y - 25);
            StrandClasses.crc2.lineTo(this.position.x - 10, this.position.y - 40);
            StrandClasses.crc2.closePath();
            StrandClasses.crc2.stroke();
            StrandClasses.crc2.fillStyle = "#ebe4c7";
            StrandClasses.crc2.fill();
        }
        swimm() {
            console.log("Boat swimm!");
            this.position.x += this.dx;
            if (this.position.x > StrandClasses.height || this.position.x < 0) {
                this.dx = -this.dx;
            }
        }
    }
    StrandClasses.Boat = Boat;
    class Vulcano {
        position;
        min;
        max;
        colorLow;
        colorHigh;
        size;
        constructor(_position, _min, _max, _colorLow, _colorHigh, _size) {
            this.position = _position;
            this.min = _min;
            this.max = _max;
            this.colorLow = _colorLow;
            this.colorHigh = _colorHigh;
            this.size = _size;
        }
        draw(_position, _min, _max, _colorLow, _colorHigh, _size) {
            console.log("Volcano");
            StrandClasses.crc2.save();
            StrandClasses.crc2.translate(_position.x, _position.y);
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.arc(45, -45, 10, 0.1, 0.6, true);
            StrandClasses.crc2.closePath();
            StrandClasses.crc2.stroke();
            StrandClasses.crc2.fillStyle = "HSLA(0, 87%, 50%, 1";
            StrandClasses.crc2.fill();
            StrandClasses.crc2.restore();
            StrandClasses.crc2.save();
            StrandClasses.crc2.translate(_position.x, _position.y);
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.moveTo(0, 0);
            StrandClasses.crc2.lineTo(40, -_max);
            StrandClasses.crc2.lineTo(45, -_min);
            StrandClasses.crc2.lineTo(50, -_max);
            StrandClasses.crc2.lineTo(79, 0);
            StrandClasses.crc2.closePath();
            let gradient = StrandClasses.crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.8, _colorHigh);
            StrandClasses.crc2.fillStyle = gradient;
            StrandClasses.crc2.fill();
            StrandClasses.crc2.restore();
            let nParticles = 20;
            let radiusParticle = 2;
            let particle = new Path2D();
            let gradient2 = StrandClasses.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient2.addColorStop(0, "HSLA(0, 87%, 50%, 1");
            gradient2.addColorStop(1, "HSLA(0, 65%, 38%, 0.3");
            StrandClasses.crc2.save();
            StrandClasses.crc2.translate(_position.x, _position.y);
            StrandClasses.crc2.fillStyle = gradient2;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                StrandClasses.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                StrandClasses.crc2.translate(x + 45, y - 50);
                StrandClasses.crc2.fill(particle);
                StrandClasses.crc2.restore();
            }
            StrandClasses.crc2.restore();
        }
        explode() {
            console.log("Vulkan explodiert!");
        }
    }
    StrandClasses.Vulcano = Vulcano;
    class Person {
        position;
        color;
        clothingcolor;
        feathercolor;
        constructor(_position, _color, _clothingcolor, _feathercolor) {
            this.position = _position;
            this.color = _color;
            this.clothingcolor = _clothingcolor;
            this.feathercolor = _feathercolor;
        }
        draw() {
            console.log("Person");
            let x;
            let y;
            StrandClasses.crc2.fillStyle = this.clothingcolor;
            StrandClasses.crc2.fillRect(x = StrandClasses.getRandom(5, 160), y = StrandClasses.getRandom(120, 140), 8, 10);
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.arc(x - 12, y, 15, Math.PI * 2, Math.PI * 1.7, true);
            StrandClasses.crc2.fillStyle = this.feathercolor;
            StrandClasses.crc2.fill();
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.arc(x + 4, y - 2, 5, 0, Math.PI * 2, true);
            StrandClasses.crc2.fillStyle = this.color;
            StrandClasses.crc2.fill();
        }
        move() {
            console.log("Menschi läuft!");
        }
    }
    StrandClasses.Person = Person;
    class Surferi {
        position;
        color;
        clothingcolor;
        surfboardcolor;
        constructor(_position, _color, _clothingcolor, _surfboardcolor) {
            this.position = _position;
            this.color = _color;
            this.clothingcolor = _clothingcolor;
            this.surfboardcolor = _surfboardcolor;
        }
        draw() {
            console.log("Surferi");
            let x;
            let y;
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.ellipse(x = StrandClasses.getRandom(100, 160), y = StrandClasses.getRandom(100, 120), 3, 10, 20, 0, 2 * Math.PI);
            StrandClasses.crc2.stroke();
            StrandClasses.crc2.fillStyle = this.surfboardcolor;
            StrandClasses.crc2.fill();
            StrandClasses.crc2.save();
            StrandClasses.crc2.translate(x, y);
            StrandClasses.crc2.restore();
            StrandClasses.crc2.fillStyle = "rgb(" + StrandClasses.getRandom(10, 200) + ", " + StrandClasses.getRandom(50, 200) + ", " + StrandClasses.getRandom(50, 200) + ", " + 1 + ")";
            StrandClasses.crc2.fillRect(x - 4, y - 10, 8, 10);
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.arc(x - 16, y - 10, 15, Math.PI * 2, Math.PI * 1.7, true);
            StrandClasses.crc2.fillStyle = "white";
            StrandClasses.crc2.fill();
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.arc(x, y - 12, 5, 0, Math.PI * 2, true);
            StrandClasses.crc2.fillStyle = this.color;
            StrandClasses.crc2.fill();
        }
        swim() {
            console.log("Surferi surft");
        }
    }
    StrandClasses.Surferi = Surferi;
    class Jellyfish {
        position;
        color;
        constructor(_position, _color) {
            this.position = _position;
            this.color = _color;
        }
        draw() {
            console.log("Jellyfish");
            let horizon = StrandClasses.height * StrandClasses.golden;
            let x;
            let y;
            StrandClasses.crc2.save();
            StrandClasses.crc2.translate(0, 0);
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.arc(x = StrandClasses.getRandom(180, 280), y = StrandClasses.getRandom(horizon + 30, horizon + 50), StrandClasses.getRandom(4, 7), 3, 6);
            StrandClasses.crc2.closePath();
            StrandClasses.crc2.stroke();
            StrandClasses.crc2.fillStyle = this.color;
            StrandClasses.crc2.fill();
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.moveTo(x - 3, y);
            StrandClasses.crc2.lineTo(x + 6, y + 10);
            StrandClasses.crc2.moveTo(x, y);
            StrandClasses.crc2.lineTo(x + 9, y + 10);
            StrandClasses.crc2.moveTo(x + 3, y - 1);
            StrandClasses.crc2.lineTo(x + 12, y + 10);
            StrandClasses.crc2.stroke();
        }
        swim() {
            console.log("Jellyfish swim!");
        }
    }
    StrandClasses.Jellyfish = Jellyfish;
    class Palme {
        position;
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            console.log("Palme");
            let x;
            let y;
            for (let nPalmos = 0; nPalmos < 4; nPalmos++) {
                StrandClasses.crc2.fillStyle = "brown";
                StrandClasses.crc2.fillRect(x = StrandClasses.getRandom(5, 70), y = StrandClasses.getRandom(90, 110), 5, 15);
                StrandClasses.crc2.beginPath();
                StrandClasses.crc2.arc(x, y + 30, 30, 180, 30);
                StrandClasses.crc2.fillStyle = "green";
                StrandClasses.crc2.fill();
                StrandClasses.crc2.beginPath();
                StrandClasses.crc2.arc(x + 20, y + 25, 30, 180, 30);
                StrandClasses.crc2.fillStyle = "green";
                StrandClasses.crc2.fill();
                StrandClasses.crc2.beginPath();
                StrandClasses.crc2.arc(x + 18, y + 1, 15, Math.PI, Math.PI * 1.5);
                StrandClasses.crc2.fillStyle = "green";
                StrandClasses.crc2.fill();
                StrandClasses.crc2.beginPath();
                StrandClasses.crc2.arc(x - 12, y, 15, Math.PI * 2, Math.PI * 1.6, true);
                StrandClasses.crc2.fillStyle = "green";
                StrandClasses.crc2.fill();
                StrandClasses.crc2.beginPath();
                StrandClasses.crc2.arc(x - 6, y + 9, 14, Math.PI * 1.8, Math.PI * 1.3, true);
                StrandClasses.crc2.fillStyle = "green";
                StrandClasses.crc2.fill();
            }
        }
        walk() {
            console.log("Palme läuft!");
        }
    }
    StrandClasses.Palme = Palme;
    class Bird {
        position;
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            console.log("Birds");
            let horizon = StrandClasses.height * StrandClasses.golden;
            for (let nBirds = 0; nBirds < 8; nBirds++) {
                StrandClasses.crc2.save();
                StrandClasses.crc2.translate(StrandClasses.getRandom(0, 60), StrandClasses.getRandom(60, 100) - horizon);
                StrandClasses.crc2.beginPath();
                StrandClasses.crc2.arc(100, 70, 4, 3.3, 0);
                StrandClasses.crc2.arc(100 + 7, 70, 4, 3.4, 0);
                StrandClasses.crc2.fillStyle = "HSLA(0, 0%, 100%, 1";
                StrandClasses.crc2.fill();
                StrandClasses.crc2.stroke();
                StrandClasses.crc2.restore();
            }
        }
        fly() {
            console.log("Möwe flieg!");
        }
    }
    StrandClasses.Bird = Bird;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=StrandClasses.js.map