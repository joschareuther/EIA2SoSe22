var L10_2StrandPolymorphie;
(function (L10_2StrandPolymorphie) {
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
                L10_2StrandPolymorphie.crc2.fillStyle = "brown";
                L10_2StrandPolymorphie.crc2.fillRect(x = L10_2StrandPolymorphie.getRandom(5, 70), y = L10_2StrandPolymorphie.getRandom(90, 110), 5, 15);
                L10_2StrandPolymorphie.crc2.beginPath();
                L10_2StrandPolymorphie.crc2.arc(x, y + 30, 30, 180, 30);
                L10_2StrandPolymorphie.crc2.fillStyle = "green";
                L10_2StrandPolymorphie.crc2.fill();
                L10_2StrandPolymorphie.crc2.beginPath();
                L10_2StrandPolymorphie.crc2.arc(x + 20, y + 25, 30, 180, 30);
                L10_2StrandPolymorphie.crc2.fillStyle = "green";
                L10_2StrandPolymorphie.crc2.fill();
                L10_2StrandPolymorphie.crc2.beginPath();
                L10_2StrandPolymorphie.crc2.arc(x + 18, y + 1, 15, Math.PI, Math.PI * 1.5);
                L10_2StrandPolymorphie.crc2.fillStyle = "green";
                L10_2StrandPolymorphie.crc2.fill();
                L10_2StrandPolymorphie.crc2.beginPath();
                L10_2StrandPolymorphie.crc2.arc(x - 12, y, 15, Math.PI * 2, Math.PI * 1.6, true);
                L10_2StrandPolymorphie.crc2.fillStyle = "green";
                L10_2StrandPolymorphie.crc2.fill();
                L10_2StrandPolymorphie.crc2.beginPath();
                L10_2StrandPolymorphie.crc2.arc(x - 6, y + 9, 14, Math.PI * 1.8, Math.PI * 1.3, true);
                L10_2StrandPolymorphie.crc2.fillStyle = "green";
                L10_2StrandPolymorphie.crc2.fill();
            }
        }
    }
    L10_2StrandPolymorphie.Palme = Palme;
})(L10_2StrandPolymorphie || (L10_2StrandPolymorphie = {}));
//# sourceMappingURL=Palme.js.map