/**
 * 1. Viết hàm double nhận vào 1 số bất kì, trả về  số đó nhân đôi
 *  Vd: double(2) === 4
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function.
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó,
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 * 3. Nếu mảng trống trả về giá trị 0
 * Vd: sumAndDo([1, 2, 3], double) === 12
 */

var double = function (num) {
  return num * 2;
};

function sumAndDo(array, double) {
  var sum = 0;
  for (var num of array) {
    sum += num;
  }
  sum = double(sum);
  return sum;
}

/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback.
 * Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó,
 * được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */

function transform(numbers, double) {
  var result = [];
  for (var number of numbers) {
    result.push(double(number));
  }
  return result;
}

var double = function (num) {
  return num * 2;
};
