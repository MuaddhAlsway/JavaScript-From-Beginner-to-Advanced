var buttonElement = document.querySelector('.js-button');
if (buttonElement) {
    var hasClass = buttonElement.classList.contains('js-button');
    console.log(hasClass);
} else {
    console.log("Element with class 'js-button' not found");
}
function clickButton(){
    let buttonClick = documnet.queryselector('.js-button-click');
    if(buttonClick){
        buttonClick.classList.add('js-button-after')
        buttonClick.classList.remove('is-toggled')
    }else {

        buttonClick.innerHTML = 'Gaming';
        buttonClick.classList.remove('js-button-afe') 
    }
      
    
}

let calculation = localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value) {
  calculation += value;

  // Display the calculation on the page
  // instead of console.log
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
}