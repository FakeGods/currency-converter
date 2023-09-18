const currencySelect = document.getElementById("currency");
const amountInput = document.getElementById("amount");
const currencyButton = document.getElementById('currencyButton');
const loaderDiv = document.querySelector('.loader');
const resultDiv = document.querySelector('.result');

function convertCurrency() {
    const selectedCurrency = currencySelect.value;
    const amount = amountInput.value;
    

    loaderDiv.style.display = 'block';
  
    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${selectedCurrency}/?format=json`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const rate = data.rates[0].mid;
            const convertedAmount = (amount * rate).toFixed(2);
            resultDiv.innerText = `${amount} ${selectedCurrency} to ${convertedAmount} PLN`;
        })
        .catch(error => {
            resultDiv.innerText = "Błąd podczas pobierania kursu waluty.";
        })
        .finally(() => {
            loaderDiv.style.display = "none";
        })
}

convertButton.addEventListener('click', convertCurrency); 

