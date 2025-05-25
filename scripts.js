const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectFrom = document.querySelector(".currency-select-from");

function convertValues() {
    let inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em real.
    const currencyValueConverted = document.querySelector(".currency-value"); // Valor convertido em outras moedas.
    const dolarToday = 5.65;
    const euroToday = 6.47;
    const libraToday = 7.71;
    const bitcoinToday = 605495.25;

    if(currencySelectFrom.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue);
    } else if(currencySelectFrom.value == "dolar") {
        inputCurrencyValue = inputCurrencyValue * dolarToday;
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);
    } else if(currencySelectFrom.value == "euro") {
        inputCurrencyValue = inputCurrencyValue * euroToday;
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue  / euroToday);
    } else if(currencySelectFrom.value == "libra") {
        inputCurrencyValue = inputCurrencyValue * libraToday;
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue  / libraToday);
    } else if(currencySelectFrom.value == "bitcoin") {
        inputCurrencyValue = inputCurrencyValue * bitcoinToday;
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue  / bitcoinToday);
    }


    if(currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        }).format(inputCurrencyValue  / dolarToday);
    } else if(currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        }).format(inputCurrencyValue);
    } else if(currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        }).format(inputCurrencyValue / euroToday);
    } else if(currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        }).format(inputCurrencyValue  / libraToday);
    } else if(currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        }).format(inputCurrencyValue  / bitcoinToday);
    }

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

function changeCurrencyFrom() {
    const inputCurrencyValue = document.querySelector(".input-currency");
    const currencyNameFrom = document.getElementById("currency-name-from");
    const currencyImgFrom = document.querySelector(".currency-img-from");

    if(currencySelectFrom.value == "dolar") {
        currencyNameFrom.innerHTML = "Dólar americano";
        currencyImgFrom.src = "./assets/dolar.png";
        inputCurrencyValue.setAttribute("placeholder", "$ 10,000.00")
    }else if(currencySelectFrom.value == "real") {
        currencyNameFrom.innerHTML = "Real";
        currencyImgFrom.src = "./assets/real.png";
        inputCurrencyValue.setAttribute("placeholder", "R$ 10.000,00")
    }else if(currencySelectFrom.value == "euro") {
        currencyNameFrom.innerHTML = "Euro";
        currencyImgFrom.src = "./assets/euro.png";
        inputCurrencyValue.setAttribute("placeholder", "10.000,00 €")
    }else if(currencySelectFrom.value == "libra") {
        currencyNameFrom.innerHTML = "Libra";
        currencyImgFrom.src = "./assets/libra.png";
        inputCurrencyValue.setAttribute("placeholder", "£ 10,000.00")
    }else if(currencySelectFrom.value == "bitcoin") {
        currencyNameFrom.innerHTML = "Bitcoin";
        currencyImgFrom.src = "./assets/bitcoin.png";
        inputCurrencyValue.setAttribute("placeholder", "BTC 10,000.00")
    }

    convertValues();
}

currencySelectFrom.addEventListener("change", changeCurrencyFrom);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);