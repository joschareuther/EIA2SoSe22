var garden;
(function (garden) {
    class Eggplant extends garden.Plant {
        name = "Eggplant";
        grow(parent) {
            this.field = parent; //give clicked element to field
            console.log("grow");
            this.image = document.createElement("img"); // create new Image
            this.image.setAttribute("src", "Emojis/veggies/Eggplant Emoji.png"); // define which image
            this.image.classList.add("small"); // give image a class
            this.image.addEventListener("click", this.harvestPlant); // add EventListener to pic which calls harvestPlant
            let thisImage = this.image; // give this.image to a variable, so that ist is easier to work further
            setTimeout(function () { thisImage.classList.add("medium"); thisImage.classList.remove("small"); }, 10000); // replace class small with class medium after one minute
            let field = this.field; //give this.field a variable, so that ist is easier to work further
            setTimeout(function () {
                thisImage.classList.add("big");
                thisImage.classList.remove("medium"); // replace class medium with class big after another minute
                let progressbar = field.children[0]; // grab progressbar, so we can put a pic in it
                let stausimage = document.createElement("img"); // create new Image
                stausimage.setAttribute("src", "Emojis/actions/tractor_1f69c.png"); // define which image
                progressbar.appendChild(stausimage);
                //console.log(progressbar); 
            }, 20000);
            this.field.appendChild(this.image); // append all this stuff to the clicked field
            /*  // this is where the plant needs water
                setTimeout(function (): void {
                    let progressbar: HTMLDivElement = <HTMLDivElement>field.children[0]; // grab progressbar, so we can put a pic in it
                    let stausimage: HTMLImageElement = <HTMLImageElement>document.createElement("img"); // create new Image
                    stausimage.setAttribute("src", "Emojis/actions/sweat-droplets_1f4a6.png"); // define which image
                    progressbar.appendChild(stausimage);
                },
                           Math.random() * 20000); */
        }
        harvestPlant(_event) {
            console.log("you want to harvest the plant");
            this.image = _event.target; // get target (the vegetable)
            //console.log(_event.target);
            let thisImage = this.image.parentElement; // get parentElement
            thisImage.removeChild(this.image); // remove pic (of the vegetable)
            let progressbar = thisImage.children[0]; // grab progressbar, so we can put a pic in it
            let image = progressbar.children[0];
            progressbar.removeChild(image); // remove tractor
            garden.capital += garden.eggplantSellPrice; // adds SellPrice to capital
            let capitalDiv = document.getElementById("capital");
            capitalDiv.innerHTML = "CAPITAL" + " " + garden.capital.toString() + "$";
        }
    }
    garden.Eggplant = Eggplant;
})(garden || (garden = {}));
//# sourceMappingURL=Eggplant.js.map