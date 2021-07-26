/* 
    Chuyển đổi từ Object <-> Json
    1. Object -> Json: stringiỳ
    2. Json -> Object: parse

    Khi tạo biến chứa JSON thì dùng dấu ngoặc kép, ngoặc đơn sẽ báo lỗi
*/

/* var myDog = {name: 'Ben', age: 4, unit: 'month', live: 'Tien Giang'};
var myDogJson = JSON.stringify(myDog);

// console.log(myDog);
// console.log(myDogJson);

// -----------

var myDog2 = '{"name":"Ben","age":4,"unit":"month","live":"Tien Giang"}';
var myDog2Object = JSON.parse(myDog2);
console.log(myDog2Object); */

var readlineSync = require('readline-sync');
var fs = require('fs')

/*
    1. Show all student
    2. Create new student
    3. Save and exits
 */

let dogs;
let allDogs = []
let edited = true; // Không có sự chỉnh sửa (thêm mới dog)
var path = './data.json';

var dogTemp = {name: 'Ben4', age: 2, unit: 'month', live: 'Tien Giang'}

function showAllDog(){
    var data = fs.readFileSync(path, {encoding: 'utf-8'})
    var lines = data.split('\n');
    lines.forEach((line) => {
        allDogs.push(JSON.parse(line))
    })
    allDogs.push(dogTemp);
    console.log(allDogs);
}

function showAllDog1(){
    var data = fs.readFileSync(path)
    allDogs = JSON.parse(data);
    console.log(allDogs);
}

function craeteNewDog(){
    var name = readlineSync.question('Ten con cho: ');
    var age = readlineSync.question('Nhap tuoi con cho: ');
    var unit = readlineSync.question('Nhap don vi tinh: ');
    var live = readlineSync.question('Nhap noi song: ');
    return {name: name, age: age, unit: unit, live: live}
}

function saveAndExit(){
    if (!edited){
        return;
    }
    var data = allDogs.reduce(function(text, dog){
        // console.log(text);
        // console.log(dog);
        return text + JSON.stringify(dog) + '\n';
    }, '');
    data = data.slice(0, data.length - 1)
    console.log(data);
    fs.writeFileSync(path, data);
}

function saveAndExit2(){
    fs.writeFileSync(path, JSON.stringify(allDogs));
}


showAllDog1();
saveAndExit2();