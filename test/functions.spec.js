let assert = require("chai").assert

function pow(x, n) {
  if (typeof x === "number" && typeof n === "number") {
    return x** n
  } else {
    return "x and n should be numbers only"
  }
}

describe("pow", function() {

    it("raises to n-th power", function() {
      assert.equal(pow(2, 3), 8);
    });

    it("returns should be numbers if x and n are not numbers", function(){
      assert.equal(pow("hello", "bye"), "x and n should be numbers only")
    })
  
  });