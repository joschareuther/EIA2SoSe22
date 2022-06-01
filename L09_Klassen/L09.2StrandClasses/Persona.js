var StrandClasses;
(function (StrandClasses) {
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
            StrandClasses.crc2.fillStyle = this.clothingcolor;
            StrandClasses.crc2.fillRect(x = StrandClasses.getRandom(5, 160), y = StrandClasses.getRandom(120, 140), 8, 10);
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.arc(x - 12, y, 15, Math.PI * 2, Math.PI * 1.7, true);
            StrandClasses.crc2.fillStyle = this.feathercolor;
            StrandClasses.crc2.fill();
            StrandClasses.crc2.beginPath();
            StrandClasses.crc2.arc(x + 4, y - 2, 5, 0, Math.PI * 2, true);
            StrandClasses.crc2.fillStyle = this.color;
            StrandClasses.crc2.fill();
        }
        move() {
            console.log("Menschi läuft!");
        }
    }
    StrandClasses.Person = Person;
})(StrandClasses || (StrandClasses = {}));
//# sourceMappingURL=Persona.js.map