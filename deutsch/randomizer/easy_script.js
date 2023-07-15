document.getElementById('generateEasyButton').addEventListener('click', generateRandomPhases);

function generateRandomPhases() {
  var phaseDisplay = document.getElementById('phaseDisplay');
  phaseDisplay.innerHTML = '';

  var phases = [
    "{num} ungerade",
    "{num} ungerade einer Farbe",
    "{num} gerade",
    "{num} gerade einer Farbe",
    "{num} einer Farbe",
    "Reihe mit {num}",
    "Reihe mit {num} einer Farbe",
    "{num}er Set",
    "{num}er Set einer Farbe"
  ];

  for (var i = 1; i <= 10; i++) {
    var phaseElement = document.createElement('div');
    phaseElement.classList.add('phase');

    var phaseNumberElement = document.createElement('span');
    phaseNumberElement.classList.add('phase-number');
    phaseNumberElement.textContent = "Phase " + i + ": ";

    phaseElement.appendChild(phaseNumberElement);

    var randomPhase1 = getRandomItem(phases);
    var phaseText1 = randomPhase1.replace("{num}", '<span class="phase-number-italic">' + getRandomNumber(2, 5) + '</span>');

    var phaseTextElement = document.createElement('span');
    phaseTextElement.classList.add('phase-text');
    phaseTextElement.innerHTML = phaseText1;

    phaseElement.appendChild(phaseTextElement);

    phaseDisplay.appendChild(phaseElement);
  }
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


