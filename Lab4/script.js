/* Zadanie 1 */
/* Funkcja odliczania od 10 do 0 w konsoli - odliczanie przy pomocy funkcji sleep opisanej poniżej */
function Zadanie1_1() {
    console.log("Odliczanie sylwestrowe rozpoczyna się...");
for (let i = 10; i > 0; i--) {
    console.log(i);
    sleep(1000);
    }
console.log("Happy New Year!");
}

function Zadanie1_2() {
    console.log("Odliczanie sylwestrowe rozpoczyna się...");
let count = 10;
while (count > 0) {
    console.log(count);
    sleep(1000); 
    count--;
    }
console.log("Happy New Year!");
}

function sleep(ms) {
    const start = Date.now();
    while (Date.now() - start < ms);
}
/* Zadanie 2 */
function Zadanie2() {
    function silnia(liczba) {
        if (liczba === 0 || liczba === 1) {
            return 1;
        } else {
            return liczba * silnia(liczba - 1);
        }
    }
    const liczba = parseInt(prompt("Podaj liczbę:"));
    alert(`Silnia z ${liczba} wynosi ${silnia(liczba)}.`);
}

/* Zadanie 3 */
/* Funkcja sprawdza wiek użytkownika, jeśli jest >18 nie pyta dalej po odświeżeniu strony */
function Zadanie3() {
    const age = localStorage.getItem("wiekusera");

    if (age !== null) {
        sprawdzwiek(parseInt(age));
    } else {
        const wiek = parseInt(prompt("Podaj swój wiek:"));
        localStorage.setItem("wiekusera", wiek.toString());
        sprawdzwiek(wiek);
    }
}

function sprawdzwiek(wiek) {
    const czywyswietlona = localStorage.getItem("czywyswietlona");

    if (!czywyswietlona) {
        if (wiek >= 18) {
            alert("Jesteś pełnoletni! Możesz przejść dalej.");
        } else {
            alert("Jesteś niepełnoletni! Zostaniesz przekierowany na stronę dla dzieci.");
            window.open("https://www.superkid.pl/", "_self");
        }
        localStorage.setItem("czywyswietlona", "true");
    }
}
/* Funkcja usuwa dane na temat wieku -> po odświeżeniu trzeba podać wiek ponownie */
function usunwiek() {
    localStorage.removeItem("wiekusera");
    localStorage.removeItem("czywyswietlona");
    alert("Wiek został zresetowany. Odśwież stronę, aby wprowadzić nowy wiek.");
}
/* Zadanie 4 */
/* Funkcja generuje losowy numer HEX dla koloru i zmienia tło przycisku po jego wciśnięciu, następnie po wybraniu innego przycisku wcześniejszy wraca do stanu poprzedniego */
function Zadanie4(buttonId) {
   function losowykolor() {
    var litery = '0123456789ABCDEF';
    var kolory = '#';
    for (var i = 0; i < 6; i++) {
        kolory += litery[Math.floor(Math.random() * 16)];
    }
    return kolory;
} 
var przyciski = document.getElementsByTagName('button');

for (var i = 0; i < przyciski.length; i++) {
    if (przyciski[i].id === buttonId) {
        var losowykolor = losowykolor(); 
        przyciski[i].style.backgroundColor = losowykolor;
    } else {
        przyciski[i].style.backgroundColor = '';
    }
}
}
/* Zadanie 5 */
/* Wybrałem przycisk, który będzie ukrywał zegarek na stronie */
function Zadanie5() {
    function zegarek() {
    var czas = new Date();
    var godzina = czas.getHours();
    var minuta = czas.getMinutes();
    var sekunda = czas.getSeconds();
    godzina = godzina < 10 ? '0' + godzina : godzina;
    minuta = minuta < 10 ? '0' + minuta : minuta;
    sekunda = sekunda < 10 ? '0' + sekunda : sekunda;
    document.getElementById('czas').innerHTML = godzina + ':' + minuta + ':' + sekunda;
    }
    
    window.onload = function() {
    setInterval(Zadanie10, 1000);
    zegarek(); 
    }
}