var L10_OldMacDonaldsFarm;
(function (L10_OldMacDonaldsFarm) {
    class Dog extends L10_OldMacDonaldsFarm.Animal {
        doSpecialAction() {
            console.log("increase gras");
            L10_OldMacDonaldsFarm.gras += 2;
        }
        draw() {
            console.log("draw Dog");
            let dogcanvas = document.getElementById("Dog");
            if (!dogcanvas)
                return;
            L10_OldMacDonaldsFarm.crc2 = dogcanvas.getContext("2d");
            L10_OldMacDonaldsFarm.crc2.save();
            L10_OldMacDonaldsFarm.crc2.translate(0, 0);
            L10_OldMacDonaldsFarm.crc2.beginPath();
            L10_OldMacDonaldsFarm.crc2.arc(100, 80, 40, 0, 2 * Math.PI);
            L10_OldMacDonaldsFarm.crc2.closePath();
            L10_OldMacDonaldsFarm.crc2.stroke();
            L10_OldMacDonaldsFarm.crc2.fillStyle = "orange";
            L10_OldMacDonaldsFarm.crc2.fill();
            L10_OldMacDonaldsFarm.crc2.fillStyle = "black";
            L10_OldMacDonaldsFarm.crc2.fillRect(110, 65, 8, 8);
            L10_OldMacDonaldsFarm.crc2.fillRect(80, 65, 8, 8);
            L10_OldMacDonaldsFarm.crc2.fillStyle = "white";
            L10_OldMacDonaldsFarm.crc2.fillRect(110, 65, 3, 4);
            L10_OldMacDonaldsFarm.crc2.fillRect(80, 65, 3, 4);
            L10_OldMacDonaldsFarm.crc2.fillStyle = "brown";
            L10_OldMacDonaldsFarm.crc2.fillRect(90, 85, 18, 15);
            L10_OldMacDonaldsFarm.crc2.fillRect(97, 95, 4, 13);
            L10_OldMacDonaldsFarm.crc2.beginPath();
            L10_OldMacDonaldsFarm.crc2.moveTo(99, 106);
            L10_OldMacDonaldsFarm.crc2.lineTo(108, 110);
            L10_OldMacDonaldsFarm.crc2.moveTo(99, 105);
            L10_OldMacDonaldsFarm.crc2.lineTo(90, 110);
            L10_OldMacDonaldsFarm.crc2.stroke();
        }
    }
    L10_OldMacDonaldsFarm.Dog = Dog;
})(L10_OldMacDonaldsFarm || (L10_OldMacDonaldsFarm = {}));
//# sourceMappingURL=Dog.js.map