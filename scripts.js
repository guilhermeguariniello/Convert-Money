const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectFrom = document.querySelector(".currency-select-from");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em real.
    const currencyValueConverted = document.querySelector(".currency-value"); // Valor convertido em outras moedas.
    const dolarToday = 5.72;
    const euroToday = 6.47;
    const libraToday = 7.71;
    const bitcoinToday = 350000;

    if(currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        }).format(inputCurrencyValue / dolarToday);
    }

    if(currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        }).format(inputCurrencyValue);
    }

    if(currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        }).format(inputCurrencyValue / euroToday);
    }

    if(currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        }).format(inputCurrencyValue / libraToday);
    }

    if(currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImg.src = "./assets/dolar.png";
    }

    if(currencySelect.value == "real") {
        currencyName.innerHTML = "Real";
        currencyImg.src = "./assets/real.png";
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/euro.png";
    }

    if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra";
        currencyImg.src = "./assets/libra.png";
    }

    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImg.src = "./assets/bitcoin.png";
    }

    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);