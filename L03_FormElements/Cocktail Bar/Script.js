var L03_CocktailBar;
(function (L03_CocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let form = document.querySelector("div#form");
        let slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }
    function handleChange(_event) {
        //console.log (_event);
        //let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        //console.log(drink.value);
        //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        //console.log(inputs);
        let order = document.querySelector("div#checkout");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        console.log(formData);
        for (let entry of formData.entries()) {
            let item = document.querySelector("[value=" + entry[1] + "]");
            let price = Number(item.getAttribute("price"));
            order.innerHTML += item.name + " € " + price;
        }
        //function displayAmount(_event: Event): void {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=Script.js.map