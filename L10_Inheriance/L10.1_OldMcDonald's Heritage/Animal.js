var L10_OldMacDonaldsFarm;
(function (L10_OldMacDonaldsFarm) {
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
                    L10_OldMacDonaldsFarm.gras -= this.amount;
                    if (L10_OldMacDonaldsFarm.gras < 0) {
                        L10_OldMacDonaldsFarm.gras = 0;
                        alert("gras is empty\n McDonald muss neues Gras für die Kuh kaufen!");
                    }
                    break;
                case "corn":
                    L10_OldMacDonaldsFarm.corn -= this.amount;
                    if (L10_OldMacDonaldsFarm.corn < 0) {
                        L10_OldMacDonaldsFarm.corn = 0;
                        alert("corn is empty\n McDonald muss neues Korn für die Hühner kaufen!");
                    }
                    break;
                case "meat":
                    L10_OldMacDonaldsFarm.meat -= this.amount;
                    if (L10_OldMacDonaldsFarm.meat < 0) {
                        L10_OldMacDonaldsFarm.meat = 0;
                        alert("meat is empty\n McDonald muss neues Fleisch für den Hund kaufen!");
                    }
                    break;
                case "apple":
                    L10_OldMacDonaldsFarm.apple -= this.amount;
                    if (L10_OldMacDonaldsFarm.apple < 0) {
                        L10_OldMacDonaldsFarm.apple = 0;
                        alert("apple is empty\n McDonald muss neue Äpfel für die Schweine kaufen!");
                    }
                    break;
            }
        }
        sing() {
            let songText = document.getElementById("songText");
            let text1 = "Old McDonald had a farm\n EIA EIA Oh!\n And on that farm he had a " + this.species + " \n EIA EIA Oh!\n With a " + this.sound + " " + this.sound + " here! \n And a " + this.sound + " " + this.sound + " there!\n Here a " + this.sound + "! There a " + this.sound + " !\n  Everywhere " + this.sound + " " + this.sound + " !\n Old McDonald had a farm\n EIA EIA Oh!";
            songText.innerHTML = String(text1);
            let actionText = document.getElementById("actionText");
            let text2 = "Do special action with " + this.species;
            actionText.innerHTML = String(text2);
        }
        draw() {
            //console.log("Animal draw")
        }
        doSpecialAction() {
            //console.log("Animal doSpecialAction")
        }
    }
    L10_OldMacDonaldsFarm.Animal = Animal;
})(L10_OldMacDonaldsFarm || (L10_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Animal.js.map