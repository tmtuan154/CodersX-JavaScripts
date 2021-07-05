/**
* Dùng vòng lặp for kiểm tra số nguyên tố.
* @param {number} x Số cần kiểm tra
* @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
*/

function isPrimeNumber(x) {
    if (x == 1 ){
        return false;
    }
    if (x==2 ||  x == 3){
        return true;
    }
  for(var i= 2; i <= Math.sqrt(x);i ++){
      if (x % i == 0){
          return false;
      }
  }
  return true;
}

// ------------------------------------------
/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */
 
 function fromCharCode() {
    var str = '';
 for(var i = 97; i<123; i++){
     str =str + String.fromCharCode(i);
 }
 console.log(str);
 return str
}


// ------------------------------------------
/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

 function sum(array) {
    var total = 0;
  for(var i = 0 ;i <array.length;i++){
      total += array[i];
  }
  return total;
}



// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */

 function sumMultiplyArray(a, b) {
    var sum=0;
    for(var i=0;i<a.length;i++){
        for(var j=0;j<b.length;j++){
            sum= sum + (a[i] * b[j]);
        }
    }
    return sum;
  }


  /**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
    var sum = 1 ;
    for(var i = start; i< end; i++){
        sum *= i;
    }
    return sum;
  }



  /**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

*/
function has(array, value) {
    for(var i =0;i<array.length;i++){
        if(array[i] == value){
            return true;
        }
    }
    return false;
  }



  function factorials(number) {
    var sum = 1;
    for(var i=2 ;i<=number; i++){
        sum = sum*i;
    }
    return sum;
  }