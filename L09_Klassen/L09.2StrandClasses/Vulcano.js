var StrandClasses;
(function (StrandClasses) {
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
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=Vulcano.js.map