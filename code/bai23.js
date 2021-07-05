// Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order)

function sortNumber(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

//Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)

function sortNumber(arr) {
  return arr.sort(function (a, b) {
    return b - a;
  });
}

// Sort an array from shortest string to longest

function lengthSort(arr) {
  return arr.sort(function (a, b) {
    return a.length - b.length;
  });
}

// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length

// Sort an array alphabetically

function alphabetical(arr) {
  return arr.sort(function (item1, item2) {
    return item1.charCodeAt(0) - item2.charCodeAt(0);
  });
}

// Sort the objects in the array by age

var arr = [
  {
    name: "Quiet Samurai",
    age: 22,
  },
  {
    name: "Arrogant Ambassador",
    age: 100,
  },
  {
    name: "Misunderstood Observer",
    age: 2,
  },
  {
    name: "Unlucky Swami",
    age: 77,
  },
];

function byAge(arr) {
  return arr.sort(function (item1, item2) {
    return item1.age - item2.age;
  });
}

/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần.
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */

var students = [
  { name: "A", score: 100 },
  { name: "B", score: 10 },
  { name: "C", score: 101 },
  { name: "D", score: 50 },
  { name: "E", score: 75 },
];

function getTopStudents(students) {
  // Write code here...
  var rs = students.sort(function (s1, s2) {
    return s2.score - s1.score;
  });
  return rs
    .reduce((a, s2) => {
      return a.concat(s2.name);
    }, [])
    .slice(0, 3);
}

function getTopStudents2(students) {
  return students
    .sort(function (s1, s2) {
      return s2.score - s1.score;
    })
    .reduce((arr, student) => arr.concat(student.name), [])
    .slice(0, 3);
}
