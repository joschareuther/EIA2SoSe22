var garden;
(function (garden) {
    class Salad extends garden.Plant {
        name = "Salad";
        grow(parent) {
            this.field = parent; //give clicked element to field
            console.log("grow");
            this.image = document.createElement("img"); // create new Image
            this.image.setAttribute("src", "Emojis/veggies/leafy-green_1f96c.png"); // define which image
            this.image.addEventListener("click", this.harvestPlant);
            this.image.classList.add("small"); // give image a class
            let thisImage = this.image; // give this.image to a variable, so that ist is easier to work further
            setTimeout(function () { thisImage.classList.add("medium"); thisImage.classList.remove("small"); }, 10000); // replace class small with class medium after one minute
            let field = this.field; // give this.field a variable 
            setTimeout(function () {
                thisImage.classList.add("big");
                thisImage.classList.remove("medium"); // replace class medium with class big after another minute
                let progressbar = field.children[0]; //grab process bar
                let statusimage = document.createElement("img"); //create new image for statusimage
                statusimage.setAttribute("src", "Emojis/actions/tractor_1f69c.png"); //define tractor image
                progressbar.appendChild(statusimage);
                console.log("progessbar");
            }, 20000);
            this.field.appendChild(this.image); // append all this stuff to the clicked field
        }
        harvestPlant(_event) {
            console.log("you want to harvest the plant");
            this.image = _event.target; //get target (the vegetable)
            let thisImage = this.image.parentElement; //get parent Element
            thisImage.removeChild(this.image); // remove image of the vegetable with the parent element
            let progressbar = thisImage.children[0];
            let image = progressbar.children[0];
            progressbar.removeChild(image); //remove tractor
            garden.capital += garden.saladSellPrice; //add carrotSellPrice to capital
            let capitalDiv = document.getElementById("capital");
            capitalDiv.innerHTML = "CAPITAL" + " " + garden.capital.toString() + "$";
        }
    }
    garden.Salad = Salad;
})(garden || (garden = {}));
//# sourceMappingURL=Salad.js.map