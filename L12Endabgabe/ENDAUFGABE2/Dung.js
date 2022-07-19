var garden;
(function (garden) {
    class Dung extends garden.Product {
        name = "Dung";
        price = this.price;
        image;
        dungPlant(parent) {
            this.image = parent;
        }
    }
    garden.Dung = Dung;
})(garden || (garden = {}));
//# sourceMappingURL=Dung.js.map