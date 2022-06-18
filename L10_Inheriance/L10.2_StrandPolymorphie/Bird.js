var L10_2StrandPolymorphie;
(function (L10_2StrandPolymorphie) {
    class Bird {
        position;
        dx;
        constructor(_position, _dx) {
            this.position = _position;
            this.dx = _dx;
        }
        draw() {
            console.log("Bird");
            let horizon = L10_2StrandPolymorphie.height * L10_2StrandPolymorphie.golden;
            L10_2StrandPolymorphie.crc2.save();
            L10_2StrandPolymorphie.crc2.translate(L10_2StrandPolymorphie.getRandom(0, 60), L10_2StrandPolymorphie.getRandom(60, 100) - horizon);
            L10_2StrandPolymorphie.crc2.beginPath();
            L10_2StrandPolymorphie.crc2.arc(100, 70, 4, 3.3, 0);
            L10_2StrandPolymorphie.crc2.arc(100 + 7, 70, 4, 3.4, 0);
            L10_2StrandPolymorphie.crc2.fillStyle = "HSLA(0, 0%, 100%, 1";
            L10_2StrandPolymorphie.crc2.fill();
            L10_2StrandPolymorphie.crc2.stroke();
            L10_2StrandPolymorphie.crc2.restore();
        }
        fly() {
            console.log("Möwe flieg!");
            this.position.x += this.dx;
            this.draw();
            if (this.position.x > L10_2StrandPolymorphie.height + 300 || this.position.x < 0) {
                this.dx = -this.dx;
            }
        }
    }
    L10_2StrandPolymorphie.Bird = Bird;
})(L10_2StrandPolymorphie || (L10_2StrandPolymorphie = {}));
//# sourceMappingURL=Bird.js.map