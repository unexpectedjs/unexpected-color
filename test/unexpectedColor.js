const expect = require('unexpected')
  .clone()
  .use(require('../lib/unexpectedColor'));

describe('unexpected-color', () => {
  describe('when comparing color string representations to each other', () => {
    it('should succeed', () => {
      expect('#f00', 'to be colored', 'red');
    });

    it('should fail with a diff', () => {
      expect(
        () => {
          expect('green', 'to be colored', 'blue');
        },
        'to error',
        "expected 'green' to be colored 'blue'\n" + '\n' + '#008000#0000ff'
      );
    });
  });
});
