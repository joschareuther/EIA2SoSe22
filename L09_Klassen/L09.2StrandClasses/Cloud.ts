namespace StrandClasses {
    
    export class Cloud {
        position: Vector;
        size: Vector;
        dx: number;

        constructor(_position: Vector, _size: Vector, _dx: number) {
            this.position = _position;
            this.size = _size;
            this.dx = _dx;
        }

        draw(): void {
            console.log("Cloud", this.position, this.size);
            let nParticles: number = 20;
            let radiusParticle: number = 20;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * this.size.x;
                let y: number = - (Math.random() * this.size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();

            }
            crc2.restore();

        }

        fly(): void {
            console.log("Wolke fliegt!");
            this.position.x += this.dx;
            if (this.position.x > height || this.position.x < 0) {
                this.dx = - this.dx;
            }

        }
    }

}
