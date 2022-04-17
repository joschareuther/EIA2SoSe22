var Form;
(function (Form) {
    window.addEventListener("load", hndLoad);
    let slider;
    function hndLoad(_event) {
        slider = document.getElementById("slider");
        slider.addEventListener("change", hndChange);
        console.log(slider);
    }
    function hndChange(_event) {
        // console.log(slider.value);
        let formdata = new FormData(document.forms[0]);
        for (let entry of formdata.entries())
            console.log(entry);
    }
})(Form || (Form = {}));
//# sourceMappingURL=From.js.map