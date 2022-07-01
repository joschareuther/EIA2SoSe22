var L11_2StrandInteraktion;
(function (L11_2StrandInteraktion) {
    class Boat {
        position;
        dx;
        constructor(_position, _dx) {
            this.position = _position;
            this.dx = _dx;
        }
        draw() {
            console.log("Boat", this.position.x, this.position.y);
            L11_2StrandInteraktion.crc2.beginPath();
            L11_2StrandInteraktion.crc2.moveTo(this.position.x - 10, this.position.y);
            L11_2StrandInteraktion.crc2.lineTo(this.position.x - 10, this.position.y - 40);
            L11_2StrandInteraktion.crc2.stroke();
            L11_2StrandInteraktion.crc2.beginPath();
            L11_2StrandInteraktion.crc2.moveTo(this.position.x + 0, this.position.y + 0);
            L11_2StrandInteraktion.crc2.lineTo(this.position.x + 10, this.position.y - 20);
            L11_2StrandInteraktion.crc2.lineTo(this.position.x - 40, this.position.y - 20);
            L11_2StrandInteraktion.crc2.lineTo(this.position.x - 30, this.position.y);
            L11_2StrandInteraktion.crc2.closePath();
            L11_2StrandInteraktion.crc2.stroke();
            L11_2StrandInteraktion.crc2.fillStyle = "#5c2a10";
            L11_2StrandInteraktion.crc2.fill();
            L11_2StrandInteraktion.crc2.fillStyle = "lightgrey";
            L11_2StrandInteraktion.crc2.fillRect(this.position.x - 30, this.position.y - 17, 3, 4);
            L11_2StrandInteraktion.crc2.fillRect(this.position.x, this.position.y - 17, 3, 4);
            L11_2StrandInteraktion.crc2.fillRect(this.position.x - 25, this.position.y - 17, 3, 4);
            L11_2StrandInteraktion.crc2.fillRect(this.position.x - 20, this.position.y - 17, 3, 4);
            L11_2StrandInteraktion.crc2.fillRect(this.position.x - 15, this.position.y - 17, 3, 4);
            L11_2StrandInteraktion.crc2.fillRect(this.position.x - 10, this.position.y - 17, 3, 4);
            L11_2StrandInteraktion.crc2.beginPath();
            L11_2StrandInteraktion.crc2.moveTo(this.position.x - 10, this.position.y - 20);
            L11_2StrandInteraktion.crc2.lineTo(this.position.x, this.position.y - 25);
            L11_2StrandInteraktion.crc2.lineTo(this.position.x - 10, this.position.y - 40);
            L11_2StrandInteraktion.crc2.closePath();
            L11_2StrandInteraktion.crc2.stroke();
            L11_2StrandInteraktion.crc2.fillStyle = "#ebe4c7";
            L11_2StrandInteraktion.crc2.fill();
        }
        swimm() {
            console.log("Boat swimm!");
            this.position.x += this.dx;
            if (this.position.x > L11_2StrandInteraktion.width || this.position.x < 0) {
                this.dx = -this.dx;
            }
        }
    }
    L11_2StrandInteraktion.Boat = Boat;
})(L11_2StrandInteraktion || (L11_2StrandInteraktion = {}));
//# sourceMappingURL=Boat.js.map