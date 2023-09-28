const currencySelect = document.getElementById("currency");
const amountInput = document.getElementById("amount");
const currencyButton = document.getElementById('currencyButton');
const loaderDiv = document.querySelector('.loader');
const resultDiv = document.querySelector('.result');


function convertCurrency(event) {
    event.preventDefault();

    const formData = new FormData(currencyForm);
    const selectedCurrency = formData.get("currency");
    const amount = formData.get("amount");

    

    loaderDiv.style.display = 'block';
  
    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${selectedCurrency}/?format=json`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.rates?.length > 0) {
                const rate = data.rates[0].mid;
                const convertedAmount = (amount * rate).toFixed(2);
                resultDiv.innerText = `${amount} ${selectedCurrency} to ${convertedAmount} PLN`;
            } else {
                resultDiv.innerText = 'Brak danych dotyczących kursu waluty.';
            }
            
        })
        .catch(error => {
            resultDiv.innerText = "Błąd podczas pobierania kursu waluty.";
        })
        .finally(() => {
            loaderDiv.style.display = "none";
        })
}

currencyForm.addEventListener('submit', convertCurrency); 

