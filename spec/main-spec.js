const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it("return total cost euqal to 6 when given mileage was 2 miles", function () {
        let result = main(2)
        expect(result).toBe(6);
        expect(result).not.toBe(0);
    });

    it("return total cost euqal to 8 when given mileage was 4 miles", function () {
        let result = main(4)
        expect(result).toBe(8);
    });

    it("return total cost euqal to 16 when given mileage was 4 miles", function () {
        let result = main(10)
        expect(result).toBe(13);
    });

    it("return total cost euqal to 6 when given mileage was 4 miles and waitTime was 10 minutes", function () {
        let result = main(10,10)
        expect(result).toBe(16);
    });
});