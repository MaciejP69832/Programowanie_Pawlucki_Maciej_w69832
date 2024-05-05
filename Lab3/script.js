/* Zadanie 3 */
var a = 10;
var b = 20;
var c = 23.2;
function suma() {
    return a + b + c;
}
function roznica() {
    return a - b - c;
}
function iloczyn() {
    return a * b * c;
}
function iloraz() {
    return a / b / c;
}
function Zad3Alert() {
    var wynik = "Wynik dodawania: " + suma() + "\n" +
                 "Wynik odejmowania: " + roznica() + "\n" +
                 "Wynik mnożenia: " + iloczyn() + "\n" +
                 "Wynik dzielenia: " + iloraz();
    alert(wynik);
}
function Zad3Konsola() {
    console.log("Wynik dodawania: " + suma());
    console.log("Wynik odejmowania: " + roznica());
    console.log("Wynik mnożenia: " + iloczyn());
    console.log("Wynik dzielenia: " + iloraz());
}
function Zad3Paragraf() {
    var wynikpar = document.getElementById('wynik');
    if (wynikpar.style.display === "none") {
        wynikpar.style.display = "block";
        wynikpar.innerHTML = 
            "Wynik dodawania: " + suma() + "<br>" +
            "Wynik odejmowania: " + roznica() + "<br>" +
            "Wynik mnożenia: " + iloczyn() + "<br>" +
            "Wynik dzielenia: " + iloraz();
    } else {
        wynikpar.style.display = "none";
    }
}
/* Zadanie 4 */
function Zad4Konsola(){
for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        }
    }
}
/* Zadanie 5 */
function poletrojkata(d, e, f) {
    var p = (d + e + f) / 2;
    var pole = Math.sqrt(p * (p - d) * (p - e) * (p - f));
    return pole;
}
function Zad5Konsola() {
    var d,e,f;
    while (true) {
    var d = parseFloat(prompt("Podaj długość pierwszego boku:"));
    var e = parseFloat(prompt("Podaj długość drugiego boku:"));
    var f = parseFloat(prompt("Podaj długość trzeciego boku:"));
    if (d + e > f && d + f > e && e + f > d) {
        var pole = poletrojkata(d, e, f);
        alert("Wynik został wyświetlony w konsoli.")
        console.log("Pole trójkąta wynosi: " + pole);
        break;
    } else {
        alert("Z podanych długości nie można zbudować trójkąta!")
        console.log("Z podanych długości nie można zbudować trójkąta")
        break
        }
    }
}
function Zad5Paragraf() {
    var section = document.getElementById("wynik2");
    var wynik = document.getElementById("wynikpole");
    if (section.style.display === "none") {
        section.style.display = "block";
        wynik.style.display = "block";
    } else {
        section.style.display = "none";
        wynik.style.display = "none";
    }
}
function Zad5Oblicz() {
    var d = parseFloat(document.getElementById("dlugosc_a").value);
    var e = parseFloat(document.getElementById("dlugosc_b").value);
    var f = parseFloat(document.getElementById("dlugosc_c").value);

    if (d + e > f && d + f > e && e + f > d) {
        var pole = poletrojkata(d, e, f);
        document.getElementById("wynikpole").innerHTML = "Pole trójkąta wynosi: " + pole;
        document.getElementById("wynik2").style.display = "block"
    } else {
        document.getElementById("wynikpole").innerHTML = "Z podanych długości nie można zbudować trójkąta";
        document.getElementById("wynik2").style.display = "block"
    }
}
/* Zadanie 6 */
function Zadanie6() {
    var imie = document.getElementById("imie").value;
    if (imie.trim() === "") {
        alert("Musisz podać imię!")
    } else {
        alert("Dzień dobry, " + imie + "!" );
    }
}
/* Zadanie 7 */
function Zadanie7() {
    var liczba1 = parseInt(prompt("Podaj pierwszą liczbę: "));
    var liczba2 = parseInt(prompt("Podaj drugą liczbę: "));
    if (!isNaN(liczba1) && !isNaN(liczba2)) {
        var rezultat = liczba1 + liczba2;
        alert("Wynik dodawania tych liczb to: " + rezultat)
    } else {
        alert("Podano nieprawidłowe dane! Upewnij się, że podajesz liczby całkowite!")
        }
}
/* Zadanie 8 */
function Zadanie8(a,b,c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
function Zadanie8_prompt(a,b,c) {
    let liczba1 = parseFloat(prompt("Podaj pierwszą liczbę:"));
    let liczba2 = parseFloat(prompt("Podaj drugą liczbę:"));
    let liczba3 = parseFloat(prompt("Podaj trzecią liczbę:"));
    if (!isNaN(liczba1) && !isNaN(liczba2) && !isNaN(liczba3)) {
        let najwieksza = Zadanie8(liczba1, liczba2, liczba3);
        console.log("Największa liczba to: " + najwieksza);
    } else {
        alert("Podane wartości nie są liczbami.");
    }
}
function Zadanie8_paragraf() {
    var section = document.getElementById("paragraf2");
    var wynik = document.getElementById("najwieksza");
    if (section.style.display === "none") {
        section.style.display = "block";
        wynik.style.display = "block";
    } else {
        section.style.display = "none";
        wynik.style.display = "none";
    }
}
function Zadanie8_paragraf2(a,b,c) {
let liczba1 = parseFloat(prompt("Podaj pierwszą liczbę:"));parseInt
let liczba2 = parseFloat(prompt("Podaj drugą liczbę:"));
let liczba3 = parseFloat(prompt("Podaj trzecią liczbę:"));
if (!isNaN(liczba1) && !isNaN(liczba2) && !isNaN(liczba3)) {
    let najwieksza = Zadanie8(liczba1, liczba2, liczba3);
    document.getElementById("najwieksza").innerHTML = "Największa liczba to " + najwieksza
} else {
    alert("Podane wartości nie są liczbami.");
}
}
/* Zadanie 9 */
function Zadanie9() {
    try {
        let num1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą: "));
        let num2 = parseInt(prompt("Podaj drugą liczbę całkowitą: "));

        if (isNaN(num1) || isNaN(num2)) {
            throw "Podano nieprawidłowe wartości";
        }

        if (num1 < 0 || num2 < 0) {
            throw "Liczby muszą być dodatnie";
        }

        let result = nwd(num1, num2);
        alert(`Największy wspólny dzielnik liczb ${num1} i ${num2} wynosi: ${result}`);
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
function Zadanie10() {
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
    Zadanie10(); 
};
/* Zadanie 11 */
function Zadanie11_1() {
    return Math.floor(Math.random() * 101);
}
function Zadanie11_2() {
    var wylosowanaLiczba = Zadanie11_1();
    var liczbaProb = 0;
    var zgadnieto = false;
  
    while (!zgadnieto) {
      var propozycja = prompt("Zgadnij liczbę z przedziału od 0 do 100:");
      if (propozycja === null || isNaN(propozycja)) {
        alert("Proszę wprowadzić poprawną liczbę.");
        continue;
      }
  
      var wprowadzonaLiczba = parseInt(propozycja);
      if (wprowadzonaLiczba < 0 || wprowadzonaLiczba > 100) {
        alert("Proszę podać liczbę z przedziału od 0 do 100.");
        continue;
      }
  
      liczbaProb++;
      if (wprowadzonaLiczba === wylosowanaLiczba) {
        zgadnieto = true;
        alert("Gratulacje! Odpowiedź to " + wylosowanaLiczba + ". Zgadłeś liczbę po " + liczbaProb + " próbach.");
      } else if (wprowadzonaLiczba < wylosowanaLiczba) {
        alert("Podana liczba jest za mała. Spróbuj ponownie.");
      } else {
        alert("Podana liczba jest za duża. Spróbuj ponownie.");
      }
    }
  }
  
  