namespace L08_Strand_Canvas {


    export let golden: number = 0.62;
    export let height: number;
    export let width: number;
    export let crc2: CanvasRenderingContext2D;
    

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        height = canvas.height;
        width = canvas.width;
        let horizon: number = height * golden;
        let newSun: Sun = new Sun ({ x: 250, y: getRandom(30, 100) });
        let Cloud1: Cloud = new Cloud ({ x: 100, y: 50 }, { x: 70, y: 60 });
        let Cloud2: Cloud = new Cloud ({ x: 200, y: 70 }, { x: 100, y: 150 });

        drawBackground();
        newSun.draw();
        newSun.sink();
        Cloud1.draw();
        Cloud2.draw();
        Cloud1.fly();
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



    function drawSea(): void {
        console.log("Sea");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, height);

        gradient.addColorStop(golden, "blue");
        gradient.addColorStop(1, "lightblue");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, golden * height, width, height);

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

    function getRandom(_min: number, _max: number): number {
        let random: number = Math.floor(Math.random() * (_max - _min + 1)) + _min;
        return random;
    }
}
