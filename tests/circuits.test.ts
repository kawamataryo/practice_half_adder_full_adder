import { Binary } from "../src/binalyEnum";
import { orCircuit } from "../src/orCircuit";
import { xorCircuit } from "../src/xorCircuit";
import { andCircuit } from "../src/andCircuit";

describe("回路", () => {
  describe("AND回路", () => {
    test("正常に動作する", () => {
      expect(andCircuit(Binary.ON, Binary.ON)).toBe(Binary.ON);
      expect(andCircuit(Binary.OFF, Binary.ON)).toBe(Binary.OFF);
      expect(andCircuit(Binary.ON, Binary.OFF)).toBe(Binary.OFF);
      expect(andCircuit(Binary.OFF, Binary.OFF)).toBe(Binary.OFF);
    });
  });

  describe("OR回路", () => {
    test("正常に動作する", () => {
      expect(orCircuit(Binary.ON, Binary.ON)).toBe(Binary.ON);
      expect(orCircuit(Binary.OFF, Binary.ON)).toBe(Binary.ON);
      expect(orCircuit(Binary.ON, Binary.OFF)).toBe(Binary.ON);
      expect(orCircuit(Binary.OFF, Binary.OFF)).toBe(Binary.OFF);
    });
  });

  describe("XOR回路", () => {
    test("正常に動作する", () => {
      expect(xorCircuit(Binary.ON, Binary.ON)).toBe(Binary.OFF);
      expect(xorCircuit(Binary.OFF, Binary.ON)).toBe(Binary.ON);
      expect(xorCircuit(Binary.ON, Binary.OFF)).toBe(Binary.ON);
      expect(xorCircuit(Binary.OFF, Binary.OFF)).toBe(Binary.OFF);
    });
  });
});
