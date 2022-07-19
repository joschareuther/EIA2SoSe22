namespace garden {
    class Pesticide extends Product {
        name: string = "Dung";
        price: number = this.price;

        buyProduct (): void {
            //buy pesticide
        }
    }
}