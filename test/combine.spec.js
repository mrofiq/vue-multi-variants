import { combine, combineOfArray } from "@/common/combinator";

describe("Combinator", () => {
  test("combine", () => {
    const ret = combine("A1", ["B1", "B2"]);
    expect(ret).toEqual([
      ["A1", "B1"],
      ["A1", "B2"],
    ]);
  });

  test("combine2", () => {
    const ret = combine(["H", "P"], ["S", "M"]);
    expect(ret).toEqual([
      ["H", "S"],
      ["H", "M"],
      ["P", "S"],
      ["P", "M"],
    ]);
  });

  test("combineOfArray1", () => {
    const ret = combineOfArray([["H", "P"]]);
    expect(ret).toEqual([["H"], ["P"]]);
  });

  test("combineOfArray2", () => {
    const ret = combineOfArray([
      ["H", "P"],
      ["S", "M"],
    ]);
    expect(ret).toEqual([
      ["H", "S"],
      ["H", "M"],
      ["P", "S"],
      ["P", "M"],
    ]);
  });

  test("combineOfArray3", () => {
    const ret = combineOfArray([
      ["H", "P"],
      ["S", "M"],
      ["D", "S", "K"],
    ]);
    expect(ret).toEqual([
      ["H", "S", "D"],
      ["H", "S", "S"],
      ["H", "S", "K"],
      ["H", "M", "D"],
      ["H", "M", "S"],
      ["H", "M", "K"],
      ["P", "S", "D"],
      ["P", "S", "S"],
      ["P", "S", "K"],
      ["P", "M", "D"],
      ["P", "M", "S"],
      ["P", "M", "K"],
    ]);
  });
});
