var UIScribble;
(function (UIScribble) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
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
    function setInfobox(_event) {
        //display mouse position and event's target in splan-element
        console.log(_event.clientX);
    }
    function logInfo(_event) {
        console.log("target");
    }
})(UIScribble || (UIScribble = {}));
//# sourceMappingURL=A02.1Script.js.map