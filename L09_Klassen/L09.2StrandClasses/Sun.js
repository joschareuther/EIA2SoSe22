var StrandClasses;
(function (StrandClasses) {
    class Sun {
        position;
        dy;
        constructor(_position, _dy) {
            this.position = _position;
            this.dy = _dy;
        }
        draw() {
            console.log("Sun");
            let gradient = StrandClasses.crc2.createRadialGradient(0, 0, 12, 0, 0, 50);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
            StrandClasses.crc2.save();
            StrandClasses.crc2.translate(this.position.x, this.position.y);
            StrandClasses.crc2.fillStyle = gradient;
            StrandClasses.crc2.arc(0, 0, 50, 0, 2 * Math.PI);
            StrandClasses.crc2.fill();
            StrandClasses.crc2.restore();
        }
        sink() {
            console.log("Sink!", this.position.y);
            this.position.y += this.dy;
            this.draw();
            if (this.position.y > StrandClasses.height || this.position.y < 0) {
                this.dy = -this.dy;
            }
        }
    }
    StrandClasses.Sun = Sun;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=Sun.js.map