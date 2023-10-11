const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = '';
  let array = [];
  for (let i = 0; i < expr.length; i += 10) {
    let letter = expr.slice(i, i + 10);
    array.push(letter);
  }
  array.forEach(symbol => symbol === '*'.repeat(10) ? result += ' ' : result += decodeLetter(symbol));
  return result;
}

function decodeLetter(letter) {
  let letterKey = '';
  for (let i = 0; i < letter.length; i += 2) {
    let symbol = letter.slice(i, i + 2);
    if (symbol === '10') letterKey += '.';
    if (symbol === '11') letterKey += '-';
  }
 return MORSE_TABLE[letterKey];
}

module.exports = {
    decode
}