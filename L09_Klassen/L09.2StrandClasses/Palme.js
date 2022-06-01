var StrandClasses;
(function (StrandClasses) {
    class Palme {
        position;
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            console.log("Palme");
            let x;
            let y;
            for (let nPalmos = 0; nPalmos < 4; nPalmos++) {
                StrandClasses.crc2.fillStyle = "brown";
                StrandClasses.crc2.fillRect(x = StrandClasses.getRandom(5, 70), y = StrandClasses.getRandom(90, 110), 5, 15);
                StrandClasses.crc2.beginPath();
                StrandClasses.crc2.arc(x, y + 30, 30, 180, 30);
                StrandClasses.crc2.fillStyle = "green";
                StrandClasses.crc2.fill();
                StrandClasses.crc2.beginPath();
                StrandClasses.crc2.arc(x + 20, y + 25, 30, 180, 30);
                StrandClasses.crc2.fillStyle = "green";
                StrandClasses.crc2.fill();
                StrandClasses.crc2.beginPath();
                StrandClasses.crc2.arc(x + 18, y + 1, 15, Math.PI, Math.PI * 1.5);
                StrandClasses.crc2.fillStyle = "green";
                StrandClasses.crc2.fill();
                StrandClasses.crc2.beginPath();
                StrandClasses.crc2.arc(x - 12, y, 15, Math.PI * 2, Math.PI * 1.6, true);
                StrandClasses.crc2.fillStyle = "green";
                StrandClasses.crc2.fill();
                StrandClasses.crc2.beginPath();
                StrandClasses.crc2.arc(x - 6, y + 9, 14, Math.PI * 1.8, Math.PI * 1.3, true);
                StrandClasses.crc2.fillStyle = "green";
                StrandClasses.crc2.fill();
            }
        }
        walk() {
            console.log("Palme läuft!");
        }
    }
    StrandClasses.Palme = Palme;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=Palme.js.map