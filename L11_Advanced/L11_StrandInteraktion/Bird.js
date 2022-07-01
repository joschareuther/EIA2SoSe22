var L11_2StrandInteraktion;
(function (L11_2StrandInteraktion) {
    class Bird extends L11_2StrandInteraktion.Moveable {
        constructor(_position, _dx) {
            super();
            this.position = _position;
            this.dx = _dx;
        }
        draw() {
            console.log("Bird");
            let horizon = L11_2StrandInteraktion.height * L11_2StrandInteraktion.golden;
            L11_2StrandInteraktion.crc2.save();
            L11_2StrandInteraktion.crc2.translate(L11_2StrandInteraktion.getRandom(0, 60), L11_2StrandInteraktion.getRandom(60, 100) - horizon);
            L11_2StrandInteraktion.crc2.beginPath();
            L11_2StrandInteraktion.crc2.arc(100, 70, 4, 3.3, 0);
            L11_2StrandInteraktion.crc2.arc(100 + 7, 70, 4, 3.4, 0);
            L11_2StrandInteraktion.crc2.fillStyle = "HSLA(0, 0%, 100%, 1";
            L11_2StrandInteraktion.crc2.fill();
            L11_2StrandInteraktion.crc2.stroke();
            L11_2StrandInteraktion.crc2.restore();
        }
        fly() {
            console.log("Möwe flieg!");
            this.position.x += this.dx;
            this.draw();
            if (this.position.x > L11_2StrandInteraktion.height + 300 || this.position.x < 0) {
                this.dx = -this.dx;
            }
        }
    }
    L11_2StrandInteraktion.Bird = Bird;
})(L11_2StrandInteraktion || (L11_2StrandInteraktion = {}));
//# sourceMappingURL=Bird.js.map