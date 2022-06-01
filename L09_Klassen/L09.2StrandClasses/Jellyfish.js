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
            console.log("Jellyfish", this.position.y, this.position.x);
            let x = this.position.x;
            let y = this.position.y;
            StrandClasses.crc2.save();
            StrandClasses.crc2.translate(0, 0);
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.arc(x, y, 6, 3, 6);
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