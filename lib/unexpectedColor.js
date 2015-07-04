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
                if (output.raw) {
                    output.raw({
                        fallback: function () {
                            this.text(color.hex());
                        },
                        ansi: function () {
                            this.block(function () {
                                this.text('       ', 'bg' + color.hex()).nl().white(color.hex());
                            });
                        },
                        html: function () {
                            this.raw({
                                width: 6,
                                height: 2,
                                content:
                                    '<div style="width: 3.6em; width: 6ch; height: 1em; display: inline-block; padding: 1.2em 0 0 0; background-color: ' + color.hex() + '">' +
                                        '<div style="color: ' + (color.lightness() > 0.5 ? 'black' : 'white') + '; font-size: 80%; text-align: center;">' + color.hex() + '</div>' +
                                    '</div>'
                            });
                        }
                    });
                } else {
                    // Unexpected < 9.0.0
                    output.block(function () {
                        this.text('■■■■■■■', color.hex()).nl().text(color.hex());
                    });
                }
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
