import { BinaryNumber } from "./binalyEnum";
import { andCircuit } from "./andCircuit";
import { xorCircuit } from "./xorCircuit";

export const halfAdder = (
  x: BinaryNumber,
  y: BinaryNumber
): [BinaryNumber, BinaryNumber] => {
  return [andCircuit(x, y), xorCircuit(x, y)];
};
