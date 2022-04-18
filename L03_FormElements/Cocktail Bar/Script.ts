namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector ("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }
    function handleChange(_event: Event): void {
        //console.log (_event);
        //let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        //console.log(drink.value);

        //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        //console.log(inputs);

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#checkout");
        order.innerHTML = "";

        let formData: FormData = new FormData (document.forms[0]);
        console.log(formData);
        for (let entry of formData.entries()) {
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value=" + entry[1] + "]");
            let price: number = Number(item.getAttribute("price")); 

            order.innerHTML += item.name + " € " + price;
    }

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string =  (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}}