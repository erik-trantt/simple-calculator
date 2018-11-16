// When i click on a number button, update the display
var result = 0;
var input, inputString;
var state = "cleared";
var re = /([\+\-]?\d+\.?\d*[\+\-\*\/]?)/g;
var re_operator = /([\+\-\*\/])?/g;
var OperatorsEnum = Object.freeze({"plus":"+", "minus":"-", "multiply":"*", "divide":"/"});
var inputArea, resultArea;

window.onload = function() {
    // call to get an array of buttons by className=number
    // then add the Event 'onlick' to update the 
    var numBtns = document.getElementsByClassName("number");
    Array.from(numBtns).forEach(function(item, index) {
        //log(item);
        item.setAttribute("onclick", "displayInput(this);");
    });

    inputArea = document.getElementsByClassName("input")[0];

    var clearBtn = document.getElementsByClassName("clear");
    clearBtn[0].setAttribute("onclick","clearInput(this);");

    var dotBtn = document.getElementsByClassName("dot");
    dotBtn[0].setAttribute("onclick","insertDot(this);");

    var calculateBtn = document.getElementsByClassName("equal");
    calculateBtn[0].setAttribute("onclick","calculate();");

    var opBtns = document.getElementsByClassName("operator");
    Array.from(opBtns).forEach(function(item, index) {
        item.setAttribute("onclick", "handleOperator(this);");
    });

};


function showInput() {
    inputArea.innerHTML = inputString;
}

function displayInput(event) {
    let number = event.innerHTML;
    display = document.getElementsByClassName("result")[0];
    inputString = display.innerHTML==="0" ? number : display.innerHTML + number;
    display.innerHTML = display.innerHTML==="0" ? number : display.innerHTML + number;
    showInput();
}

function clearInput(event) {
    display = document.getElementsByClassName("result")[0];
    display.innerHTML = "0";
}

function insertDot(event) {
    var hasDot = re.test(display.innerHTML);
    display = document.getElementsByClassName("result")[0];
    display.innerHTML = hasDot ? display.innerHTML : display.innerHTML + ".";
}

function calculate() {
    result = eval(inputString);
    display = document.getElementsByClassName("result")[0];
    display.innerHTML = result;
}

function handleOperator(event) {
    operatorSign = event.innerHTML;

    if (re_operator.test(operatorSign)) {
        inputString += operatorSign;
    }
    showInput();
    log();
}


function log(text) {
    console.log(text);
}