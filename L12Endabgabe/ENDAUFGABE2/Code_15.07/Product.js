var garden;
(function (garden) {
    class Product {
        name;
        price;
        counter = 0;
        constructor(_name, _price) {
            this.name = _name;
            this.price = _price;
        }
        changePrice() {
            this.price = Math.floor(Math.random() * garden.maxPrice);
            console.log(this.price);
        }
        buyProduct() {
            let stack = document.getElementById(this.name + "Counter");
            console.log(this.name, this.price);
            console.log(stack);
            console.log("geklicktes Produkt: " + this.name);
            this.counter++;
            garden.capital -= this.price;
            console.log("Counter nach Kauf:" + this.counter);
            //stack.innerHTML = this.counter.toString(); // show counter in div                     
            console.log("Kapital nach Kauf:" + garden.capital);
            // show entry in div
            let capitalDiv = document.getElementById("capital");
            capitalDiv.innerHTML = "CAPITAL" + " " + garden.capital.toString() + "$";
        }
    }
    garden.Product = Product;
})(garden || (garden = {}));
//# sourceMappingURL=Product.js.map