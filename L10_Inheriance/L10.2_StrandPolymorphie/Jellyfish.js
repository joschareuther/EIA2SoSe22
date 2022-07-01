var L10_2StrandPolymorphie;
(function (L10_2StrandPolymorphie) {
    class Jellyfish extends L10_2StrandPolymorphie.Moveable {
        color;
        constructor(_position, _color, _dx) {
            super();
            this.position = _position;
            this.color = _color;
            this.dx = _dx;
        }
        draw() {
            let horizon = L10_2StrandPolymorphie.height * L10_2StrandPolymorphie.golden;
            let x;
            let y;
            for (let nJellyfish = 0; nJellyfish < 5; nJellyfish++) {
                L10_2StrandPolymorphie.crc2.save();
                L10_2StrandPolymorphie.crc2.translate(0, 0);
                L10_2StrandPolymorphie.crc2.beginPath();
                L10_2StrandPolymorphie.crc2.arc(x = L10_2StrandPolymorphie.getRandom(180, 280), y = L10_2StrandPolymorphie.getRandom(horizon + 30, horizon + 50), L10_2StrandPolymorphie.getRandom(4, 7), 3, 6);
                L10_2StrandPolymorphie.crc2.closePath();
                L10_2StrandPolymorphie.crc2.stroke();
                L10_2StrandPolymorphie.crc2.fillStyle = "HSLA(0, 100%, 50%, 0.65";
                L10_2StrandPolymorphie.crc2.fill();
                L10_2StrandPolymorphie.crc2.beginPath();
                L10_2StrandPolymorphie.crc2.moveTo(x - 3, y);
                L10_2StrandPolymorphie.crc2.lineTo(x + 6, y + 10);
                L10_2StrandPolymorphie.crc2.moveTo(x, y);
                L10_2StrandPolymorphie.crc2.lineTo(x + 9, y + 10);
                L10_2StrandPolymorphie.crc2.moveTo(x + 3, y - 1);
                L10_2StrandPolymorphie.crc2.lineTo(x + 12, y + 10);
                L10_2StrandPolymorphie.crc2.stroke();
            }
        }
        swim() {
            console.log("Jellyfish swim!", this.position.x);
            this.position.x += 5;
            this.draw();
            if (this.position.x > L10_2StrandPolymorphie.width || this.position.x < 0) {
                this.dx = -this.dx;
            }
        }
    }
    L10_2StrandPolymorphie.Jellyfish = Jellyfish;
})(L10_2StrandPolymorphie || (L10_2StrandPolymorphie = {}));
//# sourceMappingURL=Jellyfish.js.map