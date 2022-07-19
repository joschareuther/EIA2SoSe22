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
        carrot.addEventListener("click", buyProduct);
        eggplant.addEventListener("click", buyProduct);
        garlic.addEventListener("click", buyProduct);
        salad.addEventListener("click", buyProduct);
        potato.addEventListener("click", buyProduct);
        dung.addEventListener("click", buyProduct);
        pesticide.addEventListener("click", buyProduct);
        //set basic counters to zero
        garden.capital = 0;
        //console.log("Kapital nach load:" + capital);
        garden.carrotCounter = 0;
        garden.eggplantCounter = 0;
        garden.garlicCounter = 0;
        garden.saladCounter = 0;
        garden.potatoCounter = 0;
        garden.dungCounter = 0;
        garden.pesticideCounter = 0;
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
                    //console.log(maxPrice);
                    break;
                case "Startcapital":
                    garden.capital = Number(entry[1]);
                //console.log("Kapital:" + capital);
            }
            // show entry in div
            let capitalDiv = document.getElementById("capital");
            capitalDiv.innerHTML = "CAPITAL" + " " + garden.capital.toString() + "$";
            //show storage counters which are still at zero
            let carrotStack = document.getElementById("carrotCounter");
            carrotStack.innerHTML = garden.carrotCounter.toString();
            let eggplantStack = document.getElementById("eggplantCounter");
            eggplantStack.innerHTML = garden.eggplantCounter.toString();
            let garlicStack = document.getElementById("garlicCounter");
            garlicStack.innerHTML = garden.garlicCounter.toString();
            let saladStack = document.getElementById("saladCounter");
            saladStack.innerHTML = garden.saladCounter.toString();
            let potatoStack = document.getElementById("potatoCounter");
            potatoStack.innerHTML = garden.potatoCounter.toString();
            let dungStack = document.getElementById("dungCounter");
            dungStack.innerHTML = garden.dungCounter.toString();
            let pesticideStack = document.getElementById("pesticideCounter");
            pesticideStack.innerHTML = garden.pesticideCounter.toString();
            changePrices();
            setInterval(changePrices, 10000);
        }
    }
    let carrotPrice;
    let eggplantPrice;
    let saladPrice;
    let potatoPrice;
    let garlicPrice;
    let dungPrice;
    let pesticidePrice;
    function changePrices() {
        carrotPrice = Math.floor(Math.random() * garden.maxPrice + 1);
        eggplantPrice = Math.floor(Math.random() * garden.maxPrice + 2);
        saladPrice = Math.floor(Math.random() * garden.maxPrice + 3);
        potatoPrice = Math.floor(Math.random() * garden.maxPrice + 2);
        garlicPrice = Math.floor(Math.random() * garden.maxPrice + 8);
        dungPrice = Math.floor(Math.random() * garden.maxPrice + 4);
        pesticidePrice = Math.floor(Math.random() * garden.maxPrice + 5);
        //console.log("aktuelle Verkaufspreise: " + carrotPrice + eggplantPrice + saladPrice + potatoPrice + garlicPrice + dungPrice + pesticidePrice);
        //buy prices
        let carrotBuy = document.getElementById("carrotPrice");
        carrotBuy.innerHTML = carrotPrice.toString() + "$";
        let eggplantBuy = document.getElementById("eggplantPrice");
        eggplantBuy.innerHTML = eggplantPrice.toString() + "$";
        let saladBuy = document.getElementById("saladPrice");
        saladBuy.innerHTML = saladPrice.toString() + "$";
        let potatoBuy = document.getElementById("potatoPrice");
        potatoBuy.innerHTML = potatoPrice.toString() + "$";
        let garlicBuy = document.getElementById("garlicPrice");
        garlicBuy.innerHTML = garlicPrice.toString() + "$";
        let dungBuy = document.getElementById("dungPrice");
        dungBuy.innerHTML = dungPrice.toString() + "$";
        let pesticideBuy = document.getElementById("pesticidePrice");
        pesticideBuy.innerHTML = pesticidePrice.toString() + "$";
    }
    //functions to buy vegetables
    function buyProduct(_event) {
        let target = _event.target;
        let id = target.id;
        if (garden.capital > 0) {
            switch (id) {
                case "carrot":
                    let carrot = new garden.Carrot("carrot", carrotPrice);
                    garden.carrotCounter++;
                    carrot.buyProduct();
                    let carrotStack = document.getElementById("carrotCounter");
                    carrotStack.innerHTML = garden.carrotCounter.toString();
                    console.log("bought " + id);
                    break;
                case "eggplant":
                    let eggplant = new garden.Eggplant("eggplant", eggplantPrice);
                    garden.eggplantCounter++;
                    eggplant.buyProduct();
                    let eggplantStack = document.getElementById("eggplantCounter");
                    eggplantStack.innerHTML = garden.eggplantCounter.toString();
                    console.log("bought " + id);
                    break;
                case "salad":
                    let salad = new garden.Salad("salad", saladPrice);
                    garden.saladCounter++;
                    salad.buyProduct();
                    let saladStack = document.getElementById("saladCounter");
                    saladStack.innerHTML = garden.saladCounter.toString();
                    console.log("bought " + id);
                    break;
                case "potato":
                    let potato = new garden.Potato("potato", potatoPrice);
                    garden.potatoCounter++;
                    potato.buyProduct();
                    let potatoStack = document.getElementById("potatoCounter");
                    potatoStack.innerHTML = garden.potatoCounter.toString();
                    console.log("bought " + id);
                    break;
                case "garlic":
                    let garlic = new garden.Garlic("garlic", garlicPrice);
                    garden.garlicCounter++;
                    garlic.buyProduct();
                    let garlicStack = document.getElementById("garlicCounter");
                    garlicStack.innerHTML = garden.garlicCounter.toString();
                    console.log("bought " + id);
                    break;
                case "dung":
                    let dung = new garden.Dung("dung", dungPrice);
                    garden.dungCounter++;
                    dung.buyProduct();
                    let dungStack = document.getElementById("dungCounter");
                    dungStack.innerHTML = garden.dungCounter.toString();
                    console.log("bought " + id);
                    break;
                case "pesticide":
                    let pesticide = new garden.Pesticide("pesticide", pesticidePrice);
                    garden.pesticideCounter++;
                    pesticide.buyProduct();
                    let pesticideStack = document.getElementById("pesticideCounter");
                    pesticideStack.innerHTML = garden.pesticideCounter.toString();
                    console.log("bought " + id);
                    break;
            }
        }
        else {
            alert("you're broke!");
        }
    }
})(garden || (garden = {}));
//# sourceMappingURL=GardeningGameMain.js.map