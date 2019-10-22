import { Binary } from "./binalyEnum";

export const xorCircuit = (x: Binary, y: Binary) => {
  if (x == Binary.ON && y == Binary.ON) {
    return Binary.OFF;
  }
  if (
    (x == Binary.ON && y == Binary.OFF) ||
    (x == Binary.OFF && y == Binary.ON)
  ) {
    return Binary.ON;
  }
  return Binary.OFF;
};
