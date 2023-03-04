const form = document.querySelector('form');
const validMessage = document.querySelector('#validMessage');
const invalidMessage = document.querySelector('#invalidMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const numA = document.querySelector('#numA').valueAsNumber;
  const numB = document.querySelector('#numB').valueAsNumber;

  if (numB > numA) {
    validMessage.innerHTML = 'Parabéns, formulário válido!';
    invalidMessage.innerHTML = '';
  } else {
    invalidMessage.innerHTML = 'Opa, formulário inválido!';
    validMessage.innerHTML = '';
  }
});
