namespace EventInspector {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event: Event): void {
    //dokument-EventListener(Mousemove, Click, Keyup)//
    document.addEventListener("mousemove", setInfobox);
        document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
    //body-EventListener(Mousemove, Click, Keyup)//
    document.body.addEventListener("click", logInfo);
    document.body.addEventListener("keyup", logInfo);
    //div-EventListener(Mousemove, Click, Keyup)//
    document.querySelector(".div0").addEventListener("click", logInfo);
    document.querySelector(".div0").addEventListener("keyup", logInfo);
    document.querySelector(".div1").addEventListener("click", logInfo);
    document.querySelector(".div1").addEventListener("keyup", logInfo);
    }

    function setInfobox(_event: MouseEvent): void {
    let span: HTMLSpanElement = document.querySelector(".span");
            //display mouse position and event's target in splan-element//
            //set style attributes
    span.innerHTML = "x: " + _event.clientX + " y: " + _event.clientY + " target, " + _event.target;
    span.style.top = _event.clientY + 10 + "px";
    span.style.left =  _event.clientX + 6 + "px";
    }
    function logInfo(_event: Event): void {
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event.type);
    console.log(_event.eventPhase);
    }
}
