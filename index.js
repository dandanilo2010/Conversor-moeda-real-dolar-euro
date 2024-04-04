const button = document.querySelector(".botao");
const currencySelect = document.querySelector(".currency-select");

async function convertValues() {
    const inputValue = document.querySelector("input").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json());

    const dolar = data.USDBRL.high;
    const euro = data.EURBRL.high;

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolar);
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euro);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue);
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name');
    const currencyImage = document.querySelector('.currency-img');

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano';
        currencyImage.src = './assets/dolar.png';
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro';
        currencyImage.src = './assets/euro.png';
    }

    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
button.addEventListener("click", convertValues);
