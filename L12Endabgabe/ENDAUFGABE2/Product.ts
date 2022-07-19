namespace garden {
    export class Product {
        name: string;
        price: number;

        constructor(_name: string, _price: number) {
            this.name = _name;
            this.price = _price;
        }

        buyProduct(): void {
            //console.log("geklicktes Produkt: " + this.name, this.price);
            capital -= this.price;                 
            //console.log("Kapital nach Kauf:" + capital + this.price);
            // show entry in div
            let capitalDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("capital");
            capitalDiv.innerHTML = "CAPITAL" + " " + capital.toString() + "$";

            //let stack: HTMLDivElement = <HTMLDivElement>document.getElementById(this.name + "Counter");
            //console.log(stack);
            //this.name + ("Stack").innerHTML = this.name + ("Counter").toString();
        }
    }
}
