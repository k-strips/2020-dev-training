const my_test = require('./functionsToTest');

/**
*test for passing 2 integers to add
*returns the sum of those numbers
*/
test("add x and y", () => {
  expect(my_test.add(3,4)).toBe(7);
});

/**
*test for passing invalid inputs throws the expectation
*/
test("add throws exception on int input", () => {
  expect(my_test.add).toThrow();
});

/**
*test function greet to return correct output
*/
test("return name value", () => {
  expect(my_test.greet(name)).toMatch(name);
});

/**
*test function greet to return null when
*passed invalid input
*/
test("return null on invalid input", () => {
  expect(my_test.greet(56)).toBeNull();
});

/**
*test function isGreaterThan7 for true when
*passed a number greater than 7
*/
test("return true if number > 7", () => {
  expect(my_test.isGreaterThan7(56)).toBeTruthy();
});

/**
*test function isGreaterThan7 for false when
*passed a number lesser than 7
*/
test("return false if number < 7", () => {
  expect(my_test.isGreaterThan7(5)).toBeFalsy();
});

/**
*test function isGreaterThan7 to return undefined
*when passed an invalid input
*/
test("return undefined if number is invalid", () => {
  expect(my_test.isGreaterThan7("hello")).toBeUndefined();
});

/**
*test function getCompany returns expected object
*/
test("getCompany return expected object", () => {
  expect(my_test.getCompany()).toEqual({name:"Accertix", date:2010, ceo: "Theo"});
});

/**
*test function addFloat produces the expected results
*/
test("addFloat returns expected result", () => {
  expect(my_test.addFloat()).toBeCloseTo(0.3);
});
