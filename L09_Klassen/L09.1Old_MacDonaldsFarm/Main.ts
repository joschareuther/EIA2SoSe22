namespace OldMacDonaldsFarm {
    window.addEventListener("load", handleLoad);

    export let Animals: string = [];

    let gras: number = 6;
    let corn: number = 7;
    let meat: number = 4;
    let apple: number = 9;

    handleLoad(_event: Event): void {
        let cow: Animal = new Animal("cow",gras, "Moww"),
        let chicken: Animal = new Animal("chicken", corn, "Gack"),
        let dog: Animal = new Animal("dog", meat, "Woof"),
        let pig: Animal = new Animal("pig", apple, "Oink")

        Animals.push

    }

}