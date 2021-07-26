// Bài tập trên clip
var rectangle = [
  { width: 10, height: 20 },
  { width: 5, height: 2 },
  { width: 8, height: 12 },
];

var dienTich = rectangle.map(function (square) {
  return square.width * square.height;
});

// console.log(dienTich)

/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers,
 * sử dụng map method và hàm tripple để trả về 1 mảng
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */
var nhanBa = function tripple(num) {
  return num * 3;
};

function tripple(num) {
  return num * 3;
}

function multiply(numbers) {
  var ar = numbers.map(tripple);
  return ar;
}

//Cach 1:
function multiply1(numbers) {
  return numbers.map(function (x) {
    return x * 3;
  });
}

//Cach 2
function multiply2(numbers) {
  return numbers.map(nhanBa(x));
}

// Cách 3
function multiply3(array) {
  return array.map((x) => x * 3);
}

// Use array map make an array of strings of the names

var users = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

function LayTenUser(obj) {
  return obj.name;
}
// Cách 1
function namesOnly(arr) {
  var ar = arr.map(LayTenUser);
  return ar;
}

// Cách 2
function namesOnly2(arr) {
  var ar = arr.map(function (user) {
    return user.name;
  });
  return ar;
}

// Cách 3
function namesOnly3(arr) {
  return arr.map(function (user) {
    return user.name;
  });
}

console.log(namesOnly3(users));

// Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>

const users = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

function readyToPutInTheDOM(arr) {
  return arr.map(
    (item) => "<h1>" + item.name + "</h1>" + "<h2>" + item.age + "</h2>"
  );
}
