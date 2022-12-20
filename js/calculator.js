//buttons value
let display = document.getElementById("display");
let value1 = 0;
let value2 = 0;
let value3 = 0;
let lastOperator = "";
let resultado;
let nextOperator;

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


const checkLastOperation = (currentOperator) => {

  if (resultado == null && value2 != null && lastOperator=="") {
    value2 = value1;
    value1 = 0;
    lastOperator=currentOperator;
    console.log("entro y gaurda el valor 1 en en 2 y guarda operador  y lo borra de la variable principal" + " valor 2: " +value2 +"Operador:; " + lastOperator) ;
    
    currentOperator = "";
    console.log("1");
  }

  else if (lastOperator != "=" && lastOperator != "" || value2!=null) {
   
  console.log(" opera con el anterio que es" + lastOperator);
 
    operate(lastOperator);
    lastOperator= currentOperator=="="? "":currentOperator; 
   
    currentOperator="";
    console.log(" guarda en nuevo borerador  y borra el viejo" + lastOperator);
    value2 = resultado;
    value1 = 0;
    display.innerHTML = resultado;
    console.log("2");
  }

  if(currentOperator=="="){
    operate(lastOperator);
    value2=resultado;
     value1 = 0;
    display.innerHTML = resultado;
    console.log(value2);
    console.log("curente");
  }




};



const addition = () => {
  return value2 + value1;

};

const subtraction = () => {
  return value2 - value1;
};

const multiplication = (operator) => {
  return value2 * value1;
};

const division = (operator) => {
  return value2 / value1;
};


const result = (operator) => {

  operate(lastOperator, this.value1 , this.value2);
 

  
};


const operate = (operator, value1, value2) => {
  switch (operator) {
    case "+":
      resultado = addition(this.value1, this.value2);


      break;
    case "-":
      resultado = subtraction(this.value1, this.value2);

      break;
    case "*":
      resultado = multiplication(this.value1, this.value2);
      break;
    case "/":
      resultado = division(this.value1, this.value2);
      break;

    case "=":
      checkLastOperation(lastOperator);
      break;

    default:
      break;
  }
};
