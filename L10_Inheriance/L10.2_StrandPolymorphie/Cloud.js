var L10_2StrandPolymorphie;
(function (L10_2StrandPolymorphie) {
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
            let gradient = L10_2StrandPolymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0");
            L10_2StrandPolymorphie.crc2.save();
            L10_2StrandPolymorphie.crc2.translate(this.position.x, this.position.y);
            L10_2StrandPolymorphie.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                L10_2StrandPolymorphie.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                L10_2StrandPolymorphie.crc2.translate(x, y);
                L10_2StrandPolymorphie.crc2.fill(particle);
                L10_2StrandPolymorphie.crc2.restore();
            }
            L10_2StrandPolymorphie.crc2.restore();
        }
        fly() {
            console.log("Wolke fliegt!");
            this.position.x += this.dx;
            this.draw();
            if (this.position.x > L10_2StrandPolymorphie.width || this.position.x < 0) {
                this.dx = -this.dx;
            }
        }
    }
    L10_2StrandPolymorphie.Cloud = Cloud;
})(L10_2StrandPolymorphie || (L10_2StrandPolymorphie = {}));
//# sourceMappingURL=Cloud.js.map