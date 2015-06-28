var oneColor = require('onecolor');

module.exports = {
    name: 'unexpected-color',
    installInto: function (expect) {
        expect.addType({
            name: 'oneColor',
            identify: function (obj) {
                return obj && obj.isColor && typeof obj.saturate === 'function';
            },
            equal: function (color1, color2) {
                return color1.hex() === color2.hex();
            },
            inspect: function (color, depth, output) {
                output.block(function () {
                    this.text('■■■■■■■', color.hex()).nl().text(color.hex());
                });
            },
            diff: function (actual, expected, output, diff, inspect, equal) {
                return {
                    diff: output.append(inspect(actual)).append(inspect(expected))
                };
            }
        });

        expect.addAssertion(['oneColor', 'string'], '[not] to be colored', function (expect, subject, value) {
            expect(oneColor(subject), '[not] to equal', oneColor(value));
        });
    }
};
