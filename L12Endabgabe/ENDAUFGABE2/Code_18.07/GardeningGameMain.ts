namespace garden {
    //declare global counters
    export let capital: number;
    export let maxPrice: number;
    export let carrotCounter: number;
    export let eggplantCounter: number;
    export let garlicCounter: number;
    export let saladCounter: number;
    export let potatoCounter: number;
    export let dungCounter: number;
    export let pesticideCounter: number;


    window.addEventListener("load", hndLoad);
    function hndLoad(): void {
        //console.log("Load");
        let start: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        start.addEventListener("click", hideScreen1);


        // EVENTLISTENER on vegetables in storage to get them planted
        let carrot1: HTMLImageElement = <HTMLImageElement>document.getElementById("carrot1");
        let eggplant1: HTMLImageElement = <HTMLImageElement>document.getElementById("eggplant1");
        let garlic1: HTMLImageElement = <HTMLImageElement>document.getElementById("garlic1");
        let salad1: HTMLImageElement = <HTMLImageElement>document.getElementById("salad1");
        let potato1: HTMLImageElement = <HTMLImageElement>document.getElementById("potato1");
        let dung1: HTMLImageElement = <HTMLImageElement>document.getElementById("dung1");
        let pesticide1: HTMLImageElement = <HTMLImageElement>document.getElementById("pesticide1");
        let water: HTMLImageElement = <HTMLImageElement>document.getElementById("water");

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
        let carrot: HTMLImageElement = <HTMLImageElement>document.getElementById("carrot");
        let eggplant: HTMLImageElement = <HTMLImageElement>document.getElementById("eggplant");
        let garlic: HTMLImageElement = <HTMLImageElement>document.getElementById("garlic");
        let salad: HTMLImageElement = <HTMLImageElement>document.getElementById("salad");
        let potato: HTMLImageElement = <HTMLImageElement>document.getElementById("potato");
        let dung: HTMLImageElement = <HTMLImageElement>document.getElementById("dung");
        let pesticide: HTMLImageElement = <HTMLImageElement>document.getElementById("pesticide");

        //call functions to count Products when bought
        carrot.addEventListener("click", buyProduct);
        eggplant.addEventListener("click", buyProduct);
        garlic.addEventListener("click", buyProduct);
        salad.addEventListener("click", buyProduct);
        potato.addEventListener("click", buyProduct);
        dung.addEventListener("click", buyProduct);
        pesticide.addEventListener("click", buyProduct);


        //set basic counters to zero
        capital = 0;
        //console.log("Kapital nach load:" + capital);
        carrotCounter = 0;
        eggplantCounter = 0;
        garlicCounter = 0;
        saladCounter = 0;
        potatoCounter = 0;
        dungCounter = 0;
        pesticideCounter = 0;
    }
    //hide screen 1 and show screen 2 
    function hideScreen1(): void {
        //console.log("Start");
        let screen1: HTMLDivElement = <HTMLDivElement>document.getElementById("Screen1");
        let screen2: HTMLDivElement = <HTMLDivElement>document.getElementById("Screen2");
        screen1.style.display = "none";
        screen2.style.display = "unset";
        createFields();
    }

    //create fields
    function createFields(): void {
        //iterate through rows
        for (let index: number = 0; index < 7; index++) {                                   //for loop with index = 7
            document.querySelector("row" + index);                                          //every HTML-row gets selected
            let rows: HTMLDivElement = <HTMLDivElement>document.getElementById("row" + index); //declaration of the rows

            //create 9 fields in a row
            for (let index: number = 0; index < 9; index++) {                               //for loop with index = 9
                let field: HTMLDivElement = <HTMLDivElement>document.createElement("div");  //declaration of field and create new div element for it
                field.classList.add("field");                                               //add classnamne
                field.addEventListener("click", fieldClick);                                // add eventListener              
                rows.appendChild(field);                                                    // parent field to row
                let state: HTMLDivElement = <HTMLDivElement>document.createElement("div");  //declaration of state and create new div elemtn for it
                state.classList.add("pbar");                                                //add classnamne
                field.appendChild(state);                                                   //parent state to field
            }
        }
        readFormData();
    }


    function readFormData(): void {
        let formdata: FormData = new FormData(document.forms[0]);
        //console.log(formdata);
        for (let entry of formdata.entries()) {
            switch (entry[0]) {
                case "Price":
                    maxPrice = Number(entry[1]);
                    //console.log(maxPrice);
                    break;
                case "Startcapital":
                    capital = Number(entry[1]);
                //console.log("Kapital:" + capital);
            }

            // show entry for capital in div
            let capitalDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("capital");
            capitalDiv.innerHTML = "CAPITAL" + " " + capital.toString() + "$";

            //show storage counters which are still at zero
            let carrotStack: HTMLDivElement = <HTMLDivElement>document.getElementById("carrotCounter");
            carrotStack.innerHTML = carrotCounter.toString();
            let eggplantStack: HTMLDivElement = <HTMLDivElement>document.getElementById("eggplantCounter");
            eggplantStack.innerHTML = eggplantCounter.toString();
            let garlicStack: HTMLDivElement = <HTMLDivElement>document.getElementById("garlicCounter");
            garlicStack.innerHTML = garlicCounter.toString();
            let saladStack: HTMLDivElement = <HTMLDivElement>document.getElementById("saladCounter");
            saladStack.innerHTML = saladCounter.toString();
            let potatoStack: HTMLDivElement = <HTMLDivElement>document.getElementById("potatoCounter");
            potatoStack.innerHTML = potatoCounter.toString();
            let dungStack: HTMLDivElement = <HTMLDivElement>document.getElementById("dungCounter");
            dungStack.innerHTML = dungCounter.toString();
            let pesticideStack: HTMLDivElement = <HTMLDivElement>document.getElementById("pesticideCounter");
            pesticideStack.innerHTML = pesticideCounter.toString();

            // call function to change prices frequently
            changePrices();
            setInterval(changePrices, 10000);
        }
    }

    // variables for different prices (buy)
    let carrotPrice: number;
    let eggplantPrice: number;
    let saladPrice: number;
    let potatoPrice: number;
    let garlicPrice: number;
    let dungPrice: number;
    let pesticidePrice: number;

    function changePrices(): void {
        carrotPrice = Math.floor(Math.random() * maxPrice + 1);
        eggplantPrice = Math.floor(Math.random() * maxPrice + 2);
        saladPrice = Math.floor(Math.random() * maxPrice + 3);
        potatoPrice = Math.floor(Math.random() * maxPrice + 2);
        garlicPrice = Math.floor(Math.random() * maxPrice + 8);
        dungPrice = Math.floor(Math.random() * maxPrice + 4);
        pesticidePrice = Math.floor(Math.random() * maxPrice + 5);
        //console.log("aktuelle Verkaufspreise: " + carrotPrice + eggplantPrice + saladPrice + potatoPrice + garlicPrice + dungPrice + pesticidePrice);

        // show prices (buy)
        let carrotBuy: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.getElementById("carrotPrice");
        carrotBuy.innerHTML = carrotPrice.toString() + "$";
        let eggplantBuy: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.getElementById("eggplantPrice");
        eggplantBuy.innerHTML = eggplantPrice.toString() + "$";
        let saladBuy: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.getElementById("saladPrice");
        saladBuy.innerHTML = saladPrice.toString() + "$";
        let potatoBuy: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.getElementById("potatoPrice");
        potatoBuy.innerHTML = potatoPrice.toString() + "$";
        let garlicBuy: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.getElementById("garlicPrice");
        garlicBuy.innerHTML = garlicPrice.toString() + "$";
        let dungBuy: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.getElementById("dungPrice");
        dungBuy.innerHTML = dungPrice.toString() + "$";
        let pesticideBuy: HTMLTableDataCellElement = <HTMLTableDataCellElement>document.getElementById("pesticidePrice");
        pesticideBuy.innerHTML = pesticidePrice.toString() + "$";
    }

    //function to buy vegetables
    function buyProduct(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;
        if (capital > 0) {
            switch (id) {
                case "carrot":
                    let carrot: Plant = new Carrot("carrot", carrotPrice);
                    carrotCounter++;
                    carrot.buyProduct();
                    let carrotStack: HTMLDivElement = <HTMLDivElement>document.getElementById("carrotCounter");
                    carrotStack.innerHTML = carrotCounter.toString();
                    console.log("bought " + id);
                    break;
                case "eggplant":
                    let eggplant: Plant = new Eggplant("eggplant", eggplantPrice);
                    eggplantCounter++;
                    eggplant.buyProduct();
                    let eggplantStack: HTMLDivElement = <HTMLDivElement>document.getElementById("eggplantCounter");
                    eggplantStack.innerHTML = eggplantCounter.toString();
                    console.log("bought " + id);
                    break;
                case "salad":
                    let salad: Plant = new Salad("salad", saladPrice);
                    saladCounter++;
                    salad.buyProduct();
                    let saladStack: HTMLDivElement = <HTMLDivElement>document.getElementById("saladCounter");
                    saladStack.innerHTML = saladCounter.toString();
                    console.log("bought " + id);
                    break;
                case "potato":
                    let potato: Plant = new Potato("potato", potatoPrice);
                    potatoCounter++;
                    potato.buyProduct();
                    let potatoStack: HTMLDivElement = <HTMLDivElement>document.getElementById("potatoCounter");
                    potatoStack.innerHTML = potatoCounter.toString();
                    console.log("bought " + id);
                    break;
                case "garlic":
                    let garlic: Plant = new Garlic("garlic", garlicPrice);
                    garlicCounter++;
                    garlic.buyProduct();
                    let garlicStack: HTMLDivElement = <HTMLDivElement>document.getElementById("garlicCounter");
                    garlicStack.innerHTML = garlicCounter.toString();
                    console.log("bought " + id);
                    break;
                case "dung":
                    let dung: Product = new Dung("dung", dungPrice);
                    dungCounter++;
                    dung.buyProduct();
                    let dungStack: HTMLDivElement = <HTMLDivElement>document.getElementById("dungCounter");
                    dungStack.innerHTML = dungCounter.toString();
                    console.log("bought " + id);
                    break;
                case "pesticide":
                    let pesticide: Product = new Pesticide("pesticide", pesticidePrice);
                    pesticideCounter++;
                    pesticide.buyProduct();
                    let pesticideStack: HTMLDivElement = <HTMLDivElement>document.getElementById("pesticideCounter");
                    pesticideStack.innerHTML = pesticideCounter.toString();
                    console.log("bought " + id);
                    break;
            }
        }
        else {
            alert("you're broke!");
        }
    }


    // this function selects the id of the clicked vegetable in the storage and is supposed to remember it, 
    // so that the id can be used when a field is clicked to create a new class of that vegetable
    export let clickedVegetable: string; // must be global so that getTarget(), fieldClick() and grow() have access
    function getTarget(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        clickedVegetable = target.id;
    }
    // this function checks out id an plant that plant on the clicked field and all that stuff around it ...
    function fieldClick(): void { // is called every time a field is clicked
        console.log("you've clicked on a field");
        switch (clickedVegetable) { // switch case loop checks out which value clickedVegetable has
            case "carrot1":
                if (carrotCounter > 0) { // only works when we HAVE carrots
                    let carrot: Plant = new Carrot("carrot", carrotPrice);
                    console.log("you want to plant a carrot");
                    carrot.grow();
                    carrotCounter--; // devcrease counter bc we planted one carrot
                    let carrotStack: HTMLDivElement = <HTMLDivElement>document.getElementById("carrotCounter"); // gets the div für counter
                    carrotStack.innerHTML = carrotCounter.toString(); // writes new counter in that div
                    break;
                }
            case "eggplant1":
                if (eggplantCounter > 0) {
                    let eggplant: Plant = new Eggplant("carrot", carrotPrice);
                    console.log("you want to plant an eggplant");
                    eggplant.grow();
                    eggplantCounter--;
                    let eggplantStack: HTMLDivElement = <HTMLDivElement>document.getElementById("carrotCounter");
                    eggplantStack.innerHTML = carrotCounter.toString();
                    break;
                }
            case "garlic1":
                if (garlicCounter > 0) {
                    let garlic: Plant = new Garlic("carrot", carrotPrice);
                    console.log("you want to plant a carrot");
                    garlic.grow();
                    garlicCounter--;
                    let garlicStack: HTMLDivElement = <HTMLDivElement>document.getElementById("carrotCounter");
                    garlicStack.innerHTML = carrotCounter.toString();
                    break;
                }
            case "salad1":
                if (saladCounter > 0) {
                    let salad: Plant = new Salad("carrot", carrotPrice);
                    console.log("you want to plant a salad");
                    salad.grow();
                    saladCounter--;
                    let saladStack: HTMLDivElement = <HTMLDivElement>document.getElementById("carrotCounter");
                    saladStack.innerHTML = carrotCounter.toString();
                    break;
                }
            case "potato1":
                if (potatoCounter > 0) {
                    let potato: Plant = new Potato("carrot", carrotPrice);
                    console.log("you want to plant a potato");
                    potato.grow();
                    potatoCounter--;
                    let potatoStack: HTMLDivElement = <HTMLDivElement>document.getElementById("carrotCounter");
                    potatoStack.innerHTML = carrotCounter.toString();
                    break;
                }
            case "dung1":
                if (dungCounter > 0) {
                    let dung: Product = new Dung("carrot", carrotPrice);
                    console.log("you want to use dung");
                    //dung.dungPlant();
                    dungCounter--;
                    let dungStack: HTMLDivElement = <HTMLDivElement>document.getElementById("carrotCounter");
                    dungStack.innerHTML = carrotCounter.toString();
                    break;
                }
            case "pesticide1":
                if (pesticideCounter > 0) {
                    let pesticide: Product = new Pesticide("carrot", carrotPrice);
                    console.log("you want to use pesticide");
                    // pesticide.fightPest();
                    pesticideCounter--;
                    let pesticideStack: HTMLDivElement = <HTMLDivElement>document.getElementById("carrotCounter");
                    pesticideStack.innerHTML = carrotCounter.toString();
                    break;
                }
            case "water":
                console.log("you want to water the plant");
                //Plant.waterPlant();
                break;
        }
    }




}
