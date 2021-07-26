// Sử dụng co

var fs = require('fs');
var co = require('co');

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

// co(function*(){
//     var song1 = yield readFile('../data/song1.txt');
//     var song2 = yield readFile('../data/song2.txt');
//     var song3 = yield readFile('../data/song3.txt');
//     return [song1, song2, song3];
// })
// .then(values=>console.log(values))
// .catch(err=>console.log(err))

// co(function*(){
//     return yield [readFile('../data/song1.txt'), readFile('../data/song2.txt'), readFile('../data/song3.txt')]
// })
// .then(values=>console.log(values))
// .catch(err=>console.log(err))


// Sử dụng co như hàm

var readFiles = co.wrap(function*(files){
    return yield files.map(function(file){
        return readFile(file);
    })
})

readFiles(['../data/song1.txt', '../data/song2.txt', '../data/song3.txt'])
    .then(values=> console.log(values))
    .catch(err=>console.log(err));