let choices = document.querySelectorAll(".choice");
let audioButton = document.querySelector(".dengarkan-button");
const arabicLetters = [
  0x0627, 0x0628, 0x062a, 0x062b, 0x062c, 0x062d, 0x062e, 0x062f, 0x0630,
  0x0631, 0x0632, 0x0633, 0x0634, 0x0635, 0x0636, 0x0637, 0x0638, 0x0639,
  0x063a, 0x0641, 0x0642, 0x0643, 0x0644, 0x0645, 0x0646, 0x0647, 0x0647,
  0x064a, 0x0621,
];
const arabicHarakats = [0x064e];
const wordLength = 6;

function generateArabicWord(length, letters, harakats) {
  let result = "";
  let arrayResult = [];
  const lettersLength = letters.length;
  const harakatsLength = harakats.length;
  for (let i = 0; i < length; i++) {
    if (i % 2 !== 0) {
      arrayResult.push(harakats[Math.floor(Math.random() * harakatsLength)]);
      arrayResult.push(0x0020);
    } else {
      arrayResult.push(letters[Math.floor(Math.random() * lettersLength)]);
    }
  }
  result = String.fromCharCode(...arrayResult);
  return result;
}

function makeExercise(audioButton, choices, length, letters, harakats) {
  let words = [];

  for (let index = 0; index < 4; index++) {
    words.push(generateArabicWord(length, letters, harakats));
  }

  const choosenWord = words[Math.floor(Math.random() * words.length)];

  const exerciseAudio = getTextToSpeech(choosenWord);

  choices.forEach((item) => {
    let choice = item.querySelector("input");
    let choiceLabel = item.querySelector("span");
    if (words[-1] === choosenWord) {
      choice.setAttribute("src", "benar");
    }
    choiceLabel.innerHTML = words.pop();
  });
}

function getTextToSpeech(word) {}

function checkAnswer(params) {}

makeExercise(audioButton, choices, wordLength, arabicLetters, arabicHarakats);
