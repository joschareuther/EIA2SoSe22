"use strict";
var garden;
(function (garden) {
    class Plant extends class Product {
        field;
        growthTime;
        waterNeedTime = 60;
        dungNeedTime = 120;
        maxCareTime = 30;
        currentCareTime = 0;
        grow() {
            //Bildchen sollen größer werden
        }
        waterPlant() {
            //Wasser dragOver?
        }
        dungPlant() {
            //Dünger dragOver?
        }
        cropPlant() {
            //Feld leer
            //capital + price -> capital auch als Eigenschaft?
        }
        die() {
            //Feld leer
            // extra Bildchen anzeigen?
        }
        fightPest() {
            // pesticide dragOver?
        }
    } {
    }
    garden.Plant = Plant;
})(garden || (garden = {}));
//# sourceMappingURL=Plant.js.map