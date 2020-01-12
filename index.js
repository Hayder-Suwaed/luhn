var pattern = /^[0-9]+$/;

function isNotANumber(num) {
  return isNaN(num) || !pattern.test(num);
}

module.exports = function(cardNumber) {
  if (!cardNumber) return;
  if (typeof cardNumber !== "string") {
    cardNumber = String(cardNumber);
  }

  var trimmed = cardNumber.trim();
  var trimmedLength = trimmed.length;
  if (trimmedLength === 0) return;

  var cardNum = parseInt(trimmed, 10);
  if (isNotANumber(cardNum)) return;

  var total = 0;
  var calc1;
  var calc2;

  for (var i = trimmedLength; i > 0; i--) {
    calc1 = Math.floor(cardNum) % 10;
    total += calc1;

    cardNum = cardNum / 10;

    calc1 = Math.floor(cardNum) % 10;
    calc2 = calc1 * 2;

    switch (calc2) {
      case 10:
        calc2 = 1;
        break;
      case 12:
        calc2 = 3;
        break;
      case 14:
        calc2 = 5;
        break;
      case 16:
        calc2 = 7;
        break;
      case 18:
        calc2 = 9;
        break;
      default:
        calc2 = calc2;
    }

    cardNum = cardNum / 10;

    total += calc2;
    i--;
  }

  return total % 10 === 0;
};
