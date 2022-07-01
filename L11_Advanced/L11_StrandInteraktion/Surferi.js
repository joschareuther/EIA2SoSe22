var L11_2StrandInteraktion;
(function (L11_2StrandInteraktion) {
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
            L11_2StrandInteraktion.crc2.beginPath();
            L11_2StrandInteraktion.crc2.ellipse(x = L11_2StrandInteraktion.getRandom(100, 160), y = L11_2StrandInteraktion.getRandom(100, 120), 3, 10, 20, 0, 2 * Math.PI);
            L11_2StrandInteraktion.crc2.stroke();
            L11_2StrandInteraktion.crc2.fillStyle = this.surfboardcolor;
            L11_2StrandInteraktion.crc2.fill();
            L11_2StrandInteraktion.crc2.save();
            L11_2StrandInteraktion.crc2.translate(x, y);
            L11_2StrandInteraktion.crc2.restore();
            L11_2StrandInteraktion.crc2.fillStyle = "rgb(" + L11_2StrandInteraktion.getRandom(10, 200) + ", " + L11_2StrandInteraktion.getRandom(50, 200) + ", " + L11_2StrandInteraktion.getRandom(50, 200) + ", " + 1 + ")";
            L11_2StrandInteraktion.crc2.fillRect(x - 4, y - 10, 8, 10);
            L11_2StrandInteraktion.crc2.beginPath();
            L11_2StrandInteraktion.crc2.arc(x - 16, y - 10, 15, Math.PI * 2, Math.PI * 1.7, true);
            L11_2StrandInteraktion.crc2.fillStyle = "white";
            L11_2StrandInteraktion.crc2.fill();
            L11_2StrandInteraktion.crc2.beginPath();
            L11_2StrandInteraktion.crc2.arc(x, y - 12, 5, 0, Math.PI * 2, true);
            L11_2StrandInteraktion.crc2.fillStyle = this.color;
            L11_2StrandInteraktion.crc2.fill();
        }
        swim() {
            console.log("Surferi surft");
        }
    }
    L11_2StrandInteraktion.Surferi = Surferi;
})(L11_2StrandInteraktion || (L11_2StrandInteraktion = {}));
//# sourceMappingURL=Surferi.js.map