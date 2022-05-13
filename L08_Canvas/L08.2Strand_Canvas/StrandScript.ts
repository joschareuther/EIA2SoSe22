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
        drawSun({ x: 250, y: 30 });
        drawCloud({ x: 100, y: 50 }, { x: 70, y: 60 });
        drawCloud({ x: 200, y: 70 }, { x: 100, y: 150 });
        drawSea();
        drawBeach({ x: width / 2 - 200, y: horizon }, 600, 100);
        //drawMountains({ x: 0, y: horizon }, 100, 200, "darkgrey", "white");
        //drawVolcano();
        //drawSmoke();
        //adrawSchwimmeri();
        //drawSurferi();
        //drawFishes();
        //drawPeople();
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
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.9)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

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


    function drawBeach(_position: Vector, _widthBack: number, _widthFront: number): void {
        console.log("Beach");
        crc2.moveTo(_position.x + _widthBack / 2, _position.y);
        crc2.lineTo(crc2.canvas.width / 2 + _widthFront / 2, crc2.canvas.height);
        crc2.lineTo(crc2.canvas.width / 2 - _widthFront / 2, crc2.canvas.height);
        crc2.lineTo(_position.x - _widthBack / 2, _position.y);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, _position.y, 0, crc2.canvas.height);
        gradient.addColorStop(0, "beige");
        gradient.addColorStop(0.6, "lightyellow");

        crc2.fillStyle = gradient;
        crc2.fill();
    }
}
