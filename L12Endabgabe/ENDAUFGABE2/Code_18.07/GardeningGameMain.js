var garden;
(function (garden) {
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        //console.log("Load");
        let start = document.getElementById("start");
        start.addEventListener("click", hideScreen1);
        // EVENTLISTENER on vegetables in storage to get them planted
        let carrot1 = document.getElementById("carrot1");
        let eggplant1 = document.getElementById("eggplant1");
        let garlic1 = document.getElementById("garlic1");
        let salad1 = document.getElementById("salad1");
        let potato1 = document.getElementById("potato1");
        let dung1 = document.getElementById("dung1");
        let pesticide1 = document.getElementById("pesticide1");
        let water = document.getElementById("water");
        // call function to get the target.id of the clicked vegetable
        carrot1.addEventListener("click", getTarget);
        eggplant1.addEventListener("click", getTarget);
        garlic1.addEventListener("click", getTarget);
        salad1.addEventListener("click", getTarget);
        potato1.addEventListener("click", getTarget);
        dung1.addEventListener("click", getTarget);
        pesticide1.addEventListener("click", getTarget);
        water.addEventListener("click", getTarget);
        // EVENTLISTENER on vegetables in market to get an Evntlistener on
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
                field.classList.add("field"); //add classnamne
                field.addEventListener("click", fieldClick); // add eventListener              
                rows.appendChild(field); // parent field to row
                let state = document.createElement("div"); //declaration of state and create new div elemtn for it
                state.classList.add("pbar"); //add classnamne
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
            // show entry for capital in div
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
            // call function to change prices frequently
            changePrices();
            setInterval(changePrices, 10000);
        }
    }
    // variables for different prices (buy)
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
        // show prices (buy)
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
    //function to buy vegetables
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
    function getTarget(_event) {
        let target = _event.target;
        garden.clickedVegetable = target.id;
    }
    // this function checks out id an plant that plant on the clicked field and all that stuff around it ...
    function fieldClick() {
        console.log("you've clicked on a field");
        switch (garden.clickedVegetable) { // switch case loop checks out which value clickedVegetable has
            case "carrot1":
                if (garden.carrotCounter > 0) { // only works when we HAVE carrots
                    let carrot = new garden.Carrot("carrot", carrotPrice);
                    console.log("you want to plant a carrot");
                    carrot.grow();
                    garden.carrotCounter--; // devcrease counter bc we planted one carrot
                    let carrotStack = document.getElementById("carrotCounter"); // gets the div f??r counter
                    carrotStack.innerHTML = garden.carrotCounter.toString(); // writes new counter in that div
                    break;
                }
            case "eggplant1":
                if (garden.eggplantCounter > 0) {
                    let eggplant = new garden.Eggplant("carrot", carrotPrice);
                    console.log("you want to plant an eggplant");
                    eggplant.grow();
                    garden.eggplantCounter--;
                    let eggplantStack = document.getElementById("carrotCounter");
                    eggplantStack.innerHTML = garden.carrotCounter.toString();
                    break;
                }
            case "garlic1":
                if (garden.garlicCounter > 0) {
                    let garlic = new garden.Garlic("carrot", carrotPrice);
                    console.log("you want to plant a carrot");
                    garlic.grow();
                    garden.garlicCounter--;
                    let garlicStack = document.getElementById("carrotCounter");
                    garlicStack.innerHTML = garden.carrotCounter.toString();
                    break;
                }
            case "salad1":
                if (garden.saladCounter > 0) {
                    let salad = new garden.Salad("carrot", carrotPrice);
                    console.log("you want to plant a salad");
                    salad.grow();
                    garden.saladCounter--;
                    let saladStack = document.getElementById("carrotCounter");
                    saladStack.innerHTML = garden.carrotCounter.toString();
                    break;
                }
            case "potato1":
                if (garden.potatoCounter > 0) {
                    let potato = new garden.Potato("carrot", carrotPrice);
                    console.log("you want to plant a potato");
                    potato.grow();
                    garden.potatoCounter--;
                    let potatoStack = document.getElementById("carrotCounter");
                    potatoStack.innerHTML = garden.carrotCounter.toString();
                    break;
                }
            case "dung1":
                if (garden.dungCounter > 0) {
                    let dung = new garden.Dung("carrot", carrotPrice);
                    console.log("you want to use dung");
                    //dung.dungPlant();
                    garden.dungCounter--;
                    let dungStack = document.getElementById("carrotCounter");
                    dungStack.innerHTML = garden.carrotCounter.toString();
                    break;
                }
            case "pesticide1":
                if (garden.pesticideCounter > 0) {
                    let pesticide = new garden.Pesticide("carrot", carrotPrice);
                    console.log("you want to use pesticide");
                    // pesticide.fightPest();
                    garden.pesticideCounter--;
                    let pesticideStack = document.getElementById("carrotCounter");
                    pesticideStack.innerHTML = garden.carrotCounter.toString();
                    break;
                }
            case "water":
                console.log("you want to water the plant");
                //Plant.waterPlant();
                break;
        }
    }
})(garden || (garden = {}));
//# sourceMappingURL=GardeningGameMain.js.map