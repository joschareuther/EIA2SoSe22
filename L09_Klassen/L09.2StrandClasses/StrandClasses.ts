namespace StrandClasses {
    export interface Vector {
        x: number;
        y: number;
    }

    export let golden: number = 0.62;
    export let height: number;
    export let width: number;
    export let crc2: CanvasRenderingContext2D;

    export class Sun {
        position: Vector;

        constructor(_position: Vector) {
            this.position = _position;
        }

        draw(_position: Vector): void {
            console.log("Sun", _position);

            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 12, 0, 0, 50);

            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");

            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, 50, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }

        sink(): void {

        }
    }

    export class Cloud {
        position: Vector;
        size: Vector;

        constructor(_position: Vector, _size: Vector) {
            this.position = _position;
            this.size = _size;
        }

        draw(_position: Vector, _size: Vector): void {
            console.log("Cloud", _position, _size);
            let nParticles: number = 20;
            let radiusParticle: number = 20;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0");

            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * _size.x;
                let y: number = - (Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();

            }
            crc2.restore();

        }

        fly(): void {

        }
    }

    export class Boat {
        position: Vector;

        constructor(_position: Vector) {
            this.position = _position;
        }

        draw(_position: Vector): void {
            console.log("Boat", _position);


            crc2.beginPath();
            crc2.moveTo(_position.x - 10, _position.y);
            crc2.lineTo(_position.x - 10, _position.y - 40);
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(_position.x + 0, _position.y + 0);
            crc2.lineTo(_position.x + 10, _position.y - 20);
            crc2.lineTo(_position.x - 40, _position.y - 20);
            crc2.lineTo(_position.x - 30, _position.y);
            crc2.closePath();
            crc2.stroke();

            crc2.fillStyle = "#5c2a10";
            crc2.fill();

            crc2.fillStyle = "lightgrey";
            crc2.fillRect(_position.x - 30, _position.y - 17, 3, 4);
            crc2.fillRect(_position.x, _position.y - 17, 3, 4);
            crc2.fillRect(_position.x - 25, _position.y - 17, 3, 4);
            crc2.fillRect(_position.x - 20, _position.y - 17, 3, 4);
            crc2.fillRect(_position.x - 15, _position.y - 17, 3, 4);
            crc2.fillRect(_position.x - 10, _position.y - 17, 3, 4);

            crc2.beginPath();
            crc2.moveTo(_position.x - 10, _position.y - 20);
            crc2.lineTo(_position.x, _position.y - 25);
            crc2.lineTo(_position.x - 10, _position.y - 40);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#ebe4c7";
            crc2.fill();
        }

        swimm(): void {

        }
    }

    export class Beach {
        position: Vector;
        widthfront: number;

        constructor(_position: Vector, _widthfront: number) {
            this.position = _position;
            this.widthfront = _widthfront;
        }

        draw(_position: Vector, _widthfront: number): void {
            console.log("Beach");

            crc2.beginPath();
            crc2.moveTo(_position.x, _position.y);
            crc2.bezierCurveTo(_position.x - 100, _position.y + 10, _position.x + 100, _position.y + 100, _position.x + 800, _position.y + 200);
            crc2.lineTo(0, height);
            crc2.lineTo(0, _position.y);
            crc2.closePath();

            let gradient: CanvasGradient = crc2.createLinearGradient(0, _position.y, 0, height);
            gradient.addColorStop(0, "brown");
            gradient.addColorStop(0.6, "lightyellow");

            crc2.fillStyle = gradient;
            crc2.fill();
        }

        change(): void {

        }

    }

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

        }
    }

    export class Person {
        position: Vector;
        color: string;
        clothingcolor: string;

        constructor(_position: Vector, _color: string, _clothingcolor: string) {
            this.position = _position;
            this.color = _color;
            this.clothingcolor = _clothingcolor;
        }

        draw(_position: Vector, _color: string, _clothingcolor: string): void {
            console.log("Person");
            let x: number;
            let y: number;

            for (let nPeople: number = 0; nPeople < 3; nPeople++) {
                crc2.fillStyle = "rgb(" + getRandom(10, 200) + ", " + getRandom(50, 200) + ", " + getRandom(50, 200) + ", " + 1 + ")";
                crc2.fillRect(x = getRandom(5, 160), y = getRandom(120, 140), 8, 10);

                crc2.beginPath();
                crc2.arc(x - 12, y, 15, Math.PI * 2, Math.PI * 1.7, true);
                crc2.fillStyle = "white";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(x + 4, y - 2, 5, 0, Math.PI * 2, true);
                crc2.fillStyle = "#3b1623";
                crc2.fill();
            }
        }

        move(): void {

        }
    }

    export class Surferi {
        position: Vector;
        color: string;
        clothingcolor: string;
        surfboardcolor: string;

        constructor(_position: Vector, _color: string, _clothingcolor: string, _surfboardcolor: string) {
            this.position = _position;
            this.color = _color;
            this.clothingcolor = _clothingcolor;
            this.surfboardcolor = _surfboardcolor;
        }

        draw(_position: Vector, _color: string, _clothingcolor: string, _surfboardcolor: string): void {
            console.log("Surferi");
            let x: number;
            let y: number;

            for (let nPeople: number = 0; nPeople < 2; nPeople++) {

                crc2.beginPath();
                crc2.ellipse(x = getRandom(100, 160), y = getRandom(100, 120), 3, 10, 20, 0, 2 * Math.PI);
                crc2.stroke();
                crc2.fillStyle = "orange";
                crc2.fill();

                crc2.save();
                crc2.translate(x, y);
                crc2.restore();

                crc2.fillStyle = "rgb(" + getRandom(10, 200) + ", " + getRandom(50, 200) + ", " + getRandom(50, 200) + ", " + 1 + ")";
                crc2.fillRect(x - 4, y - 10, 8, 10);

                crc2.beginPath();
                crc2.arc(x - 16, y - 10, 15, Math.PI * 2, Math.PI * 1.7, true);
                crc2.fillStyle = "white";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(x, y - 12, 5, 0, Math.PI * 2, true);
                crc2.fillStyle = "#3b1623";
                crc2.fill();
            }
        }

        swim(): void {

        }
    }

    export class Jellyfish {
        position: Vector;
        color: string;


        constructor(_position: Vector, _color: string) {
            this.position = _position;
            this.color = _color;

        }

        draw(_position: Vector, _color: string): void {
            console.log("Jellyfish");
            let horizon: number = height * golden;
            let x: number;
            let y: number;


            for (let nJellyfish: number = 0; nJellyfish < 5; nJellyfish++) {
                crc2.save();
                crc2.translate(0, 0);
                crc2.beginPath();
                crc2.arc(x = getRandom(180, 280), y = getRandom(horizon + 30, horizon + 50), getRandom(4, 7), 3, 6);
                crc2.closePath();
                crc2.stroke();

                crc2.fillStyle = "HSLA(0, 100%, 50%, 0.65";
                crc2.fill();

                crc2.beginPath();
                crc2.moveTo(x - 3, y);
                crc2.lineTo(x + 6, y + 10);

                crc2.moveTo(x, y);
                crc2.lineTo(x + 9, y + 10);

                crc2.moveTo(x + 3, y - 1);
                crc2.lineTo(x + 12, y + 10);
                crc2.stroke();
            }
        }




        swim(): void {

        }
    }
    export class Palme {
        position: Vector;

        constructor(_position: Vector) {
            this.position = _position;
        }

        draw(_position: Vector): void {
            console.log("Palmen");
            let x: number;
            let y: number;
            for (let nPalmos: number = 0; nPalmos < 4; nPalmos++) {

                crc2.fillStyle = "brown";
                crc2.fillRect(x = getRandom(5, 70), y = getRandom(90, 110), 5, 15);

                crc2.beginPath();
                crc2.arc(x, y + 30, 30, 180, 30);
                crc2.fillStyle = "green";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(x + 20, y + 25, 30, 180, 30);
                crc2.fillStyle = "green";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(x + 18, y + 1, 15, Math.PI, Math.PI * 1.5);
                crc2.fillStyle = "green";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(x - 12, y, 15, Math.PI * 2, Math.PI * 1.6, true);
                crc2.fillStyle = "green";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(x - 6, y + 9, 14, Math.PI * 1.8, Math.PI * 1.3, true);
                crc2.fillStyle = "green";
                crc2.fill();
            } }

            walk(): void {

        }
    }

    export class Bird {
        position: Vector;

        constructor(_position: Vector) {
            this.position = _position;
        }

        draw(_position: Vector): void {
            console.log("Birds");
            let horizon: number = height * golden;

            for (let nBirds: number = 0; nBirds < 8; nBirds++) {

                crc2.save();
                crc2.translate(getRandom(0, 60), getRandom(60, 100) - horizon);
                crc2.beginPath();
                crc2.arc(100, 70, 4, 3.3, 0);
                crc2.arc(100 + 7, 70, 4, 3.4, 0);




                crc2.fillStyle = "HSLA(0, 0%, 100%, 1";
                crc2.fill();

                crc2.stroke();
                crc2.restore();

            }
        }

        fly(): void {

        }


    }
}