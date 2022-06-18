var L10_OldMacDonaldsFarm;
(function (L10_OldMacDonaldsFarm) {
    class Pig extends L10_OldMacDonaldsFarm.Animal {
        constructor(_amount) {
            super("pig", "apple", 4, "Oink");
        }
        doSpecialAction() {
            console.log("increase meat");
            meatstorage.innerHTML = String(L10_OldMacDonaldsFarm.meat);
            L10_OldMacDonaldsFarm.meat += 2;
        }
        draw() {
            console.log("draw Pig");
            let pigcanvas = document.getElementById("Pig");
            if (!pigcanvas)
                return;
            L10_OldMacDonaldsFarm.crc2 = pigcanvas.getContext("2d");
            L10_OldMacDonaldsFarm.crc2.save();
            L10_OldMacDonaldsFarm.crc2.translate(0, 0);
            L10_OldMacDonaldsFarm.crc2.beginPath();
            L10_OldMacDonaldsFarm.crc2.arc(100, 80, 40, 0, 2 * Math.PI);
            L10_OldMacDonaldsFarm.crc2.closePath();
            L10_OldMacDonaldsFarm.crc2.stroke();
            L10_OldMacDonaldsFarm.crc2.fillStyle = "pink";
            L10_OldMacDonaldsFarm.crc2.fill();
            L10_OldMacDonaldsFarm.crc2.beginPath();
            L10_OldMacDonaldsFarm.crc2.arc(98, 97, 13, 30, 1.5 * Math.PI);
            L10_OldMacDonaldsFarm.crc2.moveTo(130, 100);
            L10_OldMacDonaldsFarm.crc2.stroke();
            L10_OldMacDonaldsFarm.crc2.fill();
            L10_OldMacDonaldsFarm.crc2.fillStyle = "black";
            L10_OldMacDonaldsFarm.crc2.fillRect(110, 65, 8, 8);
            L10_OldMacDonaldsFarm.crc2.fillRect(80, 65, 8, 8);
            L10_OldMacDonaldsFarm.crc2.fillStyle = "white";
            L10_OldMacDonaldsFarm.crc2.fillRect(110, 65, 3, 4);
            L10_OldMacDonaldsFarm.crc2.fillRect(80, 65, 3, 4);
            L10_OldMacDonaldsFarm.crc2.fillStyle = "black";
            L10_OldMacDonaldsFarm.crc2.fillRect(100, 95, 8, 8);
            L10_OldMacDonaldsFarm.crc2.fillRect(90, 95, 8, 8);
        }
    }
    L10_OldMacDonaldsFarm.Pig = Pig;
})(L10_OldMacDonaldsFarm || (L10_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Pig.js.map