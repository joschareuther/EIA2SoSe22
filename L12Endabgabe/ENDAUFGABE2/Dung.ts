namespace garden {
    export class Dung extends Product {

        name: string = "Dung";
        price: number = this.price;
        image: HTMLImageElement;



        dungPlant(parent: HTMLImageElement): void {
            this.image = parent;
        }
    }

    
}