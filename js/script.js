console.log("Cześć!");
let euroElement = document.querySelector(".js-euro");
let usdElement = document.querySelector(".js-usd");
let poundElement = document.querySelector(".js-pound");
let plnElement = document.querySelector(".js-pln");
let selectElement = document.querySelector(".js-select");
let amountElement = document.querySelector(".js-amount");
let selectTwoElement = document.querySelector(".js-selectTwo");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let select = selectElement.value;
  let selectTwo = selectTwoElement.value;
  let amount = amountElement.value;
  let result = (amount / selectTwo) * select;

  let euro = euroElement.value;
  let pln = plnElement.value;
  let usd = usdElement.value;
  let pound = poundElement.value;

  resultElement.innerText = result.toFixed(2);
});





