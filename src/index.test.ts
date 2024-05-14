import { describe, expect, test } from "vitest";
import type { CSSObject } from ".";
import { css } from ".";
describe("defineComponent", () => {
  test("inputed parameter and return value is to be equal", () => {
    const input: CSSObject = {
      background: "red",

      ":hover": {
        background: "blue",
      },
    };

    expect(css(input)).toBe(input);
  });
});
