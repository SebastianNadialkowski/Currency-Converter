{
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

    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

    };

    init();

}