import * as insort from "../src/insertion-sort.js";
import assert from "assert";

it("Playground setup", () => {
  assert.equal(insort.playground(), 0);
});

describe("insertionSort", function () {
  it("should return an empty array when given an empty array", function () {
    assert.deepEqual(insort.step_0([]), []);
  });

  it("should return the same array when given an array with one element", function () {
    assert.deepEqual(insort.step_0([1]), [1]);
  });

  xit("should sort an array of numbers in ascending order", function () {
    assert.deepEqual(insertionSort([5, 2, 4, 6, 1, 3]), [1, 2, 3, 4, 5, 6]);
  });

  xit("should maintain the relative order of equal elements (stability)", function () {
    assert.deepEqual(insertionSort([5, 2, 4, 2, 1, 3]), [1, 2, 2, 3, 4, 5]);
  });

  xit("should sort an already sorted array", function () {
    assert.deepEqual(insertionSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });

  
});
