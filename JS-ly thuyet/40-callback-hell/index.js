var fs = require('fs');

fs.readFile('./song1.txt', {encoding: 'utf-8'}, function(err1, data1){
    console.log(data1);
    fs.readFile('./song2.txt', {encoding: 'utf-8'}, function(err2, data2){
        console.log(data2);
        fs.readFile('./song3.txt', {encoding: 'utf-8'}, function(err3, data3){
            console.log(data3);
        })
    })
})