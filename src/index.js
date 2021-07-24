const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  for (let charIndex = 0; charIndex < expr.length; charIndex += 10) {
    let morseLetter = "";
    if (expr[charIndex] === "*") {
      result += " ";
      continue;
    }
    for (let i = charIndex + 9; i >= charIndex; i -= 2) {
      if (expr[i - 1] === "0") {
        continue;
      }
      if (expr[i] === "1") {
        morseLetter = "-" + morseLetter;
      }
      if (expr[i] === "0") {
        morseLetter = "." + morseLetter;
      }
    }
    result += MORSE_TABLE[morseLetter];
  }
  return result;
}

module.exports = {
  decode,
};
