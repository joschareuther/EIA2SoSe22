var garden;
(function (garden) {
    class Plant extends garden.Product {
        field;
        waterNeedTime = 60;
        dungNeedTime = 120;
        maxCareTime = 30;
        currentCareTime = 0;
        pestAttack;
        image;
        die() {
            //emptyField
        }
    }
    garden.Plant = Plant;
})(garden || (garden = {}));
//# sourceMappingURL=Plant.js.map