//Javascript Document

let submitButton = document.getElementById("submit").onclick
(function updateDisplay()
{

    fetch('cats.json').then(function(response) {
        response.json().then(function(text){
           submitButton.json=text; 
        });
    });

})
