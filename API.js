function convertCurrency() {
    let currencySelect = document.getElementById("currency");
    const amountInput = document.getElementById("amount");
    const resultDiv = document.getElementById("result");
    const loaderDiv = document.getElementById('loader');

    const selectedCurrency = currencySelect.value;
    const amount = amountInput.value;

    loaderDiv.style.display = 'block';
  
    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${selectedCurrency}/?format=json`)
        .then(response => {
            loaderDiv.style.display = "none";
            return  response.json();
        })
        .then(data => {
            const rate = data.rates[0].mid;
            const convertedAmount = (amount * rate).toFixed(2);
            resultDiv.innerHTML = `${amount} ${selectedCurrency} to ${convertedAmount} PLN`;
        })
        .catch(error => {
            console.error(error);
            resultDiv.innerHTML = "Błąd podczas pobierania kursu waluty.";
            loaderDiv.style.display = "none";
        });
}