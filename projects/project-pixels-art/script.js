function createPixel() {
  let eachPixel = document.createElement('div');
  eachPixel.classList.add('pixel')
  return eachPixel
}

function buildPixelBoard(linesColumsParam) {
  let receivedNumber = linesColumsParam

  // Construida aqui a logica para quando buildPixelBoard() (argumento vazio)
  if (typeof (receivedNumber) != 'number') {
    let lines = 5
    let columns = 5
    let firstBoardConstructed = true
    PixelBoardConstructor(lines, columns, firstBoardConstructed)

    // Construida aqui a logica para quando buildPixelBoard reber um argumento válido (diretamento do botao input)
  } else {
    let lines = receivedNumber;
    let columns = receivedNumber
    let firstBoardConstructed = false
    PixelBoardConstructor(lines, columns, firstBoardConstructed)
  }
}
buildPixelBoard()

function paletteColorPicker() {
  document.addEventListener('click', function (firstEvent) {
    let firstEventObject = firstEvent.target
    let firstPalleteColorDivObject = document.getElementById('firstPalleteColorDiv')
    if (firstPalleteColorDivObject.classList.contains('selected')) {
      if (firstEventObject.classList.contains('pixel')) {
        simplePixelPainter(firstEventObject)
      }
    }

    if (firstEventObject.classList.contains('color')) {
      if (firstEventObject.classList.contains('selected')) {
        const cssObject = window.getComputedStyle(firstEventObject);
        let bkgColor = cssObject.getPropertyValue('background-color')
        return pixelPainter(bkgColor)
      }

      let existingSelectedClass = document.getElementsByClassName('selected')[0]
      existingSelectedClass.classList.remove('selected')
      firstEventObject.classList.add('selected')

      const cssObject = window.getComputedStyle(firstEventObject);
      let bkgColor = cssObject.getPropertyValue('background-color')
      return pixelPainter(bkgColor)
    }
  }, false);
}
paletteColorPicker()

function pixelPainter(pixelColor) {
  document.addEventListener('click', function (secondEvent) {
    let secondEventObject = secondEvent.target
    if (secondEventObject.classList.contains('pixel')) {
      secondEventObject.style.backgroundColor = pixelColor
    }
  }, false);
}
pixelPainter()

function simplePixelPainter(receivedObject) {
  receivedObject.style.backgroundColor = 'black'
}

function buttonClearBoard() {
  const element = document.getElementById('clear-board')

  element.addEventListener("click", () => {
    let allPixelsObject = document.getElementsByClassName('pixel')
    for (let object of allPixelsObject) {
      object.style.backgroundColor = 'white'
    }
  });
}
buttonClearBoard()

function lineAndColumnInput() {
  const inputButtonElement = document.getElementById('generate-board')
  inputButtonElement.addEventListener("click", function () {
    let inputBoardNumber = Number(document.getElementById('board-size').value)
    if (inputBoardNumber === 0) {
      alert('Board inválido!')
    }
    buildPixelBoard(inputBoardNumber)
  }, false);
}
lineAndColumnInput()

function PixelBoardConstructor(lines, columns, firstBoardConstructed) {
  if (firstBoardConstructed === false) {
    pixelBoardDestroyer()
  }

  if (lines < 5) {
    lines = 5
    columns = 5
  }
  if (lines > 50) {
    lines = 50
    columns = 50
  }

  for (let line = 0; line < lines; line += 1) {
    let sectionPixelBoard = document.getElementById('pixel-board')
    let newDiv = document.createElement('div')
    newDiv.classList.add('container')
    sectionPixelBoard.appendChild(newDiv)

    for (let column = 0; column < columns; column += 1) {
      let createdPixel = createPixel()
      newDiv.appendChild(createdPixel)
    }
  }
}

function pixelBoardDestroyer() {
  let containerArray = Array.from(document.getElementsByClassName('container'))
  for (let item of containerArray) {
    item.remove()
  }
}

function randomColorGenerator() {
  let palleteContainer = Array.from(document.getElementsByClassName('color')).slice(1, 4)
  for (let object of palleteContainer) {
    let colorRgbRed = (Math.random() * 255)
    let colorRgbGreen = (Math.random() * 255)
    let colorRgbBlue = (Math.random() * 255)

    object.style.backgroundColor = `rgb(${colorRgbRed}, ${colorRgbGreen}, ${colorRgbBlue})`
  }
}
randomColorGenerator()

