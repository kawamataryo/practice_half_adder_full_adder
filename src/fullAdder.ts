import { BinaryNumber } from "./binalyEnum";
import { halfAdder } from "./halfAdder";
import { orCircuit } from "./orCircuit";

export const fullAdder = (
  x: BinaryNumber,
  y: BinaryNumber,
  z: BinaryNumber
): [BinaryNumber, BinaryNumber] => {
  const [c, s] = halfAdder(x, y);
  const [cd, sd] = halfAdder(s, z);
  return [orCircuit(c, cd), sd];
};

