namespace garden {

    export abstract class Plant extends Product {

        field: HTMLDivElement;
        growthTime: number;
        waterNeedTime: number = 60;
        dungNeedTime: number = 120;
        maxCareTime: number = 30;
        currentCareTime: number = 0;


        grow(): void {
            //Bildchen sollen größer werden
        }

        waterPlant(): void {
            //Wasser dragOver?
        }

        dungPlant(): void {
            //Dünger dragOver?
        }

        cropPlant(): void {
            //Feld leer
            //capital + price -> capital auch als Eigenschaft?
        }

        die(): void {
            //Feld leer
            // extra Bildchen anzeigen?
        }

        fightPest(): void {
            // pesticide dragOver?
        }
    } 
}