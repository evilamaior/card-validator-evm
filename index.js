const arrayNumber = card => {
  return card.split('').map(Number);
};
const calculateDigit = card => arrayNumber(card)
  .map((element, i) => i % 2 === 0 ? element * 2 : element)
  .map((element, i) => element > 9 ? element - 9 : element)
  .reduce((accumulator, currentValue) => accumulator + currentValue);    
const checkEqualDigits = card => {
  return !(card === '0000000000000000' || card === '1111111111111111' || card === '2222222222222222' || card === '3333333333333333' || card === '4444444444444444' || card === '5555555555555555' || card === '6666666666666666' || card === '7777777777777777' || card === '8888888888888888' || card === '9999999999999999');
};
const cardValidator = card => {
  return (calculateDigit(card) % 10 === 0 && checkEqualDigits(card));
};
console.log(cardValidator(''));
module.exports.cardValidator = cardValidator