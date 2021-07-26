/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
  for (var i = 0; i < n; i++) {
    arr.pop();
  }
  return arr;
}

/**
 * Viết function trả về n phần tử đầu tiên có trong mảng.
 */

function first(arr, n) {
  var a = [];
  for (var i = 0; i < n; i++) {
    a.push(arr.shift());
  }
  return a;
}
