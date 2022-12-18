//buttons value
let display = document.getElementById("display");
let value1 = 0;
let value2 = 0;
let value3 = 0;
let lastOperator = "";

const addDisplay = (number) => {
  console.log(number);
  if (value1 < 99999999999) {
    display.innerHTML = "";
    value1 = Number(value1 + "" + number);
    console.log(value1);
    display.append(value1);

    console.log(String(value1));
  }
};
const deleteDigit = () => {
  value1 = String(value1);
  value1 = value1.substring(0, value1.length - 1);
  value1 = Number(value1);
  console.log(value1);
  display.innerHTML = value1;
  if (value1.length < 1) {
    display.innerHTML = "0";
  }
};

const checkLastOperation = (lastOperator) => {
  return (lastOperator = lastOperator != "");
};

const addition = (operator) => {

  if (lastOperator != "") {
    let finalOperator = lastOperator;
    lastOperator = "";
    operate(finalOperator);
  }
  value3 = value1 + value2;
  value2 = value3;
  value1 = 0;
  display.innerHTML = value2;
  lastOperator = operator;
};

const subtraction = (operator) => {
  if (lastOperator != "") {
    let finalOperator = lastOperator;
    lastOperator = "";
    operate(finalOperator);
  }

  value3 = value2 == 0 ? value1 : value2 - value1;
  value2 = value3;
  value1 = 0;
  display.innerHTML = value2;
  lastOperator = operator;
};

const multiplication = (operator) => {
  if (lastOperator != "") {
    let finalOperator = lastOperator;
    lastOperator = "";
    operate(finalOperator);
  }

  console.log(value1);
  value3 = value2 == 0 ? value1 : value2 * value1;
  value2 = value3;
  console.log(value2);
  value1 = 0;
  display.innerHTML = value2;
  lastOperator = operator;
  console.log(operator);
};

const division = (operator) => {
  if (lastOperator != "") {
    let finalOperator = lastOperator;
    lastOperator = "";
    operate(finalOperator);
  }

  value3 = value2 == 0 ? value1 : value2/ value1;
    value2 = value3;
  value1 = 0;
  display.innerHTML = value2;
  lastOperator = operator;
};


const operate = (operator) => {
  switch (operator) {
    case "+":
      addition(operator);

      break;
    case "-":
      subtraction(operator);

      break;
    case "*":
      multiplication(operator);
      break;
    case "/":
      division(operator);
      break;

    case "=":
      console.log("===");
      operate(lastOperator);

    default:
      break;
  }
};
