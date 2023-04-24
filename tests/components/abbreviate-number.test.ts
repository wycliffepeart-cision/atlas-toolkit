import abbreviateNumber from '../../src/component/number-display/abbreviate-number';

const AVAILABLE_LANG = 'en';

describe('number abbreviation function', () => {
  it('returns abbreviated value for given numeric value and a given lang', () => {
    const thousands = abbreviateNumber(1000, AVAILABLE_LANG);

    (expect(thousands) as any).toEqual('1K');

    const millions = abbreviateNumber(1000000, AVAILABLE_LANG);
    (expect(millions) as any).toEqual('1M');
  });

  it('returns abbreviated value for default "en" lang if no option is set', () => {
    const thousands = abbreviateNumber(1000);
    (expect(thousands) as any).toEqual('1K');

    const millions = abbreviateNumber(1000000);
    (expect(millions) as any).toEqual('1M');
  });

  it('returns abbreviated value if input is parsable', () => {
    const thousands = abbreviateNumber('1000 parsable');
    (expect(thousands) as any).toEqual('1K');

    const millions = abbreviateNumber('1000000 parsable');
    (expect(millions) as any).toEqual('1M');
  });

  it('should fail if value is not a parsable value', () => {
    try {
      abbreviateNumber('not parsable');
    } catch (error) {
      (expect(error.name) as any).toEqual('TypeError');
    }
  });
});
