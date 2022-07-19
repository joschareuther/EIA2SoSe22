var garden;
(function (garden) {
    class Plant extends garden.Product {
        field;
        growthTime;
        growthProcess = 0;
        time = 10;
        waterNeedTime = 60;
        dungNeedTime = 120;
        maxCareTime = 30;
        currentCareTime = 0;
        pestAttack;
        grow() {
            console.log("grow");
            let image = document.createElement("img");
            image.setAttribute("src", "Emojis/veggies/carrot_1f955.png");
            image.setAttribute("width", "40");
            image.setAttribute("height", "40");
            image.setAttribute("alt", "carrot");
            document.getElementsByClassName("field").appendChild(image);
        }
        ;
        waterPlant() { }
        ;
        dungPlant() { }
        ;
        cropPlant() { }
        ;
        die() { }
        ;
        fightPest() { }
        ;
    }
    garden.Plant = Plant;
})(garden || (garden = {}));
//# sourceMappingURL=Plant.js.map