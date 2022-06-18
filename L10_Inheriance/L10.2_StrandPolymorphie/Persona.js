var L10_2StrandPolymorphie;
(function (L10_2StrandPolymorphie) {
    class Person {
        position;
        color;
        clothingcolor;
        feathercolor;
        constructor(_position, _color, _clothingcolor, _feathercolor) {
            this.position = _position;
            this.color = _color;
            this.clothingcolor = _clothingcolor;
            this.feathercolor = _feathercolor;
        }
        draw() {
            console.log("Person");
            let x;
            let y;
            L10_2StrandPolymorphie.crc2.fillStyle = this.clothingcolor;
            L10_2StrandPolymorphie.crc2.fillRect(x = L10_2StrandPolymorphie.getRandom(5, 160), y = L10_2StrandPolymorphie.getRandom(120, 140), 8, 10);
            L10_2StrandPolymorphie.crc2.beginPath();
            L10_2StrandPolymorphie.crc2.arc(x - 12, y, 15, Math.PI * 2, Math.PI * 1.7, true);
            L10_2StrandPolymorphie.crc2.fillStyle = this.feathercolor;
            L10_2StrandPolymorphie.crc2.fill();
            L10_2StrandPolymorphie.crc2.beginPath();
            L10_2StrandPolymorphie.crc2.arc(x + 4, y - 2, 5, 0, Math.PI * 2, true);
            L10_2StrandPolymorphie.crc2.fillStyle = this.color;
            L10_2StrandPolymorphie.crc2.fill();
        }
        move() {
            console.log("Menschi läuft!");
        }
    }
    L10_2StrandPolymorphie.Person = Person;
})(L10_2StrandPolymorphie || (L10_2StrandPolymorphie = {}));
//# sourceMappingURL=Persona.js.map