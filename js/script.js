{
  const welcome = () => {
    console.log("Cześć!");
  }
  const calculate = (amount, selectTwo, select) => {
    return (amount / selectTwo) * select;
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const selectElement = document.querySelector(".js-select");
    const amountElement = document.querySelector(".js-amount");
    const selectTwoElement = document.querySelector(".js-selectTwo");
    const select = selectElement.value;
    const selectTwo = selectTwoElement.value;
    const amount = amountElement.value;
    const result = calculate(amount, selectTwo, select);

    updateResultText(result);

  };

  const updateResultText = (result) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = result.toFixed(2);
  }
  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  }

  init();
  welcome();

}


