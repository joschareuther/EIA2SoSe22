var Greet;
(function (Greet) {
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let input = document.querySelector("input");
        if (!input)
            return;
        console.log(input);
        input.addEventListener("change", hndChange);
        document.addEventListener("greet", hndGreet);
    }
    function hndChange(_event) {
        console.log(_event);
        // test if value == "Hello"
        let customEvent = new CustomEvent("greet", { bubbles: true });
        _event.target?.dispatchEvent(customEvent);
    }
    function hndGreet(_event) {
        let target = _event.target;
        console.log("Greeted with", target.value);
    }
})(Greet || (Greet = {}));
//# sourceMappingURL=GreetingScript.js.map