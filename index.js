const arrayNumber = card => {
  return card.split('').map(Number);
};
console.log(arrayNumber('5232841955055344'));
const checkEqualDigits = card => arrayNumber(card).every((digit) => digit === arrayNumber(card)[0]) ? false : true;
console.log(checkEqualDigits('4556155664231703'));
const calculateDigit = card => arrayNumber(card)
  .map((element, i) => i % 2 === 0 ? element * 2 : element)
  .map((element) => element > 9 ? element - 9 : element)
  .reduce((accumulator, currentValue) => accumulator + currentValue);
const cardValidator = card => {
  return (calculateDigit(card) % 10 === 0 && checkEqualDigits(card));
};
module.exports.cardValidator = cardValidator;