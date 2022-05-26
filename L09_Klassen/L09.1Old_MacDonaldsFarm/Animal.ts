namespace OldMacDonaldsFarm {

    export class Animal {
        species: string = [];
        food: string = [];
        sound: string = [];

        constructor(_species: string, _food: string, _sound: string) {
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
        }

        eat(): void {
            switch (this.food) {
                case "gras":
                    gras -= 1;
                    if (gras < 0) {
                        gras = 0;
                        alert("gras is empty");
                    }
                    break;
                case "corn":
                    corn -= 1;
                    if (corn < 0) {
                        corn = 0;
                        alert("corn is empty");
                    }
                    break;
                case "meat":
                    meat -= 1;
                    if (meat < 0) {
                        meat = 0;
                        alert("meat is empty");
                    }
                    break;

                case "apple":
                    apple -= 1;
                    if (apple < 0) {
                        apple = 0;
                        alert("apple is empty");
                    }
                    break;
            }
        }
        sing(): void {
            let text: string = "Old McDonald had a farm\n EIA EIA Oh!\n And on that farm he had a " + this.species + " \n EIA EIA Oh!\n With a " + this.sound + " " + this.sound + " here \n And a " + this.sound + " " + this.sound + " there\n Here a " + this.sound + " there a " + this.sound + "\n Everywhere " + this.sound + " " + this.sound + " \n Old McDonald had a farm\n EIA EIA Oh!";
            alert(text);
        }
    }
}