var L10_OldMacDonaldsFarm;
(function (L10_OldMacDonaldsFarm) {
    class Chicken extends L10_OldMacDonaldsFarm.Animal {
        constructor(_amount) {
            super("chicken", "corn", 1, "Gack");
        }
        doSpecialAction() {
            console.log("increase apple");
            applestorage.innerHTML = String(L10_OldMacDonaldsFarm.apple);
            L10_OldMacDonaldsFarm.apple += 2;
        }
        draw() {
            console.log("draw Chicken");
            let chickencanvas = document.getElementById("Chicken");
            if (!chickencanvas)
                return;
            L10_OldMacDonaldsFarm.crc2 = chickencanvas.getContext("2d");
            L10_OldMacDonaldsFarm.crc2.save();
            L10_OldMacDonaldsFarm.crc2.translate(0, 0);
            L10_OldMacDonaldsFarm.crc2.beginPath();
            L10_OldMacDonaldsFarm.crc2.arc(100, 80, 40, 0, 2 * Math.PI);
            L10_OldMacDonaldsFarm.crc2.closePath();
            L10_OldMacDonaldsFarm.crc2.stroke();
            L10_OldMacDonaldsFarm.crc2.fillStyle = "bisque";
            L10_OldMacDonaldsFarm.crc2.fill();
            L10_OldMacDonaldsFarm.crc2.fillStyle = "black";
            L10_OldMacDonaldsFarm.crc2.fillRect(110, 65, 8, 8);
            L10_OldMacDonaldsFarm.crc2.fillRect(80, 65, 8, 8);
            L10_OldMacDonaldsFarm.crc2.fillStyle = "white";
            L10_OldMacDonaldsFarm.crc2.fillRect(110, 65, 3, 4);
            L10_OldMacDonaldsFarm.crc2.fillRect(80, 65, 3, 4);
            L10_OldMacDonaldsFarm.crc2.fillStyle = "brown";
            L10_OldMacDonaldsFarm.crc2.fillRect(95, 85, 8, 15);
        }
    }
    L10_OldMacDonaldsFarm.Chicken = Chicken;
})(L10_OldMacDonaldsFarm || (L10_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Chicken.js.map