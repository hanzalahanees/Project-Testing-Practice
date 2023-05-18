const analyzeArray=require('../analyzeArray.js');

test("Analyze Array Test 1", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("Analyze Array Test 2", () => {
    expect(analyzeArray([3,5,8,4,9,1,6,2,7])).toEqual({
      average: 5,
      min: 1,
      max: 9,
      length: 9,
    });
  });