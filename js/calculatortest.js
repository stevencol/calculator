

alert(2);
//buttons value
let display = document.getElementById("display");
let value1 = 0;
let value2 = 0;
let value3 = 0;
let firstOperator = "";
let lastOperator = "";

const addDisplay = (number) => {

   console.log(number);
  if (value1 < 99999999999) {


    display.innerHTML = "";
    value1 = value1 + number+"";
    console.log(value1);
    display.append(value1);
  
    console.log(value1);
  }

}
const deleteDigit = () => {

  value1 = value1.substring(0, value1.length - 1);
  display.innerHTML = value1;
  if (value1.length < 1) {
    display.innerHTML = ".";
  }
}

const operate = (firstOperator) => {
  this.firstOperator = firstOperator;



  switch (firstOperator) {
    case "+":
      if(lastOperator!="" && lastOperator != "+"){
        operate(lastOperator);
        lastOperator="";
        

      }
    if (value2 == "") {
        value2 = value1;
        value1 = "";
        display.innerHTML = ".";
        lastOperator = firstOperator;
      } else {
        value3 = value1 != "" ? value1 : value3;

        value2 = parseInt(value2) + parseInt(value3);
        value1 = "";
        display.innerHTML = value2 + "";
        lastOperator = firstOperator;
      }

      break;

    case "-":
      if(lastOperator!="" && lastOperator != "- "){
        operate(lastOperator);
        lastOperator="";
        

      }
      if (value2 == "") {
        value2 = value1;
        value1 = "";
      } 

     else {
        value3 = value1 != "" ? value1 : value3;
        value2 = parseInt(value2) - parseInt(value3);
        value1 = "";
        display.innerHTML = value2 + "";
      }

      break;



  }

}

const result = () => {
  switch (operator) {
    case "+":
      display.innerHTML = parseInt(value1) + parseInt(value2);
      console.log(parseInt(value1) + parseInt(value2));
      break;
  }
}







