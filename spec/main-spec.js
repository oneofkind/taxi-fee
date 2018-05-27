const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it("a spec with an expectation", function () {
        expect(main(1)).toBe(1);
        expect(1 === 1).toBe(true);
        expect('a').not.toBe('b');
    });
});