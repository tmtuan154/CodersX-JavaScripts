// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
  return arr.filter(function (num) {
    return num >= 5;
  });
}

// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  return arr.filter(function (num) {
    return num % 2 === 0;
  });
}

/**
 * Give a list of students, filter out non-female
 */

var members = [
  { name: "Lan", gender: "female" },
  { name: "Linh", gender: "female" },
  { name: "Trung", gender: "male" },
  { name: "Peter", gender: "gay" },
];
function filterOutFemales(members) {
  return members.filter(function (member) {
    return member.gender !== "female";
  });
}
