const steps_conv = require("./functions.js");

describe("testing converting steps into km and cals", () => {
  const steps1 = 2000;
  const steps2 = 0;
  const steps3 = 20;
  const steps4 = -10;

  it("should return a float or integer", () => {
    expect(steps_conv(steps1)).toBe(
      `Пройдено 1.61 км и потрачено 88.55 калорий`
    );
  });
  it("should return an error", () => {
    expect(steps_conv(steps2)).toBe(`Введите число больше 0`);
  });
  it("should return a float or integer", () => {
    expect(steps_conv(steps3)).toBe(
      `Пройдено 0.02 км и потрачено 1.10 калорий`
    );
  });
  it("should return an error", () => {
    expect(steps_conv(steps4)).toBe(`Введите число больше 0`);
  });
});

/* при тестировании функции, ошибок не выявлено */
