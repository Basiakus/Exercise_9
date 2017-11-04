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

/*
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
*/

// zadanie 9.5 DOM
var jsButton = document.getElementsByClassName('btn');
console.log(jsButton[5]);
console.log(jsButton.length);
for (var i = 0; i < jsButton.length; i++) {
   console.log(jsButton[i].innerText);
}

// ---Zadania z ćwiczeń
//rola parametru element / info ?, a funkcję wpisać bezpośrednio w bloku listenera ???
function afterClick(info) {
   alert(info);
   console.log(info);
}
var jsButton = document.getElementById('js-btn');
jsButton.addEventListener('click', function(element)  {
   afterClick("Brawo klikąłeś przycisk :\)");   
   
});
var jsInput = document.getElementById('js-input');
jsInput.addEventListener('keypress', function(pressByUser) {
   pressByUser.target.value += " ! ";
   console.log(pressByUser.target.value);
})

//---Zadanie 9.6 EEventy
var addButton = document.getElementById('js-addButton');
var customList = document.getElementById('js-addList');
var tagLi = document.getElementsByTagName('li');
console.log(addButton);
console.log(customList);


function makeLiElement() {
    var newLi = document.createElement('li');
    newLi.innerHTML = "Element " + tagLi.length;
    customList.appendChild(newLi);
}
addButton.addEventListener('click', function() {
    makeLiElement();
});