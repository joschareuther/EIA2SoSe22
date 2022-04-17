var Form;
(function (Form) {
    window.addEventListener("load", hndleLoad);
    let slider;
    function hndleLoad(_event) {
        slider = document.getElementById("slider");
        slider.addEventListener("change", handleChange);
        console.log(slider);
    }
    function handleChange(_event) {
        //console.log(slider.value);
        let formdata = new FormData(document.forms[0]);
        for (let entry of formdata.entries())
            console.log(entry);
    }
})(Form || (Form = {}));
//# sourceMappingURL=Form1.js.map