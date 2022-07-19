"use strict";
var garden;
(function (garden) {
    class Field extends class Plant {
        market;
        plants;
        plant;
        hTMLDivElement;
        growthProzss = 0;
        pestAttack;
        pestTime;
        waterStock;
        waterNeed;
        waterNeedTime = 0;
        dungStock;
        dungNeed;
        dungNeedTime = 0;
        maxCareTime = 60;
        currentCareTime = 0;
        constructor(_market, _plants, _HTMLDivElement) {
            this.market = _market; // get info from the other class
            this.plants = _plants;
            this.hTMLDivElement = _HTMLDivElement;
            setInterval(this.grow, 10000, 10); // calls grow every 10 seconds with parameter tick = 10
        }
        grow(_tick) {
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
            }
            else {
                this.currentCareTime += _tick; // else the timer for to care for the plant increases
            }
        }
        plantPlant(_plant) {
            this.plant = _plant; // get info from the other class
            this.market.decreaseSeedling(_plant.name); // one less seedling in your storage
        }
        // water is endless, so no decreasing
        waterPlant() {
            this.waterStock += 1; // was passiert hier?
        }
        dungPlant() {
            this.market.decreaseDung(); // one less dung in own storage
            this.dungStock += 1; // was passiert hier?
        }
        // nur der Preis soll auf das capital draufgerechnet werden, nicht die Pflanzen gesammelt
        cropPlant() {
            this.market.sellProduct(this.product.price); // was passiert hier?
            this.resetField(); // empties the field
        }
        pestFight() {
            this.market.decreasePesticid(); // decrease one in market bc you needed one
            this.pestAttack = false; // pest is gone
        }
        resetField() {
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
    } {
    }
    garden.Field = Field;
})(garden || (garden = {}));
//# sourceMappingURL=Field.js.map