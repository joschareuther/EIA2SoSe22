var RandomPoem;
(function (RandomPoem) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikat = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    for (let index = 5; index >= 1; index--) {
        let firstVerse = getVerse(subjects, praedikat, objects);
        console.log(firstVerse);
    }
    function getVerse(_subjects, _praedikat, _objects) {
        //number subjects
        let subnum = Math.floor(Math.random() * _subjects.length);
        // zufall subject
        let remsub = subjects.splice(subnum, 1);
        //number praedikat
        let praenum = Math.floor(Math.random() * _praedikat.length);
        // zufall praedikat
        let remprae = praedikat.splice(praenum, 1);
        //number objects
        let objnum = Math.floor(Math.random() * _objects.length);
        // zufall object
        let remobj = objects.splice(objnum, 1);
        let verse = remsub[0] + " " + remprae[0] + " " + remobj[0];
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
/////with the help of @ronja.burger////siehe https://github.com/Ronja-Burger/EIA2/blob/main/01.1_Zufallsgedicht/RandomPoemScript.ts ////////
//# sourceMappingURL=Code.js.map