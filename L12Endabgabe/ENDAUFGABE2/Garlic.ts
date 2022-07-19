namespace garden {

    export class Garlic extends Plant {

        name: string = "Garlic";

        grow(parent: HTMLDivElement): void {
            this.field = parent; //give clicked element to field
            console.log("grow");
            this.image = <HTMLImageElement>document.createElement("img"); // create new Image
            this.image.setAttribute("src", "Emojis/veggies/garlic_1f9c4.png"); // define which image
            this.image.classList.add("small"); // give image a class
            this.image.addEventListener("click", this.harvestPlant); // add EventListener to pic which calls harvestPlant
            let thisImage: HTMLImageElement = <HTMLImageElement>this.image; // give this.image to a variable, so that ist is easier to work further
            setTimeout(function (): void { thisImage.classList.add("medium"); thisImage.classList.remove("small"); }, 10000); // replace class small with class medium after one minute
            let field: HTMLImageElement = <HTMLImageElement>this.field; //give this.field a variable, so that ist is easier to work further
            setTimeout(function (): void {
                thisImage.classList.add("big");
                thisImage.classList.remove("medium"); // replace class medium with class big after another minute
                let progressbar: HTMLDivElement = <HTMLDivElement>field.children[0]; // grab progressbar, so we can put a pic in it
                let stausimage: HTMLImageElement = <HTMLImageElement>document.createElement("img"); // create new Image
                stausimage.setAttribute("src", "Emojis/actions/tractor_1f69c.png"); // define which image
                progressbar.appendChild(stausimage);
                //console.log(progressbar); 
            },         20000);
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

        harvestPlant(_event: MouseEvent): void {
            console.log("you want to harvest the plant");
            this.image = <HTMLImageElement>_event.target; // get target (the vegetable)
            //console.log(_event.target);
            let thisImage: HTMLDivElement = <HTMLDivElement>this.image.parentElement; // get parentElement
            thisImage.removeChild(this.image); // remove pic (of the vegetable)

         
            let progressbar: HTMLImageElement = <HTMLImageElement>thisImage.children[0]; // grab progressbar, so we can put a pic in it
            let image: HTMLImageElement = <HTMLImageElement>progressbar.children[0];
            progressbar.removeChild(image); // remove tractor

            capital += garlicSellPrice; // adds SellPrice to capital
            let capitalDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("capital");
            capitalDiv.innerHTML = "CAPITAL" + " " + capital.toString() + "$";
        }

    }
}
