var L09_OldMacDonaldsFarm;
(function (L09_OldMacDonaldsFarm) {
    class Animal {
        species;
        food;
        sound;
        constructor(_species, _food, _sound) {
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
        }
        eat() {
            switch (this.food) {
                case "gras":
                    L09_OldMacDonaldsFarm.gras -= 1;
                    if (L09_OldMacDonaldsFarm.gras < 0) {
                        L09_OldMacDonaldsFarm.gras = 0;
                        alert("gras is empty\n McDonald muss neues Gras für die Kuh kaufen!");
                    }
                    break;
                case "corn":
                    L09_OldMacDonaldsFarm.corn -= 1;
                    if (L09_OldMacDonaldsFarm.corn < 0) {
                        L09_OldMacDonaldsFarm.corn = 0;
                        alert("corn is empty\n McDonald muss neues Korn für die Hühner kaufen!");
                    }
                    break;
                case "meat":
                    L09_OldMacDonaldsFarm.meat -= 1;
                    if (L09_OldMacDonaldsFarm.meat < 0) {
                        L09_OldMacDonaldsFarm.meat = 0;
                        alert("meat is empty\n McDonald muss neues Fleisch für den Hund kaufen!");
                    }
                    break;
                case "apple":
                    L09_OldMacDonaldsFarm.apple -= 1;
                    if (L09_OldMacDonaldsFarm.apple < 0) {
                        L09_OldMacDonaldsFarm.apple = 0;
                        alert("apple is empty\n McDonald muss neue Äpfel für die Schweine kaufen!");
                    }
                    break;
            }
        }
        sing() {
            let songText = document.getElementById("songText");
            let text = "Old McDonald had a farm\n EIA EIA Oh!\n And on that farm he had a " + this.species + " \n EIA EIA Oh!\n With a " + this.sound + " " + this.sound + " here! \n And a " + this.sound + " " + this.sound + " there!\n Here a " + this.sound + "! There a " + this.sound + " !\n  Everywhere " + this.sound + " " + this.sound + " !\n Old McDonald had a farm\n EIA EIA Oh!";
            songText.innerHTML = String(text);
        }
    }
    L09_OldMacDonaldsFarm.Animal = Animal;
})(L09_OldMacDonaldsFarm || (L09_OldMacDonaldsFarm = {}));
//# sourceMappingURL=L09_OldMacDonaldsFarm.js.map