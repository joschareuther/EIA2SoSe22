var L10_2StrandPolymorphie;
(function (L10_2StrandPolymorphie) {
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
            L10_2StrandPolymorphie.crc2.save();
            L10_2StrandPolymorphie.crc2.translate(_position.x, _position.y);
            L10_2StrandPolymorphie.crc2.beginPath();
            L10_2StrandPolymorphie.crc2.arc(45, -45, 10, 0.1, 0.6, true);
            L10_2StrandPolymorphie.crc2.closePath();
            L10_2StrandPolymorphie.crc2.stroke();
            L10_2StrandPolymorphie.crc2.fillStyle = "HSLA(0, 87%, 50%, 1";
            L10_2StrandPolymorphie.crc2.fill();
            L10_2StrandPolymorphie.crc2.restore();
            L10_2StrandPolymorphie.crc2.save();
            L10_2StrandPolymorphie.crc2.translate(_position.x, _position.y);
            L10_2StrandPolymorphie.crc2.beginPath();
            L10_2StrandPolymorphie.crc2.moveTo(0, 0);
            L10_2StrandPolymorphie.crc2.lineTo(40, -_max);
            L10_2StrandPolymorphie.crc2.lineTo(45, -_min);
            L10_2StrandPolymorphie.crc2.lineTo(50, -_max);
            L10_2StrandPolymorphie.crc2.lineTo(79, 0);
            L10_2StrandPolymorphie.crc2.closePath();
            let gradient = L10_2StrandPolymorphie.crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.8, _colorHigh);
            L10_2StrandPolymorphie.crc2.fillStyle = gradient;
            L10_2StrandPolymorphie.crc2.fill();
            L10_2StrandPolymorphie.crc2.restore();
            let nParticles = 20;
            let radiusParticle = 2;
            let particle = new Path2D();
            let gradient2 = L10_2StrandPolymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient2.addColorStop(0, "HSLA(0, 87%, 50%, 1");
            gradient2.addColorStop(1, "HSLA(0, 65%, 38%, 0.3");
            L10_2StrandPolymorphie.crc2.save();
            L10_2StrandPolymorphie.crc2.translate(_position.x, _position.y);
            L10_2StrandPolymorphie.crc2.fillStyle = gradient2;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L10_2StrandPolymorphie.crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                L10_2StrandPolymorphie.crc2.translate(x + 45, y - 50);
                L10_2StrandPolymorphie.crc2.fill(particle);
                L10_2StrandPolymorphie.crc2.restore();
            }
            L10_2StrandPolymorphie.crc2.restore();
        }
        explode() {
            console.log("Vulkan explodiert!");
        }
    }
    L10_2StrandPolymorphie.Vulcano = Vulcano;
})(L10_2StrandPolymorphie || (L10_2StrandPolymorphie = {}));
//# sourceMappingURL=Vulcano.js.map