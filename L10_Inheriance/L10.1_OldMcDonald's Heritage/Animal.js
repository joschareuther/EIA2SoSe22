var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    class Animal {
        species;
        food;
        amount;
        sound;
        constructor(_species, _food, _amount, _sound) {
            this.species = _species;
            this.food = _food;
            this.amount = _amount;
            this.sound = _sound;
        }
        eat() {
            switch (this.food) {
                case "gras":
                    OldMacDonaldsFarm.gras -= this.amount;
                    if (OldMacDonaldsFarm.gras < 0) {
                        OldMacDonaldsFarm.gras = 0;
                        alert("gras is empty\n McDonald muss neues Gras für die Kuh kaufen!");
                    }
                    break;
                case "corn":
                    OldMacDonaldsFarm.corn -= this.amount;
                    if (OldMacDonaldsFarm.corn < 0) {
                        OldMacDonaldsFarm.corn = 0;
                        alert("corn is empty\n McDonald muss neues Korn für die Hühner kaufen!");
                    }
                    break;
                case "meat":
                    OldMacDonaldsFarm.meat -= this.amount;
                    if (OldMacDonaldsFarm.meat < 0) {
                        OldMacDonaldsFarm.meat = 0;
                        alert("meat is empty\n McDonald muss neues Fleisch für den Hund kaufen!");
                    }
                    break;
                case "apple":
                    OldMacDonaldsFarm.apple -= this.amount;
                    if (OldMacDonaldsFarm.apple < 0) {
                        OldMacDonaldsFarm.apple = 0;
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
    OldMacDonaldsFarm.Animal = Animal;
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=Animal.js.map