namespace StrandClasses {

    export class Person {
        position: Vector;
        color: string;
        clothingcolor: string;
        feathercolor: string;

        constructor(_position: Vector, _color: string, _clothingcolor: string, _feathercolor: string) {
            this.position = _position;
            this.color = _color;
            this.clothingcolor = _clothingcolor;
            this.feathercolor = _feathercolor;
        }

        draw(): void {
            console.log("Person");
            let x: number;
            let y: number;

            crc2.fillStyle = this.clothingcolor;
            crc2.fillRect(x = getRandom(5, 160), y = getRandom(120, 140), 8, 10);

            crc2.beginPath();
            crc2.arc(x - 12, y, 15, Math.PI * 2, Math.PI * 1.7, true);
            crc2.fillStyle = this.feathercolor;
            crc2.fill();

            crc2.beginPath();
            crc2.arc(x + 4, y - 2, 5, 0, Math.PI * 2, true);
            crc2.fillStyle = this.color;
            crc2.fill();
        }

        move(): void {
            console.log("Menschi läuft!");
        }
    }
}