var garden;
(function (garden) {
    class Product {
        name;
        price;
        constructor(_name, _price) {
            this.name = _name;
            this.price = _price;
        }
        buyProduct() {
            //console.log("geklicktes Produkt: " + this.name, this.price);
            garden.capital -= this.price;
            //console.log("Kapital nach Kauf:" + capital);
            // show entry in div
            let capitalDiv = document.getElementById("capital");
            capitalDiv.innerHTML = "CAPITAL" + " " + garden.capital.toString() + "$";
            //let stack: HTMLDivElement = <HTMLDivElement>document.getElementById(this.name + "Counter");
            //console.log(stack);
            //this.name + ("Stack").innerHTML = this.name + ("Counter").toString();
        }
    }
    garden.Product = Product;
})(garden || (garden = {}));
//# sourceMappingURL=Product.js.map