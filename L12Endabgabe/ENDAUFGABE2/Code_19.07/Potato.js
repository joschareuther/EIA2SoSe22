var garden;
(function (garden) {
    class Potato extends garden.Plant {
        name = "Potato";
        grow(parent) {
            this.field = parent; //give clicked element to field
            console.log("grow");
            this.image = document.createElement("img"); // create new Image
            this.image.setAttribute("src", "Emojis/veggies/potato_1f954.png"); // define which image
            this.image.classList.add("small"); // give image a class
            let thisImage = this.image; // give this.image to a variable, so that ist is easier to work further
            setTimeout(function () { thisImage.classList.add("medium"); thisImage.classList.remove("small"); }, 10000); // replace class small with class medium after one minute
            setTimeout(function () { thisImage.classList.add("big"); thisImage.classList.remove("medium"); }, 20000); // replace class medium with class big after another minute
            this.field.appendChild(this.image); // append all this stuff to the clicked field
        }
    }
    garden.Potato = Potato;
})(garden || (garden = {}));
//# sourceMappingURL=Potato.js.map