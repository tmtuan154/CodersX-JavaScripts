// Given an array of arrays, flatten them into a single array

/**
 * Example:
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 *
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
  return arr.reduce(function (obj, item) {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
    return obj;
  }, {});
}

function countOccurrences2(arr) {
  return arr.reduce(function (obj, item) {
    obj[item] ? obj[item]++ : (obj[item] = 1);
    return obj;
  }, {});
}
