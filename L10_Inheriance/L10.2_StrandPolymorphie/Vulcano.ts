namespace L10_2StrandPolymorphie {

    export class Vulcano {
        position: Vector;
        min: number;
        max: number;
        colorLow: string;
        colorHigh: string;
        size: Vector;

        constructor(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string, _size: Vector) {
            this.position = _position;
            this.min = _min;
            this.max = _max;
            this.colorLow = _colorLow;
            this.colorHigh = _colorHigh;
            this.size = _size;
        }

        draw(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string, _size: Vector): void {
            console.log("Volcano");

            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.beginPath();
            crc2.arc(45, -45, 10, 0.1, 0.6, true);
            crc2.closePath();
            crc2.stroke();

            crc2.fillStyle = "HSLA(0, 87%, 50%, 1";
            crc2.fill();

            crc2.restore();

            crc2.save();
            crc2.translate(_position.x, _position.y);

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(40, -_max);
            crc2.lineTo(45, -_min);
            crc2.lineTo(50, -_max);
            crc2.lineTo(79, 0);

            crc2.closePath();

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.8, _colorHigh);

            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.restore();

            let nParticles: number = 20;
            let radiusParticle: number = 2;
            let particle: Path2D = new Path2D();
            let gradient2: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient2.addColorStop(0, "HSLA(0, 87%, 50%, 1");
            gradient2.addColorStop(1, "HSLA(0, 65%, 38%, 0.3");

            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient2;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * _size.x;
                let y: number = - (Math.random() * _size.y);
                crc2.translate(x + 45, y - 50);
                crc2.fill(particle);
                crc2.restore();

            }
            crc2.restore();
        }

        explode(): void {
            console.log("Vulkan explodiert!");
        }
    }
}
