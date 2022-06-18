var L10_OldMacDonaldsFarm;
(function (L10_OldMacDonaldsFarm) {
    class Cow extends L10_OldMacDonaldsFarm.Animal {
        constructor(_amount) {
            super("cow", "gras", 2, "Moww");
        }
        doSpecialAction() {
            console.log("increase corn");
            cornstorage.innerHTML = String(L10_OldMacDonaldsFarm.corn);
            L10_OldMacDonaldsFarm.corn += 2;
        }
        draw() {
            console.log("draw Cow");
            let cowcanvas = document.getElementById("Cow");
            if (!cowcanvas)
                return;
            L10_OldMacDonaldsFarm.crc2 = cowcanvas.getContext("2d");
            L10_OldMacDonaldsFarm.crc2.save();
            L10_OldMacDonaldsFarm.crc2.translate(0, 0);
            L10_OldMacDonaldsFarm.crc2.beginPath();
            L10_OldMacDonaldsFarm.crc2.arc(100, 80, 40, 0, 2 * Math.PI);
            L10_OldMacDonaldsFarm.crc2.closePath();
            L10_OldMacDonaldsFarm.crc2.stroke();
            L10_OldMacDonaldsFarm.crc2.fillStyle = "brown";
            L10_OldMacDonaldsFarm.crc2.fill();
            L10_OldMacDonaldsFarm.crc2.beginPath();
            L10_OldMacDonaldsFarm.crc2.arc(99, 100, 10, 30, 1.5 * Math.PI);
            L10_OldMacDonaldsFarm.crc2.moveTo(130, 100);
            L10_OldMacDonaldsFarm.crc2.stroke();
            L10_OldMacDonaldsFarm.crc2.fill();
            L10_OldMacDonaldsFarm.crc2.fillStyle = "black";
            L10_OldMacDonaldsFarm.crc2.fillRect(110, 65, 8, 8);
            L10_OldMacDonaldsFarm.crc2.fillRect(80, 65, 8, 8);
            L10_OldMacDonaldsFarm.crc2.fillRect(90, 85, 18, 15);
            L10_OldMacDonaldsFarm.crc2.fillStyle = "white";
            L10_OldMacDonaldsFarm.crc2.fillRect(110, 65, 3, 4);
            L10_OldMacDonaldsFarm.crc2.fillRect(80, 65, 3, 4);
        }
    }
    L10_OldMacDonaldsFarm.Cow = Cow;
})(L10_OldMacDonaldsFarm || (L10_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Cow.js.map