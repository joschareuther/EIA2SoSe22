namespace garden {

    export abstract class Plant extends Product {

        field: HTMLDivElement;
        waterNeedTime: number = 60;
        dungNeedTime: number = 120;
        maxCareTime: number = 30;
        currentCareTime: number = 0;
        pestAttack: boolean;
        image: HTMLImageElement;
        sellPrice: number;

        constructor(_name: string, _price: number, _sellPrice: number) {
            super(_name, _price);
            this.sellPrice = _sellPrice;

        }



        die(): void {
            //emptyField
        }
    }
}