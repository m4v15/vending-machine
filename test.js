
//Function Get change//

var getChange = function(totalPayable, cashPaid) {
  'use strict';
  var change = [];
  var availableCoins = [200, 100, 50, 20, 10, 5, 2, 1];
  var changeValue = cashPaid - totalPayable;

  if (changeValue < 0) {
    return "give me more money!";
  }

  for (var i = 0; i < availableCoins.length; i++) {
    var coin = availableCoins[i];
    while (changeValue>=coin) {
      change.push(coin);
      changeValue = changeValue - coin;
    }
  }

  return change
}

// tests
test("testing getChange function", function (assert) {
  assert.deepEqual(getChange(1, 1), [], "test when inserting correct change (1)");
  assert.deepEqual(getChange(0, 0), [], "should return [] when no money paid for free item");
  assert.deepEqual(getChange(50, 100), [50], "getChange(50, 100) should return [50]");
  assert.deepEqual(getChange(20, 30), [10], "getChange(20, 30) should return [10]");
  assert.deepEqual(getChange(40, 100), [50, 10], "getChange(40, 100) should return [50, 10]");
  assert.deepEqual(getChange(10, 15), [5], "getChange(10, 15) should return [5]");
  assert.deepEqual(getChange(100, 50), "give me more money!", "when not enough cash paid, ask for more");
  assert.deepEqual(getChange(222, 444), [200, 20, 2], "getChange(222, 444) should return [200, 20, 2]");
});
