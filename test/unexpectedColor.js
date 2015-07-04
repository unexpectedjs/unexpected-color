/*global describe, it*/
var expect = require('unexpected').clone().installPlugin(require('../lib/unexpectedColor'));

describe('unexpected-color', function () {
    describe('when comparing color string representations to each other', function () {
        it('should succeed', function () {
            expect('#f00', 'to be colored', 'red');
        });

        it('should fail with a diff', function () {
            expect(function () {
                expect('green', 'to be colored', 'blue');
            }, 'to error',
                'expected \'green\' to be colored \'blue\'\n' +
                '\n' +
                '#008000#0000ff'
            );
        });
    });
});
