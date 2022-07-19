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

        // EVENTLISTENER on vegetables in market
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
                field.classList.add("field");                                               //add field to 
                rows.appendChild(field);                                                    // parent field to row
                let state: HTMLDivElement = <HTMLDivElement>document.createElement("div");  //declaration of state and create new div elemtn for it
                state.classList.add("pbar");                                                //add process bar to state
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

            // show entry in div
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

            changePrices();
            setInterval(changePrices, 10000);
        }
    }
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

        //buy prices
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

    //functions to buy vegetables
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

}