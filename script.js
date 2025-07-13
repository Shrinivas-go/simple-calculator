let calculation = '';
  function updateCalculation(value){
    calculation += value;
    document.querySelector('.js-result').innerHTML = calculation;
  }

  function evalCalculation(){
    calculation = eval(calculation);
    document.querySelector('.js-result').innerHTML = calculation;
  }

  function clearCalculation(){
  calculation = '&nbsp;';
  document.querySelector('.js-result').innerHTML = calculation;

  }