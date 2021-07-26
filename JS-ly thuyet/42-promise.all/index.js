var fs = require('fs');
const { findSourceMap } = require('module');

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

// readFile('../data/song1.txt')
//     .then(function(data){
//         console.log(data);
//         return readFile('../data/song2.txt');
//     })
//     .then(function(data){
//         console.log(data);
//         return readFile('../data/song3.txt');
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(err){
//         console.log(err);
//     });

Promise.all([
    readFile('../data/song1.txt'),
    readFile('../data/song2.txt'),
    readFile('../data/song3.txt')
]).then(values => console.log(values)).catch(err => console.log(err));