function handleLoad(_event) {
    let canvas = document.getElementById("canvas");
    let crc2 = canvas.getContext("2d");
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    draw();
    let x = 200;
    function draw() {
        window.requestAnimationFrame(draw);
        crc2.beginPath();
        crc2.arc(x, 250, 30, 0, Math.PI * 2, false);
        crc2.strokeStyle = "red";
        crc2.stroke();
        x += 1;
    }
}
//# sourceMappingURL=handleLoad.js.map