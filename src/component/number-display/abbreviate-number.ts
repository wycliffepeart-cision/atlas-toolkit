export default function abbreviateNumber(value, language = 'en') {
  const DIGITS = 0;
  const BASE_10 = 10;
  const TRESHOLD_DIFF = 1;
  const ZEROS_TO_M = 6;
  const ZEROS_TO_K = 3;

  const number = parseFloat(value);
  if (Number.isNaN(number)) {
    throw new TypeError('Input is not a Number');
  }

  const DECIMALS = {
    millionth: {
      refValue: BASE_10 ** ZEROS_TO_M,
      label: { en: 'M' },
    },
    thousandth: {
      refValue: BASE_10 ** ZEROS_TO_K,
      label: { en: 'K' },
    },
  };

  const abbreviatedNumber = Object.values(DECIMALS)
    .sort((a, b) => b.refValue - a.refValue)
    .reduce((acc, cur) => {
      const threshold = cur.refValue - TRESHOLD_DIFF;

      if (acc) {
        return acc;
      }

      if (number > threshold) {
        return (number / cur.refValue).toFixed(DIGITS) + cur.label[language];
      }

      return '';
    }, '');

  return abbreviatedNumber;
}
