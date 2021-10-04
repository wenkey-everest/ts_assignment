 
import {swapiGetter} from "./axio";

describe("swapiGetter", () => {
  test("should return status", async () => {
    const result = await swapiGetter();
    expect(result).toBe("success");
  });
});