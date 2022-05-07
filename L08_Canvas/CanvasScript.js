window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    crc2.fillStyle = "#FF2005";
    let horizon = 300;
    drawMountains({ x: 0, y: horizon }, 100, 200, "darkgrey", "white");
    drawMountains({ x: 0, y: horizon }, 70, 150, "grey", "darkgrey");
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 100;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
}
//# sourceMappingURL=CanvasScript.js.map