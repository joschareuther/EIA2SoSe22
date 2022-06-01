var StrandClasses;
(function (StrandClasses) {
    class Jellyfish {
        position;
        color;
        dx;
        constructor(_position, _color, _dx) {
            this.position = _position;
            this.color = _color;
            this.dx = _dx;
        }
        draw() {
            let horizon = StrandClasses.height * StrandClasses.golden;
            let x;
            let y;
            for (let nJellyfish = 0; nJellyfish < 5; nJellyfish++) {
                StrandClasses.crc2.save();
                StrandClasses.crc2.translate(0, 0);
                StrandClasses.crc2.beginPath();
                StrandClasses.crc2.arc(x = StrandClasses.getRandom(180, 280), y = StrandClasses.getRandom(horizon + 30, horizon + 50), StrandClasses.getRandom(4, 7), 3, 6);
                StrandClasses.crc2.closePath();
                StrandClasses.crc2.stroke();
                StrandClasses.crc2.fillStyle = "HSLA(0, 100%, 50%, 0.65";
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
        }
        swim() {
            console.log("Jellyfish swim!", this.position.x);
            this.position.x += 5;
            this.draw();
            if (this.position.x > StrandClasses.width || this.position.x < 0) {
                this.dx = -this.dx;
            }
        }
    }
    StrandClasses.Jellyfish = Jellyfish;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=Jellyfish.js.map