const convertNumberToWord = (number: number) => {
  if(number.toString.length == 1) {
    return convertFirstDigit(number);
  }

  return 0;
}

const convertFirstDigit = (firstDigit: number) => {
  return firstDigitNumArray[firstDigit];
}

const firstDigitNumArray = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten'
]

export { convertNumberToWord };
