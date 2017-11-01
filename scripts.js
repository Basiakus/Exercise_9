// --rozdział 9--
// zadanie 9.1 FUNKCJE
function triAngleArea(a, h) {
    if (a > 0 && h > 0) {
        return a * h / 2
    } else {
        console.log("Nieprawidłowe dane");
    }
}
console.log(triAngleArea(10, 6));

// zadanie 9.2 TABLICE

var femaleNames = ['Kasia', 'Basia', 'Zosia'];
var maleNames = ['Adam', 'Krzysztof', 'Paweł'];

var addNames = femaleNames.concat(maleNames);
console.log(addNames);
var newMan = 'Adam';
if (addNames.indexOf(newMan) === -1) {
    addNames.push(newMan);
    console.log(addNames);
} else {
    console.log("Imię: '" + newMan + "' jest już wypisany na tablicy");
}