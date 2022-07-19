namespace garden {
    export class Product {
        name: string;
        price: number;
        counter: number = 0;

        constructor(_name: string, _price: number) {
            this.name = _name;
            this.price = _price;
        }

        changePrice(): void {
            this.price = Math.floor(Math.random() * maxPrice);
            console.log(this.price);
        }

        buyProduct(): void {
            let stack: HTMLDivElement = <HTMLDivElement>document.getElementById(this.name + "Counter");
            console.log(this.name, this.price);
            console.log(stack);
            console.log("geklicktes Produkt: " + this.name);
            this.counter++;
            capital -= this.price;
            console.log("Counter nach Kauf:" + this.counter);
            //stack.innerHTML = this.counter.toString(); // show counter in div                     
            console.log("Kapital nach Kauf:" + capital);


            // show entry in div
            let capitalDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("capital");
            capitalDiv.innerHTML = "CAPITAL" + " " + capital.toString() + "$";
        }
    }
}
