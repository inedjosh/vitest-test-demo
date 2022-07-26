import { it, expect, beforeAll, beforeEach, describe } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

beforeAll(() => {
  console.log("beforeAl()");
});

beforeEach(() => {
  console.log("beforeEach()");
});

describe.concurrent("validateStringNotEmpty()", () => {
  it("should not throw an error if param does have a lenght", () => {
    const param = "hello";

    const result = () => validateStringNotEmpty(param);

    expect(result).not.toThrow();
  });

  it("should throw an error if empty string is passed", () => {
    let param;

    const result = () => validateStringNotEmpty(param);

    expect(result).toThrow();
  });
});

describe.concurrent("validateNumber()", () => {
  it("should throw an error if params is NaN", () => {
    const param = "input";

    const result = () => validateNumber(param);

    expect(result).toThrow();
  });

  it("should not throw an error if params is a number", () => {
    const param = 1;

    const result = () => validateNumber(param);

    expect(result).not.toThrowError();
  });

  it("should throw an error if params is empty", () => {
    let param;

    const result = () => validateNumber(param);

    expect(result).toThrow();
  });
});
