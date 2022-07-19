namespace garden {

    export class Carrot extends Plant {

        grow(parent: HTMLDivElement): void {
            this.field = parent; //grab parent element
            console.log("grow");
            this.image = <HTMLImageElement>document.createElement("img"); // create new Image
            this.image.setAttribute("src", "Emojis/veggies/carrot_1f955.png"); // define which image
            this.image.classList.add("small"); // give image a class
            this.image.addEventListener("click", this.harvestPlant);
            let thisImage: HTMLImageElement = <HTMLImageElement>this.image; // give this.image to a variable, so that ist is easier to work further
            setTimeout(function (): void { thisImage.classList.add("medium"); thisImage.classList.remove("small"); }, 10000); // replace class small with class medium after one minute
            let field: HTMLImageElement = <HTMLImageElement>this.field; // give this.field a variable 
            setTimeout(function (): void {
                thisImage.classList.add("big");
                thisImage.classList.remove("medium");  // replace class medium with class big after another minute
                let progressbar: HTMLDivElement = <HTMLDivElement>field.children[0]; //grab process bar
                let statusimage: HTMLImageElement = <HTMLImageElement>document.createElement("img"); //create new image for statusimage
                statusimage.setAttribute("src", "Emojis/actions/tractor_1f69c.png"); //define tractor image
                progressbar.appendChild(statusimage);
                console.log("progessbar");
            },         20000);
            this.field.appendChild(this.image); // append all this stuff to the clicked field
        }

        harvestPlant(_event: MouseEvent): void {
            console.log("you want to harvest the plant");
            this.image = <HTMLImageElement>_event.target; //get target (the vegetable)
            let thisImage: HTMLDivElement = <HTMLDivElement>this.image.parentElement; //get parent Element
            thisImage.removeChild(this.image); // remove image of the vegetable with the parent element

            let progressbar: HTMLDivElement = <HTMLDivElement>thisImage.children[0];
            let image: HTMLImageElement = <HTMLImageElement>progressbar.children[0];
            progressbar.removeChild(image); //remove tractor
            
            capital += carrotSellPrice; //add carrotSellPrice to capital
            let capitalDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("capital");
            capitalDiv.innerHTML = "CAPITAL" + " " + capital.toString() + "$";
        }
    }
}