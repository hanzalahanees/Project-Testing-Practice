const caesarCipher = require("../caesarCipher.js");

test("Test 1", () => {
  expect(caesarCipher("pakistan", 0)).toBe("pakistan");
});

test("Test 2", () => {
  expect(caesarCipher("football", 1)).toBe("gppucbmm");
});

test("Test 3", () => {
  expect(caesarCipher("internet", 2)).toBe(
    "kpvgtpgv"
  );
});

test("Test 4", () => {
  expect(caesarCipher("project", 5)).toBe("uwtojhy");
});
