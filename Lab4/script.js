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
function usunwiek() {
    localStorage.removeItem("wiekusera");
    localStorage.removeItem("czywyswietlona");
    alert("Wiek został zresetowany. Odśwież stronę, aby wprowadzić nowy wiek.");
}

