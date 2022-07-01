var L11_2StrandInteraktion;
(function (L11_2StrandInteraktion) {
    class Cloud extends L11_2StrandInteraktion.Moveable {
        size;
        constructor(_position, _size, _dx) {
            super();
            this.position = _position;
            this.dx = _dx;
            this.size = _size;
        }
        draw() {
            console.log("Cloud", this.position, this.size);
            let nParticles = 20;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = L11_2StrandInteraktion.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0");
            L11_2StrandInteraktion.crc2.save();
            L11_2StrandInteraktion.crc2.translate(this.position.x, this.position.y);
            L11_2StrandInteraktion.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L11_2StrandInteraktion.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                L11_2StrandInteraktion.crc2.translate(x, y);
                L11_2StrandInteraktion.crc2.fill(particle);
                L11_2StrandInteraktion.crc2.restore();
            }
            L11_2StrandInteraktion.crc2.restore();
        }
        fly() {
            console.log("Wolke fliegt!");
            this.position.x += this.dx;
            this.draw();
            if (this.position.x > L11_2StrandInteraktion.width || this.position.x < 0) {
                this.dx = -this.dx;
            }
        }
    }
    L11_2StrandInteraktion.Cloud = Cloud;
})(L11_2StrandInteraktion || (L11_2StrandInteraktion = {}));
//# sourceMappingURL=Cloud.js.map