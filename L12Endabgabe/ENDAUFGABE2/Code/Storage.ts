namespace garden {
    export class Storage {

        capital: number;
        capitalDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("capital");



        // read formdata
        readFormData2(): void {
            let formdata: FormData = new FormData(document.forms[0]);
            for (let entry of formdata.entries()) {
                case "Startcapital":
                     this.capital = Number(entry[1]);
            }
            // show entry in div
            this.capitalDiv.innerHTML = "TOTAL: " + this.capital.toString();
        }


        plantPlant(): void {
            //drag'n'drop?
        }

    }
}