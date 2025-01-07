let a = 0
document.addEventListener("DOMContentLoaded", () => {
  const Calculate = {
    "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
    "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
    "*": (firstNumber, secondNumber) => firstNumber * secondNumber,
    "/": (firstNumber, secondNumber) => firstNumber / secondNumber,
  };

  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstNumber = parseInt(form.querySelector("input[name='first-number']").value, 10);
    let secondNumber = parseInt(form.querySelector("input[name='second-number']").value, 10);
    let operator = form.querySelector("#operator").value;
    let result = document.querySelector("#result");

    let calculate = Calculate[operator];
    result.textContent = calculate(firstNumber, secondNumber);
  });

});

// function performOperation(val1, val2, operator) {
//   switch (operator) {
//     case '+':
//       return val1 + val2;
//     case '-':
//       return val1 - val2;
//     case '*':
//       return val1 * val2;
//     case '/':
//       return val1 / val2;
//     default:
//       return 'Something went wrong'
//   }
// }