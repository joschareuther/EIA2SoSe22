var StrandClasses;
(function (StrandClasses) {
    class Bird {
        position;
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            console.log("Birds");
            let horizon = StrandClasses.height * StrandClasses.golden;
            for (let nBirds = 0; nBirds < 8; nBirds++) {
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
        }
        fly() {
            console.log("Möwe flieg!");
        }
    }
    StrandClasses.Bird = Bird;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=Bird.js.map