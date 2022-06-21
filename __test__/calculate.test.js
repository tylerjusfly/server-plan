const calculate = require("../src/services/serverPlanner");

test("first PassedTest", () => {
  expect(1 + 1).toBe(2);
});

test("should recommend 2 servers", () => {
  const serverType = { CPU: 2, RAM: 32, HDD: 100 };

  const VM = [
    { CPU: 1, RAM: 16, HDD: 32 },
    { CPU: 1, RAM: 16, HDD: 10 },
    { CPU: 2, RAM: 32, HDD: 100 },
  ];
  const result = calculate(serverType, VM);
  expect(result).toBe(2);
});

test("should recommend 3 servers", () => {
  const serverType = { CPU: 1, RAM: 32, HDD: 100 };

  const VM = [
    { CPU: 1, RAM: 16, HDD: 32 },
    { CPU: 1, RAM: 32, HDD: 50 },
    { CPU: 1, RAM: 32, HDD: 100 },
  ];

  const result = calculate(serverType, VM);
  expect(result).toBe(3);
});
