function randomColorGenerator() {
  const palleteContainer = Array.from(document.getElementsByClassName('ball'));
  for (const object of palleteContainer) {
    const colorRgbRed = (Math.random() * 255);
    const colorRgbGreen = (Math.random() * 255);
    const colorRgbBlue = (Math.random() * 255);
    object.style.backgroundColor = `rgb(${colorRgbRed}, ${colorRgbGreen}, ${colorRgbBlue})`;
  }
}
randomColorGenerator();

function changeColorNumbers(param) {
  document.getElementById('rgb-color').innerText = param;
}

function randomBallColorChoice() {
  const lotteryNumber = Math.floor(Math.random() * 6);
  const ballColor = Array.from(document.getElementsByClassName('ball'))[lotteryNumber].style['background-color'];
  return changeColorNumbers(ballColor);
}
randomBallColorChoice();

function isPendingSelection() {
  return document.getElementById('answer').innerText === 'Escolha uma cor';
}
function insertScoreInDOM(param) {
  const scoreBoardString = `${param}`;
  document.getElementById('score').innerText = scoreBoardString;
}

function addScoreToSessionStorage() {
  if (localStorage.getItem('sessionStorageScore') === null) {
    localStorage.setItem('sessionStorageScore', JSON.stringify(0));
  }
  let acumScore = JSON.parse(localStorage.getItem('sessionStorageScore'));
  acumScore += 3;
  localStorage.setItem('sessionStorageScore', JSON.stringify(acumScore));
  insertScoreInDOM(acumScore);
}

function comparisionFunction(paletteColor) {
  const downColor = paletteColor;
  const upperColor = document.getElementById('rgb-color').innerText;
  if (String(upperColor) === String(downColor)) {
    document.getElementById('answer').innerText = 'Acertou!';
    addScoreToSessionStorage();
  } else {
    document.getElementById('answer').innerText = 'Errou! Tente novamente';
  }
}

function clickListener(event) {
  if (!isPendingSelection()) {
    // User has already performed a choice in this match
    return;
  }
  const object = window.getComputedStyle(event.target, null);
  const backgroundCircleColor = object.getPropertyValue('background-color');
  comparisionFunction(backgroundCircleColor);
}

function listenClickOnColorButton() {
  Array.from(document.getElementsByClassName('ball')).forEach((elem) => {
    elem.addEventListener('click', clickListener);
  });
}
listenClickOnColorButton();

function resetButton() {
  const restoreButton = document.getElementById('reset-game');
  restoreButton.addEventListener('click', () => { document.location.reload(); });
}
resetButton();

function scoreRecover() {
  let acumScore = JSON.parse(localStorage.getItem('sessionStorageScore'));
  if (acumScore === null) {
    localStorage.setItem('sessionStorageScore', JSON.stringify(0));
    acumScore = JSON.parse(localStorage.getItem('sessionStorageScore'));
  }
  document.getElementById('score').innerText = acumScore;
}
scoreRecover();
