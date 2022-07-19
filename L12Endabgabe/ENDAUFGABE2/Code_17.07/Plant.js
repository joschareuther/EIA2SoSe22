var garden;
(function (garden) {
    class Plant extends garden.Product {
        // Bilder bei drag duplizieren?
        field;
        growthTime;
        growthProcess = 0;
        time = 10;
        waterNeedTime = 60;
        dungNeedTime = 120;
        maxCareTime = 30;
        currentCareTime = 0;
    }
    garden.Plant = Plant;
})(garden || (garden = {}));
//# sourceMappingURL=Plant.js.map