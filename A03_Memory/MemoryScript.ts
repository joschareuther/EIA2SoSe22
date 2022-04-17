window.addEventListener("load", handleLoad);
let spielstart: HTMLInputElement = <HTMLInputElement>document.querySelector("#Startbutton");

function handleLoad(_event: Event): void {
    console.log("Start");
    let slider = <HTMLInputElement>document.querySelector("input#cardsize");
    slider.addEventListener("change", handleChange);
    console.log(slider);
};


