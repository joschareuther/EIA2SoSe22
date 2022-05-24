namespace OldMacDonaldsFarm {

    export class Animal{
        species: string = [];
        food: string = [];
        sound: string = [];

        constructor(_species: string, _food: string, _sound: string){
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
        }

        eat(): void;
        sing(): void;
    }
}