var StrandClasses;
(function (StrandClasses) {
    class Jellyfish {
        position;
        color;
        constructor(_position, _color) {
            this.position = _position;
            this.color = _color;
        }
        draw() {
            console.log("Jellyfish");
            let horizon = StrandClasses.height * StrandClasses.golden;
            let x;
            let y;
            StrandClasses.crc2.save();
            StrandClasses.crc2.translate(0, 0);
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.arc(x = StrandClasses.getRandom(180, 280), y = StrandClasses.getRandom(horizon + 30, horizon + 50), StrandClasses.getRandom(4, 7), 3, 6);
            StrandClasses.crc2.closePath();
            StrandClasses.crc2.stroke();
            StrandClasses.crc2.fillStyle = this.color;
            StrandClasses.crc2.fill();
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.moveTo(x - 3, y);
            StrandClasses.crc2.lineTo(x + 6, y + 10);
            StrandClasses.crc2.moveTo(x, y);
            StrandClasses.crc2.lineTo(x + 9, y + 10);
            StrandClasses.crc2.moveTo(x + 3, y - 1);
            StrandClasses.crc2.lineTo(x + 12, y + 10);
            StrandClasses.crc2.stroke();
        }
        swim() {
            console.log("Jellyfish swim!");
        }
    }
    StrandClasses.Jellyfish = Jellyfish;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=Jellyfish.js.map