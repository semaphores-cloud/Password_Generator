var userInput= confirm("Please uncheck the checkbox prior selecting one of the character type ");

var charTypes = {
    'up': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'low': 'abcdefghijklmnopqrstuvwxyz',
    'number': '0123456789',
    'special': '!$%^&*();#:@~./<>?'
};
window.onload = function() { 
    var inputs = document.querySelectorAll('form div input[type=text]');
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var div = input.parentElement;
        var type = div.id;
        input.value = charTypes[type];
        input.size = 35;
        var anchor = div.querySelector('a');
        anchor.onclick = function (input, type) {
            return function () {
                input.value = charTypes[type];
                return false;
            };
        }(input, type);
    }
}

function _generatePassword(passwordLength, charBlocks) {
    var allChars = "";
    for (var i = 0; i < charBlocks.length; i++) {
        allChars += charBlocks[i];
    }
    var numChars = allChars.length;
    var password = "";
    for (var i = 1; i <= passwordLength; i++) {
        password += allChars.charAt(Math.floor(Math.random() * numChars));
    }
    return password;
}
function generatePassword(passwordLength) {
    var charBlocks = [];
    for (id in charTypes) {
        var isClicked = document.querySelector('div#' + id + ' input[type=checkbox]').checked;
        var value = document.querySelector('div#' + id + ' input[type=text]').value;
        if (isClicked) {
            charBlocks.push(value);
        }
    }
    
    var $length = document.getElementById('length');
    var passwordLength = parseInt($length.value)
    
    var password = _generatePassword(passwordLength, charBlocks);
    var $display = document.getElementById('display'); 
    $display.textContent  = password;
}

function myFunction() {
    var copyText = document.getElementById("display");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
  
    alert("Copied the text: " + copyText.value);
}
  
