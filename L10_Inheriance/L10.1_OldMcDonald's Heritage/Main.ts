namespace L10_OldMacDonaldsFarm {
    export let gras: number;
    export let corn: number;
    export let meat: number;
    export let apple: number;

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let cow: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Cow");
        let chicken: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Chicken");
        let dog: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Dog");
        let pig: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Pig");

        let action: HTMLButtonElement = <HTMLButtonElement>document.getElementById("actionbutton");

        //Futtervorrat
        let grasstorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("grasstorage");
        let cornstorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("cornstorage");
        let meatstorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("meatstorage");
        let applestorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("applestorage");

        gras = 12;
        grasstorage.innerHTML = String(gras);
        corn = 7;
        cornstorage.innerHTML = String(corn);
        meat = 11;
        meatstorage.innerHTML = String(meat);
        apple = 16;
        applestorage.innerHTML = String(apple);


        //neue Tiere
        let newCow: Animal = new Cow("cow", "gras", 2, "Moww");
        let newChicken: Animal = new Chicken("chicken", "corn", 1, "Gack");
        let newDog: Animal = new Dog("dog", "meat", 2, "Woof");
        let newPig: Animal = new Pig("pig", "apple", 4, "Oink");

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
                corn += 2;
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
            meatstorage.innerHTML = String(meat);

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
            }
        }
    }
}

