namespace Greet {
    window.addEventListener("load", hndLoad);

    function hndLoad(_event: Event): void {
   let input:HTMLElement = document.querySelector("input");
   if (!input)
        return;

   console.log(input);
   input.addEventListener("change", hndChange);
    }
    
    function hndChange(_event: Event): void {
        console.log(_event);
        //test if value == "Hello"
        let customEvent: CustomEvent = new CustomEvent("greet", {bubbles: true});
        _event.target.dispatchEvent(customEvent);
    }
}