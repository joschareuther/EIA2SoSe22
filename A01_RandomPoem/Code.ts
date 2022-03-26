namespace RandomPoem {
    let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikat: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    for (let index: number = 5; index >= 1; index--) {
        let firstVerse: string = getVerse(subjects, praedikat, objects);
        console.log(firstVerse);
    }

    function getVerse(_subjects: string[], _praedikat: string[], _objects: string[]): string {

        //number subjects
        let subnum: number = Math.floor(Math.random() * _subjects.length);
        // zufall subject
        let remsub: string[] = subjects.splice(subnum, 1);


        //number praedikat
        let praenum: number = Math.floor(Math.random() * _praedikat.length);
        // zufall praedikat
        let remprae: string[] = praedikat.splice(praenum, 1);


        //number objects
        let objnum: number = Math.floor(Math.random() * _objects.length);
        // zufall object
        let remobj: string[] = objects.splice(objnum, 1);


        let verse: string = remsub[0] + " " + remprae[0] + " " + remobj[0];
        return verse;
    }
}

/////with the help of @ronja.burger////siehe https://github.com/Ronja-Burger/EIA2/blob/main/01.1_Zufallsgedicht/RandomPoemScript.ts ////////