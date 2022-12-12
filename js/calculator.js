

alert(2);
//buttons value
let display = document.getElementById("display");
let value1="";
let value2="";
let operator="";

const addDisplay = (number) => {
   
    if(value1.length <11){
        display.innerHTML ="";
        value1 = value1 + number;
        display.append(value1);
        console.log(value1)
    }

}
const deleteDigit=() => {

    value1 = value1.substring(0 , value1.length-1);
    display.innerHTML = value1;
    if(value1.length<1){
        display.innerHTML = "."; 
    }
}

const operate = (operator) => {
 this.operator = operator;

 

  switch (operator){
    case "+": 
     if(value2==""){
       value2 = value1;
       value1="";
       display.innerHTML="ss";
     }else{
        value1 =   parseInt(value2) +parseInt(value1) ;
        value2="";
        display.innerHTML=value1+"";
     }

    break;

    case "-": 
     if(value2==""){
       value2 = value1;
       value1="";
       display.innerHTML=".";
     }else{
        value1 =   parseInt(value2) -parseInt(value1);
        console.log(value1);
        value2="";
        display.innerHTML= value1+"";
     }

    break;
 

  
  }
 
}

const result =()=>{
    switch (operator){
        case "+":
            display.innerHTML =parseInt(value1) + parseInt(value2);
            console.log(parseInt(value1) + parseInt(value2));
            break;
    }
}







