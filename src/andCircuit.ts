import { Binary } from "./binalyEnum";

export const andCircuit = (x: Binary, y: Binary) => {
  if (x == Binary.ON && y == Binary.ON) {
    return Binary.ON;
  }
  return Binary.OFF;
};
