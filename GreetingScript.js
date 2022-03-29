var Greet;
(function (Greet) {
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let input = document.querySelector("input");
        if (!input)
            return;
        console.log(input);
        input.addEventListener("change", hndChange);
    }
    function hndChange(_event) {
        console.log(_event);
        //test if value == "Hello"
        let customEvent = new CustomEvent("greet", { bubbles: true });
        _event.target.dispatchEvent(customEvent);
    }
})(Greet || (Greet = {}));
//# sourceMappingURL=GreetingScript.js.map