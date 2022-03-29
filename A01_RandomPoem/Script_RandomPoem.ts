namespace Random_Poem
let subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let prädikat: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let object: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];


for (let index: number = 5; index >= 0; index--) {
    let firstVerse: string = getVerse({ _subject: subject, _prädikat: prädikat, _object: object });
    console.log(firstVerse);
    
}

function getVerse ({ _subject, _prädikat, _object }: { _subject: string[]; _prädikat: string[]; _object: string; }): string {
    
   
    let subnum: number = Math.floor(Math.random() * _subject.length);
    let remsub: string[] = subject.splice(subnum, 1);


    let pränum: number = Math.floor(Math.random() * _prädikat.length);
    let remprä: string[] = prädikat.splice(pränum, 1);


    let objnum: number = Math.floor(Math.random() * _object.length);
    let remobj: string[] = object.splice(objnum, 1);
   

    let verse: string = remsub[0] + " " + remprä[0] + " " + remobj[0];
    return verse;
}