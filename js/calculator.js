//buttons value
let display = document.getElementById("display");
let value1 = "";
let value2 = null;
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

const operate = (operate) => {
  switch (operate) {
    case "+":
      if (value2 == null) {
        value2 = value1;
        console.log(value2);
        value1 = 0;
      } else {
        console.log(value1, value2);

        value3 = value2 + value1;
        value2 = value3;
        display.innerHTML = value3;

        value1 = 0;
      }

      break;
    case "-":
      if (value2 == null) {
        value2 = value1;
        console.log(value2 + "si endrteo");
        value1 = 0;
      } else {
        console.log(value1, value2);

        value3 = value2 - value1;
        value2 = value3;
        display.innerHTML = value3;
        console.log(value2);
        value1 = 0;

      }
      break;
    case "*":
      if (value2 == null) {
        value2 = value1;
        console.log(value2 + "si endrteo");
        value1 = 0;
      } else {
        console.log(value1, value2);

        value3 = value2 * value1;
        value2 = value3;
        display.innerHTML = value3;
        console.log(value2);
        value1 = 0;

      }

      break;
      case "/":
      if (value2 == null) {
        value2 = value1;
        console.log(value2 + "si endrteo");
        value1 = 0;
      } else {
        console.log(value1, value2);

        value3 = value2 / value1;
        value2 = value3;
        display.innerHTML = value3;
        console.log(value2);
        value1 = 0;

      }

      break;

    default:
      break;
  }
};
