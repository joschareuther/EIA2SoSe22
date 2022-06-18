var L10_2StrandPolymorphie;
(function (L10_2StrandPolymorphie) {
    class Sun {
        position;
        dy;
        constructor(_position, _dy) {
            this.position = _position;
            this.dy = _dy;
        }
        draw() {
            console.log("Sun");
            let gradient = L10_2StrandPolymorphie.crc2.createRadialGradient(0, 0, 12, 0, 0, 50);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
            L10_2StrandPolymorphie.crc2.save();
            L10_2StrandPolymorphie.crc2.translate(this.position.x, this.position.y);
            L10_2StrandPolymorphie.crc2.fillStyle = gradient;
            L10_2StrandPolymorphie.crc2.arc(0, 0, 50, 0, 2 * Math.PI);
            L10_2StrandPolymorphie.crc2.fill();
            L10_2StrandPolymorphie.crc2.restore();
        }
        sink() {
            console.log("Sink!", this.position.y);
            this.position.y += this.dy;
            this.draw();
            if (this.position.y > L10_2StrandPolymorphie.height || this.position.y < 0) {
                this.dy = -this.dy;
            }
        }
    }
    L10_2StrandPolymorphie.Sun = Sun;
})(L10_2StrandPolymorphie || (L10_2StrandPolymorphie = {}));
//# sourceMappingURL=Sun.js.map