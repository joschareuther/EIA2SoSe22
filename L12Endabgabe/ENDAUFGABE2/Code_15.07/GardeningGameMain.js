var garden;
(function (garden) {
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        //console.log("Load");
        let start = document.getElementById("start");
        start.addEventListener("click", hideScreen1);
        // EVENTLISTENER on vegetables in market
        let carrot = document.getElementById("carrot");
        let eggplant = document.getElementById("eggplant");
        let garlic = document.getElementById("garlic");
        let salad = document.getElementById("salad");
        let potato = document.getElementById("potato");
        let dung = document.getElementById("dung");
        let pesticide = document.getElementById("pesticide");
        //call functions to count Products when bought
        carrot.addEventListener("click", buyCarrot);
        eggplant.addEventListener("click", buyEggplant);
        garlic.addEventListener("click", buyGarlic);
        salad.addEventListener("click", buySalad);
        potato.addEventListener("click", buyPotato);
        dung.addEventListener("click", buyDung);
        pesticide.addEventListener("click", buyPesticide);
        garden.capital = 0;
        console.log("Kapital nach load:" + garden.capital);
    }
    //hide screen 1 and show screen 2 
    function hideScreen1() {
        //console.log("Start");
        let screen1 = document.getElementById("Screen1");
        let screen2 = document.getElementById("Screen2");
        screen1.style.display = "none";
        screen2.style.display = "unset";
        createFields();
    }
    //create fields
    function createFields() {
        //iterate through rows
        for (let index = 0; index < 7; index++) { //for loop with index = 7
            document.querySelector("row" + index); //every HTML-row gets selected
            let rows = document.getElementById("row" + index); //declaration of the rows
            //create 9 fields in a row
            for (let index = 0; index < 9; index++) { //for loop with index = 9
                let field = document.createElement("div"); //declaration of field and create new div element for it
                field.classList.add("field"); //add field to 
                rows.appendChild(field); // parent field to row
                let state = document.createElement("div"); //declaration of state and create new div elemtn for it
                state.classList.add("pbar"); //add process bar to state
                field.appendChild(state); //parent state to field
            }
        }
        readFormData();
    }
    function readFormData() {
        let formdata = new FormData(document.forms[0]);
        //console.log(formdata);
        for (let entry of formdata.entries()) {
            switch (entry[0]) {
                case "Price":
                    garden.maxPrice = Number(entry[1]);
                    console.log("maxPrice-Formdata:" + garden.maxPrice);
                    break;
                case "Startcapital":
                    garden.capital = Number(entry[1]);
                    console.log("Kapital:" + garden.capital);
            }
            // show entry in div
            let capitalDiv = document.getElementById("capital");
            capitalDiv.innerHTML = "CAPITAL" + " " + garden.capital.toString() + "$";
        }
    }
    //functions to buy vegetables
    function buyCarrot() {
        console.log("buyCarrot");
        let carrot = new garden.Carrot("carrot", 1);
        carrot.buyProduct();
    }
    function buyEggplant() {
        console.log("buyEggplant");
        let eggplant = new garden.Eggplant("eggplant", 2);
        eggplant.buyProduct();
    }
    function buyGarlic() {
        console.log("buyGarlic");
        let garlic = new garden.Garlic("garlic", 8);
        garlic.buyProduct();
    }
    function buySalad() {
        console.log("buySalad");
        let salad = new garden.Salad("salad", 3);
        salad.buyProduct();
    }
    function buyPotato() {
        console.log("buyPotato");
        let potato = new garden.Potato("potato", 2);
        potato.buyProduct();
    }
    function buyDung() {
        console.log("buyDung");
        let dung = new garden.Dung("dung", 4);
        dung.buyProduct();
    }
    function buyPesticide() {
        console.log("buyPesticide");
        let pesticide = new garden.Pesticide("pesticide", 5);
        pesticide.buyProduct();
    }
})(garden || (garden = {}));
//# sourceMappingURL=GardeningGameMain.js.map