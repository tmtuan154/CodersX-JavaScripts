// async function trả về một promise do đó chung ta có thể sử dụng then

var fs = require('fs');

function readFile(path){
    return new Promise(function(resolve, reject){
        return fs.readFile(path, {encoding: 'utf-8'}, function(err, data){
            if (err){
                reject(err);
            }
            resolve(data)
        })
    })
}

async function run(){
    return [await readFile('../data/song1.txt'), await readFile('../data/song2.txt')];
}

run().then(values => console.log(values)).catch(err=>console.log(err));