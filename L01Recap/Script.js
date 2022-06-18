var Cows;
(function (Cows) {
    let nums = [2, 6, 5];
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        let result = createCall("m", nums[i]);
        results.push(result);
    }
    console.log(results);
    function createCall(_start, _length) {
        for (let k = _length; k > 0; k--) {
            if (k == 1 || k == _length / 2)
                _start += "h";
            _start += "u";
        }
        return _start;
    }
})(Cows || (Cows = {}));
let v = 1;
v = v + 1;
console.log(v);
// tslint:disable-next-line: typedef
let a = [7, true, "hello"];
a[4] = [101, 102];
console.log(a[2]);
// tslint:disable-next-line: typedef
let s = { "zahl": 7, "wahr": true, text: "Hallo" };
s[4] = [101, 102];
console.log(s);
let o = { "wert1": true, "wert2": false };
console.log(o);
let vector = { x: 12.4, y: -7.2, meaning: "Ortsvektor" };
console.log(vector);
let students = [];
students.push({ name: "Big Brain", matrikel: 123456, grades: { "EIA1": 1.3, "EIA2": 1.0 } });
students.push({ name: "Biggie", matrikel: 123457, grades: { "EIA1": 1.5, "EIA2": 3.6 } });
students.push({ name: "2Pac", matrikel: 123458, grades: { "EIA1": 3.3, "EIA2": 3.5 } });
console.log(students[2]);
let variable1 = 7;
// tslint:disable-next-line: typedef
let variable2 = variable1;
console.log(variable1);
console.log(variable2);
//# sourceMappingURL=Script.js.map