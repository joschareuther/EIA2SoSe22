namespace UIScribble {
    window.addEventListener("load", handleLoad);
    var _xposition: string =  _event.clientX; 
    var _yposition: string = _event.clientY;
    function handleLoad(_event: Event): void {
    //dokument-EventListener(Mousemove, Click, Keyup)//
    document.addEventListener("mousemove", setInfobox, myFunction(_xposition, yposition));
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
    let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector(".span");
            //display mouse position and event's target in splan-element//
            //set style attributes
    span.style.top = _event.clientY + 10 + "px";
    span.style.left =  _event.clientX + 6 + "px";
    }
    function myFunction (clientX: string, clientY: string){
        document.querySelector("#X-Position").innerHTML = clientX;
        document.querySelector("#Y-Position").innerHTML = clientY;
    }
    function logInfo(_event: Event): void {
    console.log(MouseEvent, EventTarget, EventSource);
    }
}
