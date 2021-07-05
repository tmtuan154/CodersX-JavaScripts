/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
  var tich = 1;
  for (var number of arr) {
    tich *= number;
  }
  return tich;
}

/**
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau,
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
  bedroom: {
    area: 20,
    bed: {
      type: "twin-bed",
      price: 100,
    },
  },
};

function getObjectKey(apartment) {
  var array = [];
  for (var key in apartment) {
    console.log(key);
    array.push(key);
    var arrTemp;
    if (typeof apartment[key] === "object") {
      console.log(apartment[key]);
      arrTemp = getObjectKey(apartment[key]);
      array = array.concat(arrTemp);
    }
  }
  return array;
}

console.log(getObjectKey(apartment));

/**
 * viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */

function has(object, key) {
  for (var k in object) {
    if (k == key) {
      return true;
    }
  }
  return false;
}

/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu:
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */

function sum(numbers) {
  var sum = 0;
  for (var number of numbers) {
    sum += number;
  }
  return sum;
}
