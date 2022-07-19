"use strict";
var garden;
(function (garden) {
    class Product {
        name;
        price; // das Gleiche wie MaxPrice?
        maxPrice; // 3 oder 5?
        minPrice = 1;
        priceVariation;
        constructor(name, _minPrice, _maxPrice) {
            this.name = name;
            this.minPrice = _minPrice;
            this.maxPrice = _maxPrice;
        }
        readFormData1() {
            let formdata = new FormData(document.forms[0]);
            for (let entry of formdata.entries()) {
                switch (entry[0]) {
                    case "Price":
                        this.priceVariation = Number(entry[1]);
                        console.log(this.priceVariation); //funktioniert nicht?
                }
            }
        }
        changePrice() {
            this.price = Math.floor(Math.random() * this.maxPrice + this.minPrice); // ändert alle Preise auf einmal?
        }
        buyProduct() {
            //vom capital price abziehen
        }
    }
    garden.Product = Product;
})(garden || (garden = {}));
//# sourceMappingURL=Product.js.map