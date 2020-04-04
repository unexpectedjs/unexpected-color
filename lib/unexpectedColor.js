const oneColor = require('onecolor');

module.exports = {
  name: 'unexpected-color',
  installInto(expect) {
    expect.addType({
      name: 'oneColor',
      identify(obj) {
        return obj && obj.isColor && typeof obj.saturate === 'function';
      },
      equal(color1, color2) {
        return color1.hex() === color2.hex();
      },
      inspect(color, depth, output) {
        output.alt({
          fallback() {
            this.text(color.hex());
          },
          ansi() {
            this.block(function () {
              this.text('       ', `bg${color.hex()}`).nl().white(color.hex());
            });
          },
          html() {
            this.raw({
              width: 6,
              height: 2,
              content:
                `<div style="width: 3.6em; width: 6ch; height: 1em; display: inline-block; padding: 1.2em 0 0 0; background-color: ${color.hex()}">` +
                `<div style="color: ${
                  color.lightness() > 0.5 ? 'black' : 'white'
                }; font-size: 80%; text-align: center;">${color.hex()}</div>` +
                `</div>`,
            });
          },
        });
      },
      diff(actual, expected, output, diff, inspect, equal) {
        return output.append(inspect(actual)).append(inspect(expected));
      },
    });

    expect.addAssertion(
      '<oneColor|string> [not] to be colored <oneColor|string>',
      (expect, subject, value) => {
        expect(oneColor(subject), '[not] to equal', oneColor(value));
      }
    );
  },
};
