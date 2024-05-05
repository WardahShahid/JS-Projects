const inputDisplay = document.querySelector('.i-js');

function appendToDisplay(input){
    inputDisplay.value += input;
}
 
function calculate(){
    const result = eval(inputDisplay.value);
    inputDisplay.value = result;
}

function clearDisplay(){
    inputDisplay.value = "";
}

function parenthesis(){
   inputDisplay.value = `(${inputDisplay.value})`
}

function clearEntry(){
    inputDisplay.value = inputDisplay.value.slice(0, -1);
}

document.body.addEventListener('keydown',(event)=>{
    if (event.key === 'Enter'){
    calculate();
}
})









