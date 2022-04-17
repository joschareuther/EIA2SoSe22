window.addEventListener("load", handleLoad);
let spielstart = document.querySelector("#Startbutton");
function handleLoad(_event) {
    console.log("Start");
    let slider = document.querySelector("input#cardsize");
    slider.addEventListener("change", handleChange);
    console.log(slider);
}
;
//# sourceMappingURL=MemoryScript.js.map