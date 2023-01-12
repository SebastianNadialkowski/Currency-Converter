# CURRENCY CONVERTER

## DESCRIPTION
**Currency Converter** is a project as a student *Front End Developer* by [YouCode](https://youcode.pl/frontend-developer/).
- It can convert several currencies from *PLN*, just select or type the amount in *PLN*, choose *Currency* from the list and click *Calculate* button.
- It is quite simple, what matters is functionality ;)
## DEMO
[Currency Converter](https://sebastiannadialkowski.github.io/Currency-Converter/)

![CURRENCY CONVERTER](https://user-images.githubusercontent.com/121190741/212160951-17b1fd66-6720-443a-bc5f-e7ebdaa1bb0c.gif)

## COMMENT & USED TECHNOLOGIES

I recently did a little refactoring of this JavaScript code:

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
}); 
```

added  functions instead of one block of code :

*(you can see changes im my repository)*

- calculateResult 
```javascript
const calculateResult = (amount, currency) => {

        const rateEUR = 4.6843;
        const rateUSD = 4.4100;
        const rateGBP = 5.4418;
        const rateCHF = 4.7482;
        const rateJPY = 3.2291;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;
            case "USD":
                return amount / rateUSD;
            case "GBP":
                return amount / rateGBP;
            case "CHF":
                return amount / rateCHF;
            case "JPY":
                return amount / rateJPY;
        }
    }
```
- init 
```javascript
const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const amountElement = document.querySelector(".js-amount");
            const currencyElement = document.querySelector(".js-currency");
            const resultElement = document.querySelector(".js-result");

            const amount = +amountElement.value;
            const currency = currencyElement.value

            const result = calculateResult(amount, currency);
            resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
        });
    }
    
    init();
```    

- onFormSubmit
```javascript
const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");

        const amount = +amountElement.value;
        const currency = currencyElement.value

        const result = calculateResult(amount, currency);
        resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }
```


*(for the moment it is very difficult, done with the help of lessons on YouCode, I think in the future it will be easier - practice makes perfect ;))*


Used Technologies:
- HTML
- CSS
- Java Script
- GIT
- BEM
