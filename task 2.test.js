const getPercents = require("./task 2");

describe("should return percentage from number", () => {
  it("should return percentage", () => {
    expect(getPercents(50, 300)).toBe(console.log(150));
  });
  it("should return an error", () => {
    expect(getPercents("ddd", 200)).toBe(console.log("Введите число"));
  });
  it("should return an error", () => {
    expect(getPercents(-5, 100)).toBe(console.log("Введите число больше 0"));
  });
});
