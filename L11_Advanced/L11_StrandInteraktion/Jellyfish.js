var L11_2StrandInteraktion;
(function (L11_2StrandInteraktion) {
    class Jellyfish extends L11_2StrandInteraktion.Moveable {
        color;
        constructor(_position, _color, _dx) {
            super();
            this.position = _position;
            this.color = _color;
            this.dx = _dx;
        }
        draw() {
            let horizon = L11_2StrandInteraktion.height * L11_2StrandInteraktion.golden;
            let x;
            let y;
            for (let nJellyfish = 0; nJellyfish < 5; nJellyfish++) {
                L11_2StrandInteraktion.crc2.save();
                L11_2StrandInteraktion.crc2.translate(0, 0);
                L11_2StrandInteraktion.crc2.beginPath();
                L11_2StrandInteraktion.crc2.arc(x = L11_2StrandInteraktion.getRandom(180, 280), y = L11_2StrandInteraktion.getRandom(horizon + 30, horizon + 50), L11_2StrandInteraktion.getRandom(4, 7), 3, 6);
                L11_2StrandInteraktion.crc2.closePath();
                L11_2StrandInteraktion.crc2.stroke();
                L11_2StrandInteraktion.crc2.fillStyle = "HSLA(0, 100%, 50%, 0.65";
                L11_2StrandInteraktion.crc2.fill();
                L11_2StrandInteraktion.crc2.beginPath();
                L11_2StrandInteraktion.crc2.moveTo(x - 3, y);
                L11_2StrandInteraktion.crc2.lineTo(x + 6, y + 10);
                L11_2StrandInteraktion.crc2.moveTo(x, y);
                L11_2StrandInteraktion.crc2.lineTo(x + 9, y + 10);
                L11_2StrandInteraktion.crc2.moveTo(x + 3, y - 1);
                L11_2StrandInteraktion.crc2.lineTo(x + 12, y + 10);
                L11_2StrandInteraktion.crc2.stroke();
            }
        }
        swim() {
            console.log("Jellyfish swim!", this.position.x);
            this.position.x += 5;
            this.draw();
            if (this.position.x > L11_2StrandInteraktion.width || this.position.x < 0) {
                this.dx = -this.dx;
            }
        }
    }
    L11_2StrandInteraktion.Jellyfish = Jellyfish;
})(L11_2StrandInteraktion || (L11_2StrandInteraktion = {}));
//# sourceMappingURL=Jellyfish.js.map