// object practice
const inputA = document.querySelector('.calculator__input-first');
const inputB = document.querySelector(".calculator__input-second");
const resultButton = document.querySelector('.calculator__button');
const output = document.querySelector('.calculator__output');
const select = document.querySelector('.calculator__operation');

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
};

const oprerations = {
  sum: '+',
  substract: '-',
  multiply: '*',
  division: '/',
};

function calculate({ a, b, operation }) {
  let result = 0;

  switch (operation) {
    case oprerations.sum:
      result = sum(a, b);
      break;
    case oprerations.substract:
      result = substract(a, b);
      break;
    case oprerations.multiply:
      result = multiply(a, b);
      break;
    case oprerations.division:
      result = division(a, b);
      break;
  };

  return result;
}

resultButton.addEventListener('click', () => {
  const a = +inputA.value;
  const b = +inputB.value;
  const operation = select.value;
  const result = calculate({
    a,
    b,
    operation,
  });

  output.innerHTML = result;
})