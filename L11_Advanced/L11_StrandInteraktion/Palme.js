var L11_2StrandInteraktion;
(function (L11_2StrandInteraktion) {
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
                L11_2StrandInteraktion.crc2.fillStyle = "brown";
                L11_2StrandInteraktion.crc2.fillRect(x = L11_2StrandInteraktion.getRandom(5, 70), y = L11_2StrandInteraktion.getRandom(90, 110), 5, 15);
                L11_2StrandInteraktion.crc2.beginPath();
                L11_2StrandInteraktion.crc2.arc(x, y + 30, 30, 180, 30);
                L11_2StrandInteraktion.crc2.fillStyle = "green";
                L11_2StrandInteraktion.crc2.fill();
                L11_2StrandInteraktion.crc2.beginPath();
                L11_2StrandInteraktion.crc2.arc(x + 20, y + 25, 30, 180, 30);
                L11_2StrandInteraktion.crc2.fillStyle = "green";
                L11_2StrandInteraktion.crc2.fill();
                L11_2StrandInteraktion.crc2.beginPath();
                L11_2StrandInteraktion.crc2.arc(x + 18, y + 1, 15, Math.PI, Math.PI * 1.5);
                L11_2StrandInteraktion.crc2.fillStyle = "green";
                L11_2StrandInteraktion.crc2.fill();
                L11_2StrandInteraktion.crc2.beginPath();
                L11_2StrandInteraktion.crc2.arc(x - 12, y, 15, Math.PI * 2, Math.PI * 1.6, true);
                L11_2StrandInteraktion.crc2.fillStyle = "green";
                L11_2StrandInteraktion.crc2.fill();
                L11_2StrandInteraktion.crc2.beginPath();
                L11_2StrandInteraktion.crc2.arc(x - 6, y + 9, 14, Math.PI * 1.8, Math.PI * 1.3, true);
                L11_2StrandInteraktion.crc2.fillStyle = "green";
                L11_2StrandInteraktion.crc2.fill();
            }
        }
    }
    L11_2StrandInteraktion.Palme = Palme;
})(L11_2StrandInteraktion || (L11_2StrandInteraktion = {}));
//# sourceMappingURL=Palme.js.map