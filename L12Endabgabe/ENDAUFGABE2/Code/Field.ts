namespace garden {

    export class Field extends Plant {

        market: Market;
        plants: Plant;
        plant: Plant | null;
        hTMLDivElement: HTMLDivElement;
        growthProzss: number = 0;
        pestAttack: boolean;
        pestTime: number;
        waterStock: number;
        waterNeed: number;
        waterNeedTime: number = 0;
        dungStock: number;
        dungNeed: number;
        dungNeedTime: number = 0;
        maxCareTime: number = 60;
        currentCareTime: number = 0;

        constructor(_market: Market, _plants: Plant, _HTMLDivElement: HTMLDivElement) {
            super();
            this.market = _market; // get info from the other class
            this.plants = _plants;
            this.hTMLDivElement = _HTMLDivElement;
            setInterval(this.grow, 10000, 10); // calls grow every 10 seconds with parameter tick = 10
        }

        grow(_tick: number): void {
            if (this.plant == null) {
                return; // if no plant is planted end here
            }
            if (this.currentCareTime >= this.maxCareTime) {
                this.resetField();
                return; // no caretaking -> plant dies -> field empty again
            }
            //if all condition are meeted, plant grows and the need for water and dung rises
            if (this.waterNeed == this.waterStock && this.dungNeed == this.dungStock && !this.pestAttack) {
                if (this.plant.growthTime > this.growthProzss) { // if growthProzess is smaller than growthTime ...
                    this.growthProzss += _tick; // ... increase growthProzess by 10
                    this.waterNeedTime += _tick; // ... increase waterNeedTime by 10
                    this.dungNeedTime += _tick; // ... increase dungNeedTime by 10
                    //Icon auftauchen lassen im Zusatzfeld!
                    if (this.waterNeedTime >= this.waterNeedTime) { // if waterNeedTime is bigger than the waterNeedTime from this plant ...
                        this.waterNeedTime = 0; // ... the plant doesn't need water anymore and the counter starts again
                        this.waterNeed += this.plant.waterNeed; // set waterNeed of plant to 0 again
                    }
                    //Icon auftauchen lassen im Zusatzfeld!
                    if (this.dungNeedTime >= this.dungNeedTime) { // if dungNeedTime is bigger than the dungNeedTime from this plant ... 
                        this.dungNeedTime = 0; // ... the plant doesn't need more dung and the counter starts again
                        this.dungNeed += this.plant.dungNeed; // set dungNeed of plant to 0 again
                    }
                }
            } else {
                this.currentCareTime += _tick; // else the timer for to care for the plant increases
            }
        }

        plantPlant(_plant: Plant): void {
            this.plant = _plant; // get info from the other class
            this.market.decreaseSeedling(_plant.name); // one less seedling in your storage
        }

        // water is endless, so no decreasing
        waterPlant(): void {
            this.waterStock += 1; // was passiert hier?
        }

        dungPlant(): void {
            this.market.decreaseDung(); // one less dung in own storage
            this.dungStock += 1; // was passiert hier?
        }

        // nur der Preis soll auf das capital draufgerechnet werden, nicht die Pflanzen gesammelt
        cropPlant(): void {
            this.market.sellProduct(this.product.price); // was passiert hier?
            this.resetField(); // empties the field
        }

        pestFight(): void {
            this.market.decreasePesticid(); // decrease one in market bc you needed one
            this.pestAttack = false; // pest is gone
        }

        resetField(): void { // empties the field
            this.plant = null;
            this.growthProzss = 0;
            this.pestAttack = false;
            this.pestTime = 0;
            this.waterStock = 0;
            this.waterNeed = 0;
            this.dungStock = 0;
            this.dungNeed = 0;
            this.maxCareTime = 60;
            this.currentCareTime = 0;
        }

    }
}