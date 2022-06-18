namespace L10_OldMacDonaldsFarm {
    export let gras: number;
    export let corn: number;
    export let meat: number;
    export let apple: number;
    export let animals: Animal[] = [];


    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let cow: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Cow");
        let chicken: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Chicken");
        let dog: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Dog");
        let pig: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Pig");

        
    //Futtervorrat
        let grasstorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("grasstorage");
        let cornstorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("cornstorage");
        let meatstorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("meatstorage");
        let applestorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("applestorage"); 

        let action: HTMLButtonElement = <HTMLButtonElement>document.getElementById("actionbutton");


        gras = 12;
        grasstorage.innerHTML = String(gras);
        corn = 7;
        cornstorage.innerHTML = String(corn);
        meat = 11;
        meatstorage.innerHTML = String(meat);
        apple = 16;
        applestorage.innerHTML = String(apple);


        //neue Tiere
        let newCow: Animal = new Cow(2);
        let newChicken: Animal = new Chicken(1);
        let newDog: Animal = new Dog(2);
        let newPig: Animal = new Pig(4);

        animals.push(newCow);


        for (let animal of animals) {
            animal.draw();
            animal.eat();
            animal.sing();
            animal.doSpecialAction();
        }

        //Male Tiere
        newCow.draw();
        newChicken.draw();
        newDog.draw();
        newPig.draw();

        //Alerts
        cow.addEventListener("click", coweatandsing);
        function coweatandsing(): void {
            newCow.eat();
            newCow.sing();
            grasstorage.innerHTML = String(gras);

            action.addEventListener("click", doSpecialAction);
            function doSpecialAction(): void {
                console.log("SpecialActionCow");
                newCow.doSpecialAction();
            }
        }

        chicken.addEventListener("click", chickeneatandsing);
        function chickeneatandsing(): void {
            newChicken.eat();
            newChicken.sing();
            cornstorage.innerHTML = String(corn);

            action.addEventListener("click", doSpecialAction);
            function doSpecialAction(): void {
                console.log("SpecialActionChicken");
                newChicken.doSpecialAction();


            }
        }

        dog.addEventListener("click", dogeatandsing);
        function dogeatandsing(): void {
            newDog.eat();
            newDog.sing();

            action.addEventListener("click", doSpecialAction);
            function doSpecialAction(): void {
                console.log("SpecialActionDog");
                newDog.doSpecialAction();
            }
        }

        pig.addEventListener("click", pigeatandsing);
        function pigeatandsing(): void {
            newPig.eat();
            newPig.sing();
            applestorage.innerHTML = String(apple);

            action.addEventListener("click", doSpecialAction);
            function doSpecialAction(): void {
                console.log("SpecialActionPig");
                newPig.doSpecialAction();
                meat += 2;
            }
        }
    }
}

