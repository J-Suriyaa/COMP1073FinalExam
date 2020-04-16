// JavaScript Document

let main = document.querySelectorAll('main');
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body');

submitButton.addEventListener('click', function(e) {
  let personName = input.value;
  let para = document.createElement('p');
  para.innerHTML ='Hey there' + personName + '! Thanks for stopping by!';
  main.appendChild(para);
  body.setAttribute('class', 'meow');
  console.log('=^..^='); 
});

