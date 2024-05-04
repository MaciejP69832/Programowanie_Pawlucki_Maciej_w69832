function Zadanie1() {
    console.log("Odliczanie sylwestrowe rozpoczyna się...");

    for (let i = 10; i > 0; i--) {
        console.log(i);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Opóźnienie o 1 sekundę
    }
    
    console.log("Happy New Year!");
}
