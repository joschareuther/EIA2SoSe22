namespace garden {

    export class Product {

        name: string; 
        price: number; // das Gleiche wie MaxPrice?
        maxPrice: number; // 3 oder 5?
        minPrice: number = 1;
        priceVariation: number;


        constructor(name: string, _minPrice: number, _maxPrice: number) {
            this.name = name;
            this.minPrice = _minPrice;
            this.maxPrice = _maxPrice;
        }

        readFormData1(): void {
            let formdata: FormData = new FormData(document.forms[0]);
            for (let entry of formdata.entries()) {
                switch (entry[0]) {
                    case "Price":
                        this.priceVariation = Number(entry[1]);
                        console.log(this.priceVariation); //funktioniert nicht?
                }
            }
        }

        changePrice(): void {
            this.price = Math.floor(Math.random() * this.maxPrice + this.minPrice); // ändert alle Preise auf einmal?
        }


        buyProduct(): void {
            //vom capital price abziehen
        }
    }
}
