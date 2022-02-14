import { combineOfArray } from "./combinator";

function typevalue({ type, values }) {
  return values.flatMap((x) => [{ type, value: x }]);
}

function generateVariant(variants) {
  return combineOfArray(variants.map((x) => typevalue(x)));
}

export { typevalue, generateVariant };
