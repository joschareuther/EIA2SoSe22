var StrandClasses;
(function (StrandClasses) {
    class Surferi {
        position;
        color;
        clothingcolor;
        surfboardcolor;
        constructor(_position, _color, _clothingcolor, _surfboardcolor) {
            this.position = _position;
            this.color = _color;
            this.clothingcolor = _clothingcolor;
            this.surfboardcolor = _surfboardcolor;
        }
        draw() {
            console.log("Surferi");
            let x;
            let y;
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.ellipse(x = StrandClasses.getRandom(100, 160), y = StrandClasses.getRandom(100, 120), 3, 10, 20, 0, 2 * Math.PI);
            StrandClasses.crc2.stroke();
            StrandClasses.crc2.fillStyle = this.surfboardcolor;
            StrandClasses.crc2.fill();
            StrandClasses.crc2.save();
            StrandClasses.crc2.translate(x, y);
            StrandClasses.crc2.restore();
            StrandClasses.crc2.fillStyle = "rgb(" + StrandClasses.getRandom(10, 200) + ", " + StrandClasses.getRandom(50, 200) + ", " + StrandClasses.getRandom(50, 200) + ", " + 1 + ")";
            StrandClasses.crc2.fillRect(x - 4, y - 10, 8, 10);
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.arc(x - 16, y - 10, 15, Math.PI * 2, Math.PI * 1.7, true);
            StrandClasses.crc2.fillStyle = "white";
            StrandClasses.crc2.fill();
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.arc(x, y - 12, 5, 0, Math.PI * 2, true);
            StrandClasses.crc2.fillStyle = this.color;
            StrandClasses.crc2.fill();
        }
        swim() {
            console.log("Surferi surft");
        }
    }
    StrandClasses.Surferi = Surferi;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=Surferi.js.map