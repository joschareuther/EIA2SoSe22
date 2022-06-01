var StrandClasses;
(function (StrandClasses) {
    class Bird {
        position;
        dx;
        constructor(_position, _dx) {
            this.position = _position;
            this.dx = _dx;
        }
        draw() {
            console.log("Bird");
            let horizon = StrandClasses.height * StrandClasses.golden;
            StrandClasses.crc2.save();
            StrandClasses.crc2.translate(StrandClasses.getRandom(0, 60), StrandClasses.getRandom(60, 100) - horizon);
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.arc(100, 70, 4, 3.3, 0);
            StrandClasses.crc2.arc(100 + 7, 70, 4, 3.4, 0);
            StrandClasses.crc2.fillStyle = "HSLA(0, 0%, 100%, 1";
            StrandClasses.crc2.fill();
            StrandClasses.crc2.stroke();
            StrandClasses.crc2.restore();
        }
        fly() {
            console.log("Möwe flieg!");
            this.position.x += this.dx;
            this.draw();
            if (this.position.x > StrandClasses.height + 300 || this.position.x < 0) {
                this.dx = -this.dx;
            }
        }
    }
    StrandClasses.Bird = Bird;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=Bird.js.map