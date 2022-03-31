namespace UIScribble {
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
    document.querySelector(".div1").addEventListener("click", logInfo);
    document.querySelector(".div1").addEventListener("keyup", logInfo);
    document.querySelector(".div2").addEventListener("click", logInfo);
    document.querySelector(".div2").addEventListener("keyup", logInfo);
    }

    function setInfobox(_event: MouseEvent): void {
        //display mouse position and event's target in splan-element
        console.log(_event.clientX);
    }

    function logInfo(_event: Event): void {
    console.log("target");
    }
}