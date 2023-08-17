/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const formElement = document.querySelector("#form");
const resultsDiv = document.querySelector("#output");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputField = document.querySelector("#search");
  let inputValue = inputField.value;
  removeChildNodes(resultsDiv);
  displayCalculation(inputValue);
});

const displayCalculation = (value) => {
  const answerWrapperElementPounds = document.createElement("div");
  const answerWrapperElementGrams = document.createElement("div");
  const answerWrapperElementOunces = document.createElement("div");

  answerWrapperElementPounds.classList.add("answerWrapper");
  answerWrapperElementGrams.classList.add("answerWrapper");
  answerWrapperElementOunces.classList.add("answerWrapper");

  const poundsElement = document.createElement("p");
  const gramsElement = document.createElement("p");
  const ouncesElement = document.createElement("p");

  poundsElement.classList.add("value");
  gramsElement.classList.add("value");
  ouncesElement.classList.add("value");

  poundsElement.textContent = value * 2.2046;
  gramsElement.textContent = value / 0.001;
  ouncesElement.textContent = value * 35.274;

  const poundsSymbol = document.createElement("h2");
  poundsSymbol.classList.add("unit");
  poundsSymbol.textContent = "lb";

  const gramsSymbol = document.createElement("h2");
  gramsSymbol.classList.add("unit");
  gramsSymbol.textContent = "g";

  const ouncesSymbol = document.createElement("h2");
  ouncesSymbol.classList.add("unit");
  ouncesSymbol.textContent = "oz";

  answerWrapperElementPounds.append(poundsSymbol, poundsElement);
  answerWrapperElementGrams.append(gramsSymbol, gramsElement);
  answerWrapperElementOunces.append(ouncesSymbol, ouncesElement);

  resultsDiv.append(
    answerWrapperElementPounds,
    answerWrapperElementGrams,
    answerWrapperElementOunces
  );
};

const removeChildNodes = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
};
