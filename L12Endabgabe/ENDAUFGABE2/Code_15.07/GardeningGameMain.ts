namespace garden {
    export let capital: number;
    export let maxPrice: number;

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
        carrot.addEventListener("click", buyCarrot);
        eggplant.addEventListener("click", buyEggplant);
        garlic.addEventListener("click", buyGarlic);
        salad.addEventListener("click", buySalad);
        potato.addEventListener("click", buyPotato);
        dung.addEventListener("click", buyDung);
        pesticide.addEventListener("click", buyPesticide);

        capital = 0;
        console.log("Kapital nach load:" + capital);
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
                    console.log("maxPrice-Formdata:" + maxPrice);
                    break;
                case "Startcapital":
                    capital = Number(entry[1]);
                    console.log("Kapital:" + capital);
            }
            // show entry in div
            let capitalDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("capital");
            capitalDiv.innerHTML = "CAPITAL" + " " + capital.toString() + "$";
        }
    }

    //functions to buy vegetables
    function buyCarrot(): void {
        console.log("buyCarrot");
        let carrot: Plant = new Carrot("carrot", 1);
        carrot.buyProduct();
    }

    function buyEggplant(): void {
        console.log("buyEggplant");
        let eggplant: Plant = new Eggplant("eggplant", 2);
        eggplant.buyProduct();
    }

    function buyGarlic(): void {
        console.log("buyGarlic");
        let garlic: Plant = new Garlic("garlic", 8);
        garlic.buyProduct();
    }

    function buySalad(): void {
        console.log("buySalad");
        let salad: Plant = new Salad("salad", 3);
        salad.buyProduct();
    }

    function buyPotato(): void {
        console.log("buyPotato");
        let potato: Plant = new Potato("potato", 2);
        potato.buyProduct();
    }

    function buyDung(): void {
        console.log("buyDung");
        let dung: Product = new Dung("dung", 4);
        dung.buyProduct();
    }

    function buyPesticide(): void {
        console.log("buyPesticide");
        let pesticide: Product = new Pesticide("pesticide", 5);
        pesticide.buyProduct();
    }


}
