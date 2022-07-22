import { it, expect } from "vitest";
import { transformNum } from "./func";

it("should should throw an error when param is empty", () => {
  const result = transformNum();

  expect(result).toBeNaN();
});

it("should transform string to number", () => {
  const param = "1";

  const result = transformNum(param);

  expect(result).toBeTypeOf("number");
});

it("should transform string to number", () => {
  const param = "1";

  const result = transformNum(param);

  expect(result).toBe(2);
});

it("should multiply number by 2", () => {
  const param = "2";

  const result = transformNum(param);

  let expectedResult = param * 2;
  expect(result).toBe(expectedResult);
});

it("should yield NaN for nun transformabe values", () => {
  const param = "input";
  const param2 = {};

  const result = transformNum(param);
  const resultTwo = transformNum(param2);

  expect(result).toBeNaN();
  expect(resultTwo).toBeNaN();
});
