const assert = require("assert");
const greeter = require("./index.js");

describe("greet function", () => {
  it("should greet Marcus properly", () => {
    // act
    const actualResult = greeter.greet("Marcus");
    // assert
    assert.equal("Welcome to SALT, Marcus", actualResult);
  });

  it("should greet Eliza properly", () => {
    // act
    const actualResult = greeter.greet("Eliza");
    // assert
    assert.equal("Welcome to SALT, Eliza", actualResult);
  });

  it("should give error message for ''", () => {
    let actualResult = null;
    // act
    try {
        actualResult = greeter.greet("");
    } catch (error) {
        actualResult = error.message;
    }
    // assert   
    assert.rejects("Please enter valid name", actualResult)

  });

  it("should plural greeting for 'Eliza and Marcus'", () => {
    // act
    const actualResult = greeter.greet("Eliza", "Marcus");
    // assert
    assert.equal("Welcome to SALT, Eliza and Marcus", actualResult);
  });
});
