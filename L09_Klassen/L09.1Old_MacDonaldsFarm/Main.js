var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let cow = document.getElementById("Cow");
        let chicken = document.getElementById("Chicken");
        let dog = document.getElementById("Dog");
        let pig = document.getElementById("Pig");
        //Male Tiere
        let cowcanvas = document.getElementById("Cow");
        if (!cowcanvas)
            return;
        crc2 = cowcanvas.getContext("2d");
        crc2.save();
        crc2.translate(0, 0);
        crc2.beginPath();
        crc2.arc(100, 80, 40, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "brown";
        crc2.fill();
        crc2.fillStyle = "black";
        crc2.fillRect(110, 65, 8, 8);
        crc2.fillRect(80, 65, 8, 8);
        crc2.fillRect(95, 85, 8, 15);
        let chickencanvas = document.getElementById("Chicken");
        if (!chickencanvas)
            return;
        crc2 = chickencanvas.getContext("2d");
        crc2.save();
        crc2.translate(0, 0);
        crc2.beginPath();
        crc2.arc(100, 80, 40, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.fillStyle = "red";
        crc2.fillRect(110, 65, 8, 8);
        crc2.fillRect(80, 65, 8, 8);
        crc2.fillRect(95, 85, 8, 15);
        let dogcanvas = document.getElementById("Dog");
        if (!dogcanvas)
            return;
        crc2 = dogcanvas.getContext("2d");
        crc2.save();
        crc2.translate(0, 0);
        crc2.beginPath();
        crc2.arc(100, 80, 40, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.fillStyle = "bisque";
        crc2.fillRect(110, 65, 8, 8);
        crc2.fillRect(80, 65, 8, 8);
        crc2.fillRect(95, 85, 8, 15);
        let pigcanvas = document.getElementById("Pig");
        if (!pigcanvas)
            return;
        crc2 = pigcanvas.getContext("2d");
        crc2.save();
        crc2.translate(0, 0);
        crc2.beginPath();
        crc2.arc(100, 80, 40, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "pink";
        crc2.fill();
        crc2.fillStyle = "white";
        crc2.fillRect(110, 65, 8, 8);
        crc2.fillRect(80, 65, 8, 8);
        crc2.fillRect(95, 85, 8, 15);
        //Futtervorrat
        let grasstorage = document.getElementById("grasstorage");
        let cornstorage = document.getElementById("cornstorage");
        let meatstorage = document.getElementById("meatstorage");
        let applestorage = document.getElementById("applestorage");
        OldMacDonaldsFarm.gras = 6;
        grasstorage.innerHTML = String(OldMacDonaldsFarm.gras);
        OldMacDonaldsFarm.corn = 7;
        cornstorage.innerHTML = String(OldMacDonaldsFarm.corn);
        OldMacDonaldsFarm.meat = 4;
        meatstorage.innerHTML = String(OldMacDonaldsFarm.meat);
        OldMacDonaldsFarm.apple = 8;
        applestorage.innerHTML = String(OldMacDonaldsFarm.apple);
        //neue Tiere
        let newCow = new OldMacDonaldsFarm.Animal("cow", "gras", "Moww");
        let newChicken = new OldMacDonaldsFarm.Animal("chicken", "corn", "Gack");
        let newDog = new OldMacDonaldsFarm.Animal("dog", "meat", "Woof");
        let newPig = new OldMacDonaldsFarm.Animal("pig", "apple", "Oink");
        //Alerts
        cow.addEventListener("click", coweatandsing);
        function coweatandsing() {
            newCow.eat();
            newCow.sing();
            grasstorage.innerHTML = String(OldMacDonaldsFarm.gras);
        }
        chicken.addEventListener("click", chickeneatandsing);
        function chickeneatandsing() {
            newChicken.eat();
            newChicken.sing();
            cornstorage.innerHTML = String(OldMacDonaldsFarm.corn);
        }
        dog.addEventListener("click", dogeatandsing);
        function dogeatandsing() {
            newDog.eat();
            newDog.sing();
            meatstorage.innerHTML = String(OldMacDonaldsFarm.meat);
        }
        pig.addEventListener("click", pigeatandsing);
        function pigeatandsing() {
            newPig.eat();
            newPig.sing();
            applestorage.innerHTML = String(OldMacDonaldsFarm.apple);
        }
    }
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=Main.js.map