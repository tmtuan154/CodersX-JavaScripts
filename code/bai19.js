// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
  return array.find(function (num) {
    return num % 2 === 0;
  });
}

/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example:
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

function findDivisibleNum(array, x) {
  return array.find(function (num) {
    return num % x === 0;
  });
}
