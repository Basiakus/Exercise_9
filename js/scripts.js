// --rozdział 9--

/*
// ---zadanie 9.1 FUNKCJE---

function triAngleArea(a, h) {
    if (a > 0 && h > 0) {
        return a * h / 2
    } else if (a <= 0 || h <= 0) {
       return "Podane wartości muszą być większe od 0"
    } else {
        return "Nieprawidłowe dane";
    }
}
console.log(triAngleArea(0, 7));
console.log(triAngleArea(2, 10));
console.log(triAngleArea(22, 0))
*/



/*
// ---zadanie 9.2 TABLICE---

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
*/



/*
//---Zadanie 9.3 łańcuchy znaków / triceratops---

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
console.log(text);
var dinozaur = 'triceratops';
var bigDinozaur = dinozaur.toUpperCase();
console.log(bigDinozaur);
var dinoReplace = text.replace('Velociraptor', bigDinozaur);
console.log(dinoReplace);
console.log(dinoReplace.length / 2)

var shortText = dinoReplace.slice(0, dinoReplace.length / 2);
console.log(shortText);
console.log(shortText.length);
*/


//---Zadanie 9.4 choinka---
function drawTree(row) {

    for (var i = 0; i < row; i++) {
        var star = '';
        for (var j = -1; j < i; j++) {
            star += '*';
        }
        console.log(star);
    }
}
drawTree(4);

/*
var nav = document.getElementById('nav');
console.log(nav.nextElementSibling);
var newH1 = document.createElement('h1');
console.log('h1');
newH1.innerHTML = "text h1 utworzony poprzez element.innerHTML";
console.log(newH1);
nav.appendChild(newH1);
nav.className += " addClass";
console.log(nav.className);
*/
var button = document.getElementsByClassName('btn');
console.log(button);
console.log(button.length);
for (var i = 0; i < button.length; i++) {
    var text = button[i].innerText;
    console.log(text);
}