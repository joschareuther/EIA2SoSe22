var L10_2StrandPolymorphie;
(function (L10_2StrandPolymorphie) {
    class Boat {
        position;
        dx;
        constructor(_position, _dx) {
            this.position = _position;
            this.dx = _dx;
        }
        draw() {
            console.log("Boat", this.position.x, this.position.y);
            L10_2StrandPolymorphie.crc2.beginPath();
            L10_2StrandPolymorphie.crc2.moveTo(this.position.x - 10, this.position.y);
            L10_2StrandPolymorphie.crc2.lineTo(this.position.x - 10, this.position.y - 40);
            L10_2StrandPolymorphie.crc2.stroke();
            L10_2StrandPolymorphie.crc2.beginPath();
            L10_2StrandPolymorphie.crc2.moveTo(this.position.x + 0, this.position.y + 0);
            L10_2StrandPolymorphie.crc2.lineTo(this.position.x + 10, this.position.y - 20);
            L10_2StrandPolymorphie.crc2.lineTo(this.position.x - 40, this.position.y - 20);
            L10_2StrandPolymorphie.crc2.lineTo(this.position.x - 30, this.position.y);
            L10_2StrandPolymorphie.crc2.closePath();
            L10_2StrandPolymorphie.crc2.stroke();
            L10_2StrandPolymorphie.crc2.fillStyle = "#5c2a10";
            L10_2StrandPolymorphie.crc2.fill();
            L10_2StrandPolymorphie.crc2.fillStyle = "lightgrey";
            L10_2StrandPolymorphie.crc2.fillRect(this.position.x - 30, this.position.y - 17, 3, 4);
            L10_2StrandPolymorphie.crc2.fillRect(this.position.x, this.position.y - 17, 3, 4);
            L10_2StrandPolymorphie.crc2.fillRect(this.position.x - 25, this.position.y - 17, 3, 4);
            L10_2StrandPolymorphie.crc2.fillRect(this.position.x - 20, this.position.y - 17, 3, 4);
            L10_2StrandPolymorphie.crc2.fillRect(this.position.x - 15, this.position.y - 17, 3, 4);
            L10_2StrandPolymorphie.crc2.fillRect(this.position.x - 10, this.position.y - 17, 3, 4);
            L10_2StrandPolymorphie.crc2.beginPath();
            L10_2StrandPolymorphie.crc2.moveTo(this.position.x - 10, this.position.y - 20);
            L10_2StrandPolymorphie.crc2.lineTo(this.position.x, this.position.y - 25);
            L10_2StrandPolymorphie.crc2.lineTo(this.position.x - 10, this.position.y - 40);
            L10_2StrandPolymorphie.crc2.closePath();
            L10_2StrandPolymorphie.crc2.stroke();
            L10_2StrandPolymorphie.crc2.fillStyle = "#ebe4c7";
            L10_2StrandPolymorphie.crc2.fill();
        }
        swimm() {
            console.log("Boat swimm!");
            this.position.x += this.dx;
            if (this.position.x > L10_2StrandPolymorphie.width || this.position.x < 0) {
                this.dx = -this.dx;
            }
        }
    }
    L10_2StrandPolymorphie.Boat = Boat;
})(L10_2StrandPolymorphie || (L10_2StrandPolymorphie = {}));
//# sourceMappingURL=Boat.js.map