import { halfAdder } from "../src/halfAdder";

describe("半加算器", () => {
  test("正常に動作する", () => {
    expect(halfAdder(1, 1)).toStrictEqual([1, 0]);
    expect(halfAdder(1, 0)).toStrictEqual([0, 1]);
    expect(halfAdder(0, 1)).toStrictEqual([0, 1]);
    expect(halfAdder(0, 0)).toStrictEqual([0, 0]);
  });
});
