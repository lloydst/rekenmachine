
// start this script once html is loaded
$(document).ready(function(){
    // declaration of global vars
    var result = 0;
    var operation = null;
    var currentEntry= '0';
    var prevEntry = 0;
    updateResult = function(displayValue) {
    displayValue = displayValue.toString();
        $('.result').html(displayValue.substring(0, 10));
    };

    isNumber = function(value) {
        return !isNaN(value);
    }

    isOperator = function(value) {
        return value === '/' || value === '*' || value === '+' || value === '-';
    };

operate = function(a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  if (operation === '+') return a + b;
  if (operation === '-') return a - b;
  if (operation === '*') return a * b;
  if (operation === '/') return a / b;
}
    // gets the value of the pressed button and store's it in result
    $('input:button').click(function(){
        var buttonPressed = $(this).val()
        //dealing with C and equal key + bussiness logic
        if (buttonPressed === 'C'){
            result = 0;
            currentEntry = '0';
        } else if(buttonPressed === '=') {
            currentEntry = operate(prevEntry, currentEntry, operation);
            operation = null;
        }  else if (isNumber(buttonPressed)) {
            if (currentEntry === '0') {
                currentEntry = buttonPressed;
            } else {
                currentEntry += buttonPressed;
            } 
        } else if (isOperator(buttonPressed)) {
            prevEntry = parseFloat(currentEntry);
            operation = buttonPressed;
            currentEntry = '';
        }
        updateResult(currentEntry);
    })

})

