// var fs = require('promise-fs');

// // Kiểu đặt tên hàm khi dùng promise, on là khi xong gì đó

// function onDone(song){
//     console.log(song);
// }

// function onError(error){
//     console.log(error);
// }

// function readFile(path){
//     return fs.readFile(path, {encoding: 'utf-8'});
// }

// readFile('./song1.txt')
//     .then(onDone)
//     .then(function(){
//         return readFile('./song2.txt');
//     })
//     .then(onDone)
//     .catch(onError)

var fs = require('fs')

function readFile(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding: 'utf-8'}, function(err, data){
            if (err){
                reject();
            }
            resolve(data);
        })
    })
}

readFile('./song3.txt')
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    });