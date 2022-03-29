let subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let prädikat = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
for (let index = 5; index >= 0; index--) {
    let firstVerse = getVerse({ _subject: subject, _prädikat: prädikat, _object: object });
    console.log(firstVerse);
}
function getVerse({ _subject, _prädikat, _object }) {
    let subnum = Math.floor(Math.random() * _subject.length);
    let remsub = subject.splice(subnum, 1);
    let pränum = Math.floor(Math.random() * _prädikat.length);
    let remprä = prädikat.splice(pränum, 1);
    let objnum = Math.floor(Math.random() * _object.length);
    let remobj = object.splice(objnum, 1);
    let verse = remsub[0] + " " + remprä[0] + " " + remobj[0];
    return verse;
}
//# sourceMappingURL=Script_RandomPoem.js.map