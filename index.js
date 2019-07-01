const arrayNumber = card => {
  return card.split('').map(Number);
};
const checkEqualDigits = card => arrayNumber(card).every((digit) => digit === arrayNumber(card)[0]) ? false : true;
const calculateDigit = card => arrayNumber(card)
  .map((element, i) => i % 2 === 0 ? element * 2 : element)
  .map((element) => element > 9 ? element - 9 : element)
  .reduce((accumulator, currentValue) => accumulator + currentValue);
const cardValidator = card => {
  return (checkEqualDigits(card) && card.length === 16 && calculateDigit(card) % 10 === 0);
};
module.exports.cardValidator = cardValidator;