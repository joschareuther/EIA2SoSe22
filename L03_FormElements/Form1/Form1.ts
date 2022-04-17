namespace Form {
    window.addEventListener("load", hndleLoad);
    let slider: HTMLInputElement;

    function hndleLoad(_event: Event): void {
        slider = <HTMLInputElement>document.getElementById("slider");
        slider.addEventListener("change", handleChange);
        console.log(slider);
    }


    function handleChange(_event: Event): void {
        //console.log(slider.value);
        let formdata: FormData = new FormData(document.forms[0]);
        
        for (let entry of formdata.entries())
        console.log(entry);
        
    }
}