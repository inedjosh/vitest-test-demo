import { it, expect } from "vitest";
import { divide } from "./func";

it("should divide number by 2", () => {
  // using the AAA pattern

  // Arrange - Arrange the values to be use in your function params
  const param = 6;

  // Act - execute the function and return the result
  const result = divide(param);

  // Assert - set your expectations to succeed or fail

  const expectedResult = param / 2;

  expect(result).toBe(expectedResult);
});

it("should yield an error if the param is not a number", () => {
  const param = "inedu";

  const result = divide(param);

  expect(result).toBeNaN();
});

it("should yield an error if the param is a string", () => {
  const param = "6";

  const result = divide(param);

  const expectedResult = param / 2;

  expect(result).toBe(3);
});

it("should yield an error if no param is passed to the function", () => {
  const result = divide();

  expect(result).toBe(NaN);
});
