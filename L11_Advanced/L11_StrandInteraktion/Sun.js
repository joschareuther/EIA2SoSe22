var L11_2StrandInteraktion;
(function (L11_2StrandInteraktion) {
    class Sun extends L11_2StrandInteraktion.Moveable {
        constructor(_position, _dy) {
            super();
            this.position = _position;
            this.dy = _dy;
        }
        draw() {
            console.log("Sun");
            let gradient = L11_2StrandInteraktion.crc2.createRadialGradient(0, 0, 12, 0, 0, 50);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
            L11_2StrandInteraktion.crc2.save();
            L11_2StrandInteraktion.crc2.translate(this.position.x, this.position.y);
            L11_2StrandInteraktion.crc2.fillStyle = gradient;
            L11_2StrandInteraktion.crc2.arc(0, 0, 50, 0, 2 * Math.PI);
            L11_2StrandInteraktion.crc2.fill();
            L11_2StrandInteraktion.crc2.restore();
        }
        sink() {
            console.log("Sink!", this.position.y);
            this.position.y += this.dy;
            this.draw();
            if (this.position.y > L11_2StrandInteraktion.height || this.position.y < 0) {
                this.dy = -this.dy;
            }
        }
    }
    L11_2StrandInteraktion.Sun = Sun;
})(L11_2StrandInteraktion || (L11_2StrandInteraktion = {}));
//# sourceMappingURL=Sun.js.map