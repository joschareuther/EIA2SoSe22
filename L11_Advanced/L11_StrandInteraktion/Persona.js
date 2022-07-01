var L11_2StrandInteraktion;
(function (L11_2StrandInteraktion) {
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
            L11_2StrandInteraktion.crc2.fillStyle = this.clothingcolor;
            L11_2StrandInteraktion.crc2.fillRect(x = L11_2StrandInteraktion.getRandom(5, 160), y = L11_2StrandInteraktion.getRandom(120, 140), 8, 10);
            L11_2StrandInteraktion.crc2.beginPath();
            L11_2StrandInteraktion.crc2.arc(x - 12, y, 15, Math.PI * 2, Math.PI * 1.7, true);
            L11_2StrandInteraktion.crc2.fillStyle = this.feathercolor;
            L11_2StrandInteraktion.crc2.fill();
            L11_2StrandInteraktion.crc2.beginPath();
            L11_2StrandInteraktion.crc2.arc(x + 4, y - 2, 5, 0, Math.PI * 2, true);
            L11_2StrandInteraktion.crc2.fillStyle = this.color;
            L11_2StrandInteraktion.crc2.fill();
        }
        move() {
            console.log("Menschi läuft!");
        }
    }
    L11_2StrandInteraktion.Person = Person;
})(L11_2StrandInteraktion || (L11_2StrandInteraktion = {}));
//# sourceMappingURL=Persona.js.map