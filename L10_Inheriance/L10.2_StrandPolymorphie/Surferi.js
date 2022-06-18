var L10_2StrandPolymorphie;
(function (L10_2StrandPolymorphie) {
    class Surferi {
        position;
        color;
        clothingcolor;
        surfboardcolor;
        constructor(_position, _color, _clothingcolor, _surfboardcolor) {
            this.position = _position;
            this.color = _color;
            this.clothingcolor = _clothingcolor;
            this.surfboardcolor = _surfboardcolor;
        }
        draw() {
            console.log("Surferi");
            let x;
            let y;
            L10_2StrandPolymorphie.crc2.beginPath();
            L10_2StrandPolymorphie.crc2.ellipse(x = L10_2StrandPolymorphie.getRandom(100, 160), y = L10_2StrandPolymorphie.getRandom(100, 120), 3, 10, 20, 0, 2 * Math.PI);
            L10_2StrandPolymorphie.crc2.stroke();
            L10_2StrandPolymorphie.crc2.fillStyle = this.surfboardcolor;
            L10_2StrandPolymorphie.crc2.fill();
            L10_2StrandPolymorphie.crc2.save();
            L10_2StrandPolymorphie.crc2.translate(x, y);
            L10_2StrandPolymorphie.crc2.restore();
            L10_2StrandPolymorphie.crc2.fillStyle = "rgb(" + L10_2StrandPolymorphie.getRandom(10, 200) + ", " + L10_2StrandPolymorphie.getRandom(50, 200) + ", " + L10_2StrandPolymorphie.getRandom(50, 200) + ", " + 1 + ")";
            L10_2StrandPolymorphie.crc2.fillRect(x - 4, y - 10, 8, 10);
            L10_2StrandPolymorphie.crc2.beginPath();
            L10_2StrandPolymorphie.crc2.arc(x - 16, y - 10, 15, Math.PI * 2, Math.PI * 1.7, true);
            L10_2StrandPolymorphie.crc2.fillStyle = "white";
            L10_2StrandPolymorphie.crc2.fill();
            L10_2StrandPolymorphie.crc2.beginPath();
            L10_2StrandPolymorphie.crc2.arc(x, y - 12, 5, 0, Math.PI * 2, true);
            L10_2StrandPolymorphie.crc2.fillStyle = this.color;
            L10_2StrandPolymorphie.crc2.fill();
        }
        swim() {
            console.log("Surferi surft");
        }
    }
    L10_2StrandPolymorphie.Surferi = Surferi;
})(L10_2StrandPolymorphie || (L10_2StrandPolymorphie = {}));
//# sourceMappingURL=Surferi.js.map