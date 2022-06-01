var StrandClasses;
(function (StrandClasses) {
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
            this.draw();
            if (this.position.x > StrandClasses.width || this.position.x < 0) {
                this.dx = -this.dx;
            }
        }
    }
    StrandClasses.Cloud = Cloud;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=Cloud.js.map