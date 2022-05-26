namespace L08_Strand_Canvas {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;
    let height: number;
    let width: number;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        height = canvas.height;
        width = canvas.width;
        let horizon: number = height * golden;

        drawBackground();
        drawSun({ x: 250, y: getRandom(30, 100) });
        drawCloud({ x: 100, y: 50 }, { x: 70, y: 60 });
        drawCloud({ x: 200, y: 70 }, { x: 100, y: 150 });
        drawBoat({ x: getRandom(230, 290), y: horizon + 10 });
        drawSea();
        drawBeach({ x: width / 2 - 50, y: horizon }, 100);
        drawVulcano({ x: getRandom(-30, 20), y: horizon }, 40, 50, "brown", "white", { x: 20, y: 20 });
        drawMountains({ x: 0, y: horizon }, 15, 30, "darkgrey", "white", width / 2 - 20);
        drawMountains({ x: 0, y: horizon }, 10, 20, "darkgrey", "green", width / 2);
        drawTrees({ x: 40, y: 100 }, { x: 90, y: 10 });
        drawBirds();
        drawJellyfish();
        drawPalmos();
        drawPeople();
        drawSurferi();
        //drawFishes();

    }

    function drawBackground(): void {
        console.log("Background");
        console.log(golden);

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "lightyellow");


        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, width, height);
    }

    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 12;
        let r2: number = 50;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();

    }

    function drawCloud(_position: Vector, _size: Vector): void {
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

    function drawSea(): void {
        console.log("Sea");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, height);

        gradient.addColorStop(golden, "blue");
        gradient.addColorStop(1, "lightblue");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, golden * height, width, height);

    }

    function drawBeach(_position: Vector, _widthFront: number): void {
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

    function drawVulcano(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string, _size: Vector): void {
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

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string, _end: number): void {
        console.log("Mountains");

        let stepMin: number = 5;
        let stepMax: number = 15;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < width / 2 - 80);

        crc2.lineTo(_end, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawTrees(_position: Vector, _size: Vector): void {
        console.log("Trees", _position, _size);
        let nParticles: number = 80;
        let radiusParticle: number = 5;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(122, 64%, 50%, 1");
        gradient.addColorStop(1, "HSLA(122, 88%, 75%, 0.3");

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
    function drawBirds(): void {
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

    function drawBoat(_position: Vector): void {
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

    function drawJellyfish(): void {
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

    function drawPalmos(): void {
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
        }
    }

    function drawPeople(): void {
        console.log("Menschi");
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

    function drawSurferi(): void {
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
            crc2.fillRect(x - 4 , y - 10, 8, 10);

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


    function getRandom(_min: number, _max: number): number {
        let random: number = Math.floor(Math.random() * (_max - _min + 1)) + _min;
        return random;
    }
}
