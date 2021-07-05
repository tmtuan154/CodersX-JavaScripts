// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
//arr = [0, 3, 6, 7, 4];

function powerup(arr) {
  return arr.map(function (number) {
    return number % 2 == 0 ? Math.pow(number, 2) : number;
  });
}

// Chọn ra những số chia hết cho 2, sau đó bình phương
function powerup2(arr) {
  return arr
    .filter(function (number) {
      return number % 2 == 0;
    })
    .map(function (number) {
      return Math.pow(number, 2);
    });
}

/**
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round
 */

arr = [8, 8, 6.75];
function average(arr) {
  return Math.round(arr=> arr.reduce((a, b) => a+b) /arr.length)
}

console.log(Math.round(7.8))
console.log(average(arr))
