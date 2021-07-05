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
  ave = arr.reduce(function(num1, num2){
    return num1 + num2;
  }) / arr.length;
  return Math.round(ave);
}

function average2(arr) {
  return Math.round(arr.reduce(function(num1, num2){
    return num1 + num2;
  }) / arr.length);
}

/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
  return arr.map(function(num){
    return Math.abs(num);
  })
}


/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
  if (a==0 || b==0 || c== 0)
      return false;
  return Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) 
        || Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2) 
        || Math.pow(a, 2) +   Math.pow(c, 2) == Math.pow(b, 2)
}


/** 
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn 
 * khi biết bán kính
 * Với PI = 3.14  
*/

function circumferenceOfCircle(r) {
  return r * 2 * 3.14;
}

function acreageOfCircle(r) {
  return r * r * 3.14;
}

/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/

/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/

function trigonim(number) {
  return [Math.sin(number).toFixed(3), Math.cos(number).toFixed(3), Math.tan(number).toFixed(3)]
}
