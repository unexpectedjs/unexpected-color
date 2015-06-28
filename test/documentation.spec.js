/*global unexpected*/
// THIS FILE IS AUTOGENERATED! DO NOT CHANGE IT MANUALLY.
// It is built based on the examples in the documentation folder
// when the documentation site gets build by running "make site-build".
it.skipIf = function (condition) {
    (condition ? it.skip : it).apply(it, Array.prototype.slice.call(arguments, 1));
};

describe("documentation tests", function () {
    var isBrowser = typeof weknowhow !== 'undefined';
    var isPhantom = typeof mochaPhantomJS !== 'undefined';
    var expect;
    beforeEach(function () {
        expect = unexpected.clone();
        expect.output.preferredWidth = 80;

    });

    it("assertions/string/to-be-colored.md contains correct examples", function () {
        var testPromises = [];
        expect('#f00', 'to be colored', 'red');

        try {
            expect('rgb(0, 100, 32)', 'to be colored', 'yellow');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect('rgb(0, 100, 32)', 'to be colored', 'yellow');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected 'rgb(0, 100, 32)' to be colored 'yellow'\n" +
                "\n" +
                "■■■■■■■■■■■■■■\n" +
                "#006420#ffff00"
            );
        }

        expect('red', 'not to be colored', 'yellow');
        return expect.promise.all(testPromises);
    });

    it("index.md contains correct examples", function () {
        var testPromises = [];
        try {
            expect('blue', 'to be colored', '#2233ff');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect('blue', 'to be colored', '#2233ff');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected 'blue' to be colored '#2233ff'\n" +
                "\n" +
                "■■■■■■■■■■■■■■\n" +
                "#0000ff#2233ff"
            );
        }
        return expect.promise.all(testPromises);
    });
});
