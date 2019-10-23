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

export const fullAdderComplete = (
  x: BinaryNumber[],
  y: BinaryNumber[]
): BinaryNumber[] => {
  // 桁あわせ処理

  // 計算処理
  const result: BinaryNumber[] = [];
  let digit: BinaryNumber = 0;
  x.reverse().forEach((num, i) => {
    const [d, r] = fullAdder(num, y.reverse()[i], digit);
    result.push(r);
    digit = d;
  });

  if (digit === 0) {
    return result.reverse();
  }
  return [digit, ...result.reverse()];

};
