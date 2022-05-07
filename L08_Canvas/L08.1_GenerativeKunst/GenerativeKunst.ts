window.addEventListener("load", handleLoad);
function handleLoad(_event: Event): void {
    interface Vector {
        x: number;
        y: number;
    }
    let canvas: HTMLCanvasElement = document.getElementById("canvas");
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    let horizon: number = 200;
    drawMountains({ x: 0, y: horizon }, random(), random2(), "rgb(" + random() + ", " + random2() + ", " + random2() + ", " + random4() + ")", "white");
    drawMountains({ x: 0, y: horizon }, random(), random3(), "rgb(" + random() + ", " + random2() + ", " + random2() + ", " + random4() + ")", "darkgrey");

    drawCloud({ x: random2(), y: random2() }, { x: random3(), y: random3() });
  
    

    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "rgb(" + random() + ", " + random2() + ", " + random2() + ", " + random4() + ")");
    gradient.addColorStop(0.7, "white");
    gradient.addColorStop(1, "rgb(" + random() + ", " + random2() + ", " + random2() + ", " + random4() + ")");

    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    crc2.fillStyle = "rgb(" + random() + ", " + random2() + ", " + random2() + ", " + random4() + ")";
    crc2.fillRect(random(), random(), random(), random2());

    crc2.font = "30 px serif";
    crc2.fillText("Hello world", random(), random());

    crc2.beginPath();
    crc2.arc(random2(), random2(), random(), random(), 1.5 * Math.PI);
    crc2.moveTo(random3() + 100, random2());
    crc2.stroke();
    crc2.fill();

    crc2.beginPath();
    crc2.moveTo(random2(), random2());
    crc2.lineTo(random2(), random2());
    crc2.lineTo(random(), random2());
    crc2.closePath();
    crc2.stroke();
    crc2.fill();

    crc2.beginPath();
    crc2.ellipse(random2(), random2(), random(), random(), random(), 0, 1.5 * Math.PI);
    crc2.closePath();
    crc2.stroke();

    

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");

        let stepMin: number = 50;
        let stepMax: number = 100;
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
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    

    function random(): number {
        let randomNum: number = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
        console.log(randomNum);
        return randomNum;
    }

    function random2(): number {
        let randomNum2: number = Math.floor(Math.random() * (201 - 50 + 1)) + 50;
        console.log(randomNum2);
        return randomNum2;
    }

    function random3(): number {
        let randomNum3: number = Math.floor(Math.random() * (401 - 100 + 1)) + 100;
        console.log(randomNum3);
        return randomNum3;
    }

    function random4(): number {
        let randomNum6: number = (Math.random() * (1 - 0.1)) + 0.1;
        console.log(randomNum6);
        return randomNum6;
    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = random();
        let radiusParticle: number = 10;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(random4(),  "rgb(" + random() + ", " + random4() + ", " + random4() + ", " + random4() + ")");
        gradient.addColorStop(1, "rgb(" + random() + ", " + random2() + ", " + random2() + ", " + random4() + ")");

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
}