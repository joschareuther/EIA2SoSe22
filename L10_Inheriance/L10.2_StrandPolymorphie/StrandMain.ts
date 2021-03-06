namespace L10_2StrandPolymorphie {

    //Generelle Variablen//
    export let golden: number = 0.62;
    export let height: number;
    export let width: number;
    export let crc2: CanvasRenderingContext2D;
    let horizon: number;
    let imgData: ImageData;

    //Instanzierung der Objekte//
    let newSun: Sun = new Sun({ x: 250, y: getRandom(30, 100) }, 2);
    let cloud1: Cloud = new Cloud({ x: 100, y: 50 }, { x: 70, y: 60 }, 1);
    let cloud2: Cloud = new Cloud({ x: 200, y: 70 }, { x: 100, y: 150 }, 2);
    let boat: Boat = new Boat({x: getRandom(230, 290), y: horizon + 10 }, 2);
    let volcano: Vulcano = new Vulcano({ x: getRandom(-30, 20), y: horizon }, 40, 50, "brown", "white", { x: 20, y: 20 });
    let bird: Bird = new Bird({ x: 60, y: 100 }, 2);
    let jellyfish: Jellyfish = new Jellyfish({ x: getRandom(180, 280), y: getRandom(horizon + 30, horizon + 50) }, "red", 2);
    let palme: Palme = new Palme({ x: 100, y: 100 });
    let person: Person = new Person({ x: 100, y: 200 }, "brown", "green", "white");
    let surferi: Surferi = new Surferi({ x: 100, y: 200 }, "brown", "red", "yellow");

    //START//
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        height = canvas.height;
        width = canvas.width;
        horizon = height * golden;
        drawBackground();
        newSun.draw();
        drawSea();
        drawBeach({ x: width / 2 - 50, y: horizon }, 100);
        volcano.draw({ x: getRandom(-30, 20), y: horizon }, 40, 50, "brown", "white", { x: 20, y: 20 });
        drawMountains({ x: 0, y: horizon }, 15, 30, "darkgrey", "white", width / 2 - 20);
        drawMountains({ x: 0, y: horizon }, 10, 20, "darkgrey", "green", width / 2);
        drawTrees({ x: 40, y: 100 }, { x: 90, y: 10 });
        boat.draw();

        cloud1.draw();
        cloud2.draw();
        bird.draw();
        jellyfish.draw();
        palme.draw();
        person.draw();
        person.draw();
        surferi.draw();
        surferi.draw();

        //Speichern des Canvas-Bildes//
        imgData = crc2.getImageData(0, 0, width, height);


        canvas.addEventListener("click", handleClick);
    }//Close Load-Funktion//

    //ANIMATION START//
    function handleClick(_event: Event): void {
        console.log("Click");
        requestAnimationFrame(frame);
    }

    function frame(): void {
        crc2.putImageData(imgData, 0, 0);
        newSun.sink();
        bird.fly();
        jellyfish.swim();
        cloud1.fly();
        cloud2.fly();
        requestAnimationFrame(frame);
    }


    //Funktionen f??r den unbewegten Teil des Bildes: Background, Sea, Beach, Mountains, Trees)
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
    function drawBeach(_position: Vector, _widthfront: number): void {
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
    //Funktion f??r die Zufallszahl//
    export function getRandom(_min: number, _max: number): number {
        let random: number = Math.floor(Math.random() * (_max - _min + 1)) + _min;
        return random;
    }
}
