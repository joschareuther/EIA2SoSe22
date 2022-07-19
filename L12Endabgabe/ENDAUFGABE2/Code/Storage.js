"use strict";
var garden;
(function (garden) {
    class Storage {
        capital;
        capitalDiv = document.getElementById("capital");
        // read formdata
        readFormData2() {
            let formdata = new FormData(document.forms[0]);
            for (let entry of formdata.entries()) {
                "Startcapital";
                this.capital = Number(entry[1]);
            }
            // show entry in div
            this.capitalDiv.innerHTML = "TOTAL: " + this.capital.toString();
        }
        plantPlant() {
            //drag'n'drop?
        }
    }
    garden.Storage = Storage;
})(garden || (garden = {}));
//# sourceMappingURL=Storage.js.map