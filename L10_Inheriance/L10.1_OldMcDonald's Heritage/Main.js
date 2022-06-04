var L10_OldMacDonaldsFarm;
(function (L10_OldMacDonaldsFarm) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let cow = document.getElementById("Cow");
        let chicken = document.getElementById("Chicken");
        let dog = document.getElementById("Dog");
        let pig = document.getElementById("Pig");
        let action = document.getElementById("actionbutton");
        //Futtervorrat
        let grasstorage = document.getElementById("grasstorage");
        let cornstorage = document.getElementById("cornstorage");
        let meatstorage = document.getElementById("meatstorage");
        let applestorage = document.getElementById("applestorage");
        L10_OldMacDonaldsFarm.gras = 12;
        grasstorage.innerHTML = String(L10_OldMacDonaldsFarm.gras);
        L10_OldMacDonaldsFarm.corn = 7;
        cornstorage.innerHTML = String(L10_OldMacDonaldsFarm.corn);
        L10_OldMacDonaldsFarm.meat = 11;
        meatstorage.innerHTML = String(L10_OldMacDonaldsFarm.meat);
        L10_OldMacDonaldsFarm.apple = 16;
        applestorage.innerHTML = String(L10_OldMacDonaldsFarm.apple);
        //neue Tiere
        let newCow = new L10_OldMacDonaldsFarm.Cow("cow", "gras", 2, "Moww");
        let newChicken = new L10_OldMacDonaldsFarm.Chicken("chicken", "corn", 1, "Gack");
        let newDog = new L10_OldMacDonaldsFarm.Dog("dog", "meat", 2, "Woof");
        let newPig = new L10_OldMacDonaldsFarm.Pig("pig", "apple", 4, "Oink");
        //Male Tiere
        newCow.draw();
        newChicken.draw();
        newDog.draw();
        newPig.draw();
        //Alerts
        cow.addEventListener("click", coweatandsing);
        function coweatandsing() {
            newCow.eat();
            newCow.sing();
            grasstorage.innerHTML = String(L10_OldMacDonaldsFarm.gras);
            action.addEventListener("click", doSpecialAction);
            function doSpecialAction() {
                console.log("SpecialActionCow");
                newCow.doSpecialAction();
                L10_OldMacDonaldsFarm.corn += 2;
            }
        }
        chicken.addEventListener("click", chickeneatandsing);
        function chickeneatandsing() {
            newChicken.eat();
            newChicken.sing();
            cornstorage.innerHTML = String(L10_OldMacDonaldsFarm.corn);
            action.addEventListener("click", doSpecialAction);
            function doSpecialAction() {
                console.log("SpecialActionChicken");
                newChicken.doSpecialAction();
            }
        }
        dog.addEventListener("click", dogeatandsing);
        function dogeatandsing() {
            newDog.eat();
            newDog.sing();
            meatstorage.innerHTML = String(L10_OldMacDonaldsFarm.meat);
            action.addEventListener("click", doSpecialAction);
            function doSpecialAction() {
                console.log("SpecialActionDog");
                newDog.doSpecialAction();
            }
        }
        pig.addEventListener("click", pigeatandsing);
        function pigeatandsing() {
            newPig.eat();
            newPig.sing();
            applestorage.innerHTML = String(L10_OldMacDonaldsFarm.apple);
            action.addEventListener("click", doSpecialAction);
            function doSpecialAction() {
                console.log("SpecialActionPig");
                newPig.doSpecialAction();
            }
        }
    }
})(L10_OldMacDonaldsFarm || (L10_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Main.js.map