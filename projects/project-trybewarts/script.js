const rcvDataFromButton = document.getElementById('submit-button');
const entryPatternData = ['tryber@teste.com', '123456'];
const lowerSubmitButtonObject = document.getElementById('submit-btn');
const checkedButtonObject = document.getElementById('agreement');

function loginButton() {
  const inputEmailData = document.getElementById('email').value;
  const inputPasswordData = document.getElementById('password').value;

  if (inputEmailData === entryPatternData[0] && inputPasswordData === entryPatternData[1]) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  console.log('Olá');
}
function enableCheckButton() {
  lowerSubmitButtonObject.disabled = !checkedButtonObject.checked;
}

rcvDataFromButton.addEventListener('click', loginButton);
checkedButtonObject.addEventListener('change', enableCheckButton);
window.onload = () => {
  lowerSubmitButtonObject.disabled = !checkedButtonObject.checked;
};

function printRemainingChars() {
  const elementCounter = document.getElementById('counter');
  const remainingTextAreaChars = document.getElementById('textarea').maxLength;
  elementCounter.innerHTML = remainingTextAreaChars;
}
window.onload = printRemainingChars;

function calc() {
  const elementCounter = document.getElementById('counter');
  const elementTextareaWithLength = document.getElementById('textarea').value.length;
  const inicialParam = document.getElementById('textarea').maxLength;

  const lenghtVariable = inicialParam - elementTextareaWithLength;
  elementCounter.innerHTML = lenghtVariable;
}

const textAreaListener = () => {
  const elementTextarea = document.getElementById('textarea');
  elementTextarea.addEventListener('keyup', calc);
};
textAreaListener();
