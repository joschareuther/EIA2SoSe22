var garden;
(function (garden) {
    class Pesticide extends garden.Product {
        name = "pesticide";
        price = this.price;
        fightPest() {
            //fightPest - remove little pic from pbar
        }
    }
    garden.Pesticide = Pesticide;
})(garden || (garden = {}));
//# sourceMappingURL=Pesticide.js.map