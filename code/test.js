var a = [1, 2, 3];
//console.log(a.length);

var person1 = {
  ho: "Tran",
  ten: "Tuan",
  fullName: function () {
    console.log(this.ho + " " + this.ten);
  },
  xinChao: function (message, callBack) {
    console.log("Tuan voi thong diep: " + message);
    callBack();
  },
};

//person1.fullName();

var beep = function(){
    console.log('pip pip');
}

// person1.xinChao('Hello', beep)
// person1.xinChao('Hi', function(){
//     console.log('Tit tit');
// })

var t1 = a.map(function(x){
  return x*x;
})
// console.log(t1)


var users = [
  {
    name: "Angelina Jolie",
    age: 80
    
  },
  {
    name: "Eric Jones",
    age: 2
    
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
    
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
]

// console.log(users.map(function(user){
//   return user.name  
// }))

arrdup = [1, 1, 2, 3, 3, 3,3,3, 4,4,4,5]

kq = arrdup.filter(function(number, index){
  return arrdup.indexOf(number, index + 1) === -1;
})
// console.log(kq)

var students = [
  { name: 'A', score: 100 },
  { name: 'B', score: 10 },
  { name: 'C', score: 101 },
  { name: 'D', score: 50 },
  { name: 'E', score: 75 }
];

function getTopStudents2(students) {
  return  students.sort(function (s1, s2) 
  {
      return s2.score - s1.score;
  }).reduce((arr, student) => arr.concat(student.name), []).slice(0,3);
}

console.log(getTopStudents(students))
