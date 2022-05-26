namespace OldMacDonaldsFarm {
    export let gras: number;
    export let corn: number;
    export let meat: number;
    export let apple: number;

    window.addEventListener("load", handleLoad);

    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let cow: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Cow");
        let chicken: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Chicken");
        let dog: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Dog");
        let pig: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Pig");

        //Male Tiere
        let cowcanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Cow");
        if (!cowcanvas)
            return;
        crc2 = <CanvasRenderingContext2D>cowcanvas.getContext("2d");

        crc2.save();
        crc2.translate(0, 0);
        crc2.beginPath();
        crc2.arc(100, 80, 40, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();

        crc2.fillStyle = "brown";
        crc2.fill();

        crc2.fillStyle = "black";
        crc2.fillRect(110, 65, 8, 8);
        crc2.fillRect(80, 65, 8, 8);
        crc2.fillRect(95, 85, 8, 15);

        let chickencanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Chicken");
        if (!chickencanvas)
            return;
        crc2 = <CanvasRenderingContext2D>chickencanvas.getContext("2d");

        crc2.save();
        crc2.translate(0, 0);
        crc2.beginPath();
        crc2.arc(100, 80, 40, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();

        crc2.fillStyle = "white";
        crc2.fill();

        crc2.fillStyle = "red";
        crc2.fillRect(110, 65, 8, 8);
        crc2.fillRect(80, 65, 8, 8);
        crc2.fillRect(95, 85, 8, 15);

        let dogcanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Dog");
        if (!dogcanvas)
            return;
        crc2 = <CanvasRenderingContext2D>dogcanvas.getContext("2d");

        crc2.save();
        crc2.translate(0, 0);
        crc2.beginPath();
        crc2.arc(100, 80, 40, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();

        crc2.fillStyle = "orange";
        crc2.fill();

        crc2.fillStyle = "bisque";
        crc2.fillRect(110, 65, 8, 8);
        crc2.fillRect(80, 65, 8, 8);
        crc2.fillRect(95, 85, 8, 15);

        let pigcanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("Pig");
        if (!pigcanvas)
            return;
        crc2 = <CanvasRenderingContext2D>pigcanvas.getContext("2d");

        crc2.save();
        crc2.translate(0, 0);
        crc2.beginPath();
        crc2.arc(100, 80, 40, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();

        crc2.fillStyle = "pink";
        crc2.fill();

        crc2.fillStyle = "white";
        crc2.fillRect(110, 65, 8, 8);
        crc2.fillRect(80, 65, 8, 8);
        crc2.fillRect(95, 85, 8, 15);

        //Futtervorrat
        let grasstorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("grasstorage");
        let cornstorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("cornstorage");
        let meatstorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("meatstorage");
        let applestorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("applestorage");

        gras = 6;
        grasstorage.innerHTML = String(gras);
        corn = 7;
        cornstorage.innerHTML = String(corn);
        meat = 4;
        meatstorage.innerHTML = String(meat);
        apple = 8;
        applestorage.innerHTML = String(apple);


        //neue Tiere
        let newCow: Animal = new Animal("cow", "gras", "Moww");
        let newChicken: Animal = new Animal("chicken", "corn", "Gack");
        let newDog: Animal = new Animal("dog", "meat", "Woof");
        let newPig: Animal = new Animal("pig", "apple", "Oink");

        //Alerts
        cow.addEventListener("click", coweatandsing);
        function coweatandsing(): void {
            newCow.eat();
            newCow.sing();
            grasstorage.innerHTML = String(gras);
        }

        chicken.addEventListener("click", chickeneatandsing);
        function chickeneatandsing(): void {
            newChicken.eat();
            newChicken.sing();
            cornstorage.innerHTML = String(corn);
        }

        dog.addEventListener("click", dogeatandsing);
        function dogeatandsing(): void {
            newDog.eat();
            newDog.sing();
            meatstorage.innerHTML = String(meat);
        }

        pig.addEventListener("click", pigeatandsing);
        function pigeatandsing(): void {
            newPig.eat();
            newPig.sing();
            applestorage.innerHTML = String(apple);
        }

        
    }
}