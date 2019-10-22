import { fullAdder } from "../src/fullAdder";

describe("全加算器", () => {
  test("adder", () => {
    expect(fullAdder(1, 0, 1)).toStrictEqual([1, 0]);
    expect(fullAdder(0, 1, 1)).toStrictEqual([1, 0]);
    expect(fullAdder(1, 1, 0)).toStrictEqual([1, 0]);
    expect(fullAdder(1, 1, 1)).toStrictEqual([1, 1]);
    expect(fullAdder(0, 0, 0)).toStrictEqual([0, 0]);
  });
});
