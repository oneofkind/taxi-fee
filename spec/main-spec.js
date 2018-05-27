const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it("return total cost euqal to 6 when given mileage was 2 miles", function () {
        expect(main(2, 0)).toBe(6);
        expect(main(2, 0)).not.toBe(0);
    });

    it("return total cost euqal to 8 when given mileage was 4 miles", function () {
        expect(main(4, 0)).toBe(8);
    });

    it("return total cost euqal to 16 when given mileage was 4 miles", function () {
        expect(main(10, 0)).toBe(16);
    });

    it("return total cost euqal to 6 when given mileage was 4 miles and waitTime was 10 minutes", function () {
        expect(main(10, 10)).toBe(18);
    });
});