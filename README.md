# PROJECT CURRENCY CONVERTER

## DESCRIPTION
**Currency Converter** is a project as a student *Front End Developer* by [YouCode](https://youcode.pl/frontend-developer/).
- It can convert several currencies from *PLN*, just select or type the amount in *PLN*, choose *Currency* from the list and click *Calculate* button.
- It is quite simple, what matters is functionality ;)
## DEMO
[Currency Converter](https://sebastiannadialkowski.github.io/Currency-Converter/)

![CurrencyConverter](https://user-images.githubusercontent.com/121190741/212137824-aae6a2e2-3480-464a-a1f7-fae0562c4448.gif)




## COMMENT & USED TECHNOLOGIES

I recently did a little refactoring of JavaScript code, by adding functions 

*(for the moment it is very difficult, done with the help of lessons on YouCode, I think in the future it will be easier - practice makes perfect ;))*

was:
```javascript
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
});```

now is:



Used Technologies:
- HTML
- CSS
- Java Script
- GIT
- BEM
