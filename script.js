let valueElement = document.querySelector(".js-value");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

let rateEUR = 4.6843;
let rateUSD = 4.4100;
let rateGBP = 5.4418;
let rateCHF = 4.7482;
let rateJPY = 3.2291;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let value = +valueElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "EUR":
            result = value / rateEUR;
            break;

        case "USD":
            result = value / rateCHF;
            break;

        case "GBP":
            result = value / rateGBP;
            break;

        case "CHF":
            result = value / rateCHF;
            break;

        case "JPY":
            result = value / rateJPY;

    }
    resultElement.innerText = `${value.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
});