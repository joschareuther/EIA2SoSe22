var L11_2StrandInteraktion;
(function (L11_2StrandInteraktion) {
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
            L11_2StrandInteraktion.crc2.save();
            L11_2StrandInteraktion.crc2.translate(_position.x, _position.y);
            L11_2StrandInteraktion.crc2.beginPath();
            L11_2StrandInteraktion.crc2.arc(45, -45, 10, 0.1, 0.6, true);
            L11_2StrandInteraktion.crc2.closePath();
            L11_2StrandInteraktion.crc2.stroke();
            L11_2StrandInteraktion.crc2.fillStyle = "HSLA(0, 87%, 50%, 1";
            L11_2StrandInteraktion.crc2.fill();
            L11_2StrandInteraktion.crc2.restore();
            L11_2StrandInteraktion.crc2.save();
            L11_2StrandInteraktion.crc2.translate(_position.x, _position.y);
            L11_2StrandInteraktion.crc2.beginPath();
            L11_2StrandInteraktion.crc2.moveTo(0, 0);
            L11_2StrandInteraktion.crc2.lineTo(40, -_max);
            L11_2StrandInteraktion.crc2.lineTo(45, -_min);
            L11_2StrandInteraktion.crc2.lineTo(50, -_max);
            L11_2StrandInteraktion.crc2.lineTo(79, 0);
            L11_2StrandInteraktion.crc2.closePath();
            let gradient = L11_2StrandInteraktion.crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.8, _colorHigh);
            L11_2StrandInteraktion.crc2.fillStyle = gradient;
            L11_2StrandInteraktion.crc2.fill();
            L11_2StrandInteraktion.crc2.restore();
            let nParticles = 20;
            let radiusParticle = 2;
            let particle = new Path2D();
            let gradient2 = L11_2StrandInteraktion.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient2.addColorStop(0, "HSLA(0, 87%, 50%, 1");
            gradient2.addColorStop(1, "HSLA(0, 65%, 38%, 0.3");
            L11_2StrandInteraktion.crc2.save();
            L11_2StrandInteraktion.crc2.translate(_position.x, _position.y);
            L11_2StrandInteraktion.crc2.fillStyle = gradient2;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L11_2StrandInteraktion.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                L11_2StrandInteraktion.crc2.translate(x + 45, y - 50);
                L11_2StrandInteraktion.crc2.fill(particle);
                L11_2StrandInteraktion.crc2.restore();
            }
            L11_2StrandInteraktion.crc2.restore();
        }
        explode() {
            console.log("Vulkan explodiert!");
        }
    }
    L11_2StrandInteraktion.Vulcano = Vulcano;
})(L11_2StrandInteraktion || (L11_2StrandInteraktion = {}));
//# sourceMappingURL=Vulcano.js.map