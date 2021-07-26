// Bài tập trên clip

var orders = [
  { name: "Socola", quantity: 2, unitPrice: 100 },
  { name: "Trứng gà", quantity: 3, unitPrice: 12 },
  { name: "Nước ngọt coca", quantity: 10, unitPrice: 6 },
];

var initialValue = 0;
var totalPrice = orders.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.quantity * currentValue.unitPrice;
}, initialValue);

//console.log(totalPrice)

// Turn an array of voter objects into a count of how many people voted

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function totalVotes(arr) {
  var sum = 0,
    initialValue = 0;
  sum = voters.reduce(function (total, item2) {
    if (item2.voted) {
      return total + 1;
    }
    return total;
  }, initialValue);
  return sum;
}

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

function shoppingSpree(wishlist) {
  var sum = 0;
  var initialValue = 0;
  sum = wishlist.reduce(function (total, item2) {
    return total + item2.price;
  }, initialValue);
  return sum;
}

// Given an array of all your wishlist items, returns an array of titles

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

function arrayTitle(wishlist) {
  var arr = [];
  arr = wishlist.reduce(function (array, item) {
    array.push(item.title);
    return array;
  }, arr);
  return arr;
}

function arrayTitle2(wishlist) {
  return wishlist.reduce(function (array, item) {
    array.push(item.title);
    return array;
  }, []);
}
