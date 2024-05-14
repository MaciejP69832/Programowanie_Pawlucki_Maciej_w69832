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
    setInterval(Zadanie5, 1000);
    Zadanie5(); 
}
function Zadanie5_1() {
    var czas = document.getElementById('czas');
    if (czas.style.display === "none") {
        czas.style.display = "block";
    } else {
        czas.style.display = "none";
    }
}
/* Zadanie 6 */
function Zadanie6() {
    var wartosc = document.getElementById("Zadanie6").value;
    var nowyElement = document.createElement("li");
    var tekstElementu = document.createTextNode(wartosc);
    nowyElement.appendChild(tekstElementu);
    document.getElementById("lista").appendChild(nowyElement);
    alert("Wartość została dodana do listy. Zawartość listy widoczna jest w konsoli.");
    var lista = document.getElementById('lista');
    var elementyListy = lista.getElementsByTagName('li');
    console.log("Zawartość listy:");
    for (var i = 0; i < elementyListy.length; i++) {
    console.log(elementyListy[i].textContent);
    }
    console.log("Do listy dodano element: " + wartosc + ".");
}
/* Zadanie 7 */
/* Tabelka "zyg-zak" która dodaje wiersze od góry */
function Zadanie7() {
    var inputImie = document.getElementById("inputImie").value;
    var inputNazwisko = document.getElementById("inputNazwisko").value;
        if (inputImie === "" || inputNazwisko === "") {
        alert("Nie można dodać pustych danych!");
        return;
    }
    var kontenertabela = document.getElementById("kontenertabela");
    
    var table = kontenertabela.querySelector("table");
    if (!table) {
      table = document.createElement("table");
      table.setAttribute("id", "dataTable");
      var header = table.createTHead();
      var row = header.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "<b>Imię</b>";
      cell2.innerHTML = "<b>Nazwisko</b>";
      kontenertabela.appendChild(table);
    }
    
    var tbody = table.querySelector("tbody");
    if (!tbody) {
      tbody = document.createElement("tbody");
      table.appendChild(tbody);
    }

    var newRow = tbody.insertRow(0);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = inputImie;
    cell2.innerHTML = inputNazwisko;
    
    document.getElementById("inputImie").value = "";
    document.getElementById("inputNazwisko").value = "";
}
/* Zadanie 8 */
function Zadanie8() {
    var temperatura = parseFloat(document.getElementById("temperaturaInput").value);
    var jednostka = document.getElementById("wyborjednostki").value;
    var wyniktemp;

    if (jednostka === "celsius") {
        wyniktemp = (temperatura - 32) * 5/9;
        document.getElementById("wyniktemp").innerHTML = temperatura + "°F = " + wyniktemp.toFixed(2) + "°C";
    } else {
        wyniktemp = (temperatura * 9/5) + 32;
        document.getElementById("wyniktemp").innerHTML = temperatura + "°C = " + wyniktemp.toFixed(2) + "°F";
    }
}
/* Zadanie 9 */
function Zadanie9() {
    try {
        let num1 = parseFloat(document.getElementById("nwdInput1").value);
        let num2 = parseFloat(document.getElementById("nwdInput2").value);

        if (isNaN(num1) || isNaN(num2)) {
            throw "Podano nieprawidłowe wartości";
        }

        if (num1 < 0 || num2 < 0) {
            throw "Liczby muszą być dodatnie";
        }

        let result = nwd(num1, num2);
        document.getElementById("wyniknwd").innerHTML = "NWD = ("+ num1 + "," + num2 + ") = " + result;
    } catch (error) {
        alert(`Błąd: ${error}. Podaj dodatnie liczby całkowite.`);
    }
}
function nwd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
/* Zadanie 10 */
function oblicz(operator) {
    dodajnumer(operator);
  }
function dodajnumer(number) {
    const display = document.getElementById('wynik');
    display.innerText === '0' ? display.innerText = number : display.innerText += number;
  }
function przyciskAC() {
    document.getElementById('wynik').innerText = '0';
  }
function rozwiaz() {
    try {
      const result = eval(document.getElementById('wynik').innerText);
      document.getElementById('wynik').innerText = result;
    } catch (error) {
      document.getElementById('wynik').innerText = 'Błąd';
    }
  }